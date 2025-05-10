import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface EvolutionChainNode {
  species: { name: string };
  evolves_to: EvolutionChainNode[];
}

interface EvolutionChainProps {
  chain: EvolutionChainNode | null;
}

export const EvolutionChainLine = ({ chain }: EvolutionChainProps) => {
  if (!chain) return null;

  const traverseChain = (node: EvolutionChainNode): string[] => {
    if (!node || !node.species) return [];

    let names: string[] = [node.species.name];
    if (node.evolves_to && node.evolves_to.length > 0) {
      for (let evo of node.evolves_to) {
        names = names.concat(traverseChain(evo));
      }
    }
    return names;
  };

  const evolutionNames = traverseChain(chain);

  if (evolutionNames.length === 0) return <div>No evolutions found.</div>;

  return (
    <div style={{ fontSize: "1.5rem", color: "white", marginTop: "1rem" }}>
      {evolutionNames.map((name, idx) => (
        <Link
          to={`/pokePage/${name}`}
          className="evolutionChainLine__link"
          key={name}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
          {idx < evolutionNames.length - 1 && <FaArrowRight />}
        </Link>
      ))}
    </div>
  );
};
