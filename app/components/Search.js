"use client";

import { useState, useEffect } from "react";

export default function Search({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="uppercase font-bold mb-1 mt-4 text-sm">
          Recherche par nom de commune
        </h2>
        <label htmlFor="search">
          <input
            className="border-solid border-2 mr-2 border-gray-400 w-4/5 p-2 rounded-md"
            type="text"
            id="search"
            placeholder="Paris, Marseille, Lyon..."
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button className="p-2 rounded-md bg-black text-white" type="submit">
          Lancer la recherche
        </button>
      </form>
    </div>
  );
}
