import Search from "./components/Search";
import List from "./components/List";

const cities = [
  {
    code: "75000",
    name: "Paris",
    department: "75",
    zipCode: "75000",
    population: "2140526",
  },
  {
    code: "13000",
    name: "Marseille",
    department: "13",
    zipCode: "13000",
    population: "861635",
  },
];
export default function Home() {
  return (
    <main className=" items-center justify-between p-24">
      <h1 className="text-4xl border-b border-gray-500 pb-2">
        Recherche par nom de commune
      </h1>
      <Search />
      <List cities={cities} />
    </main>
  );
}
