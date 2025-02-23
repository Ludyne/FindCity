import Image from "next/image";
import Search from "./components/Search";
import List from "./components/List";

export default function Home() {
  return (
    <main className=" items-center justify-between p-24">
      <h1 className="text-4xl border-b border-gray-500 pb-2">
        Recherche par nom de commune
      </h1>
      <Search />
      <List />
    </main>
  );
}
