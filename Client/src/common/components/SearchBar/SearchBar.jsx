import React, { useState } from "react";
import { useGetAllPokemonQuery } from "./services/pokemonApi";

export const SearchBar = () => {
  const { data, isLoading, error } = useGetAllPokemonQuery();
  const [search, setSearch] = useState("");

  const filtered = data?.results.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading Pokémon</p>}
      {search && (
        <ul className="mt-2 max-h-60 overflow-y-auto border rounded">
          {filtered?.map((p) => (
            <li key={p.name} className="p-2 hover:bg-gray-100">
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
