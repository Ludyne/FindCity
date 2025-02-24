"use client";

import Search from "./components/Search";
import List from "./components/List";
import { useState } from "react";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useSWR(
    searchTerm.trim() !== ""
      ? `https://geo.api.gouv.fr/communes?nom=${searchTerm}`
      : null,
    fetcher
  );

  return (
    <main className=" items-center justify-between p-24">
      <h1 className="text-4xl border-b border-gray-500 pb-2">
        Recherche par nom de commune
      </h1>
      <Search setSearchTerm={setSearchTerm} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.length > 0 && <List cities={data} />}
    </main>
  );
}
