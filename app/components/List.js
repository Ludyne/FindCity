import Item from "./Item";
import { useState } from "react";

export default function List({ cities }) {
  const [format, setFormat] = useState(false);

  return (
    <section className="m-2">
      <div className="flex bg-slate-700 rounded-md">
        <h2 className=" text-white m-2">
          Résultat{cities.length > 0 && "s"} : {cities.length}
        </h2>
        <button
          className="p-2 rounded-md bg-black hover:bg-gray-800 text-white ml-auto"
          onClick={() => setFormat(!format)}
        >
          Changer le format
        </button>
      </div>
      <ul>
        {cities.map((city) => (
          <Item key={city.code} {...city} format={format} />
        ))}
      </ul>
    </section>
  );
}
