import "./BuildTeamOptionsPokemonSingle.css";

interface BuildTeamOptionsPokemonSingleProps {
  img: any;
  name: string;
  onClick?: any;
}

export const BuildTeamOptionsPokemonSingle = (
  props: BuildTeamOptionsPokemonSingleProps
) => {
  const { img, name, onClick } = props;
  return (
    <button onClick={onClick} draggable="true" className="bTOPS__wrap">
      {name}
      {img}
    </button>
  );
};
