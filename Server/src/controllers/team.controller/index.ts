import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTeam = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userId, name } = req.body;
    const allUsersTeams = await prisma.team.findMany({
      where: { userId: userId },
    });

    const team = await prisma.team.create({
      data: {
        name: name ? name : `Team ${allUsersTeams.length + 1}`,
        userId: userId,
      },
      select: {
        id: true,
        name: true,
        pokemon: true,
      },
    });
    return res.json(team);
  } catch (err: any) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const updateTeamPokemon = async (req: Request, res: Response): Promise<any> => {
  try {
    const { teamId, pokemon } = req.body;

    await Promise.all(
      pokemon.map((pokemonId: any) => {
        prisma.pokemon.upsert({
          where: { id: pokemonId },
          update: {},
          create: {
            id: pokemonId,
          },
        });
      })
    );

    const updatedTeam = await prisma.team.update({
      where: { id: teamId },
      data: {
        pokemon: {
          set: pokemon.map((p: any) => ({ id: p })),
        },
      },
      select: {
        id: true,
        name: true,
        pokemon: true,
      },
    });

    return res.json(updatedTeam);
  } catch (err: any) {
    console.log(err);
    return res.sendStatus(400);
  }
};
