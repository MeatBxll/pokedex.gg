import "./BuildTeamOptionsPokemonSingle.css";

interface BuildTeamOptionsPokemonSingleProps {
  url: any;
  name: string;
  onClick?: any;
}

export const BuildTeamOptionsPokemonSingle = (
  props: BuildTeamOptionsPokemonSingleProps
) => {
  const { url, name, onClick } = props;

  const id = url.split("/").filter(Boolean).pop(); // "1"
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <button onClick={onClick} draggable="true" className="bTOPS__wrap">
      <div>{name}</div>
      <img draggable="false" alt={name} width={70} height={70} src={imageUrl} />
    </button>
  );
};
