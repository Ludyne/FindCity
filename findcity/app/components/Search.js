export default function Search() {
  return (
    <div>
      <form>
        <h2 className="uppercase font-bold mb-1 mt-4 text-sm">
          Recherche par nom de commune
        </h2>
        <label htmlFor="search">
          <input
            className="border-solid border-2 mr-2 border-gray-400 w-4/5 p-2 rounded-md"
            type="text"
            id="search"
            placeholder="Paris, Marseille, Lyon..."
          />
        </label>
        <button className="p-2 rounded-md bg-black text-white" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  );
}
