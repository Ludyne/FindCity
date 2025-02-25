"use client";

import { useState } from "react";

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
    <form className="mt-4 m-2" onSubmit={handleSubmit}>
      <h2 className="uppercase font-bold mb-1 text-sm">Nom de la commune</h2>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          className="flex-1 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Entrez le nom d'une commune..."
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="button"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
