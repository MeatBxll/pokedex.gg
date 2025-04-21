fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const fetchPokemon = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not fetch pokemon:", error);
  }
};

fetchPokemon("pikachu");
