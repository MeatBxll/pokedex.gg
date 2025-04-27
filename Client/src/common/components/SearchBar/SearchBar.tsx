import React, { useState } from "react";
import { useGetAllPokemonQuery } from "../../../api/pokemon/pokemonApiEndpoints";
import "./SearchBar.css";
import { Link } from "react-router-dom";

interface SearchBarProps {
  OnClick?: any;
  FontSize?: string;
}

export const SearchBar = (props: SearchBarProps) => {
  const { OnClick, FontSize } = props;
  const limit = 1025;
  const offset = 0;
  const { data, isLoading, error } = useGetAllPokemonQuery({ limit, offset });
  const [search, setSearch] = useState("");

  const filtered = data?.results.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="searchBar__wrap">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar__text-input"
        style={{ fontSize: FontSize || "1.4rem" }}
      />
      <div
        className="searchBar__search-results-wrap"
        style={search === "" ? {} : { padding: "2rem" }}
      >
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading Pokémon</p>}
        {search && (
          <ul>
            {filtered?.map((p) => {
              return !OnClick ? (
                <Link
                  to={`/pokePage/${p.name}`}
                  className="searchBar__search-result"
                  key={p.name}
                  onClick={() => setSearch("")}
                >
                  {p.name}
                </Link>
              ) : (
                <button className="searchBar__search-result" key={p.name}>
                  {p.name}
                </button>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
