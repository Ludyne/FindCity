import formatCode from "./formatCcode.js";

export default function Item({
  nom,
  codeDepartement,
  codesPostaux,
  population,
  format,
}) {
  return (
    <li className="grid grid-cols-3 p-4 my-4 rounded-md shadow-md border border-solid odd:bg-white even:bg-gray-100">
      <span>
        <strong>{nom}</strong> - {codeDepartement}
      </span>
      <span className="text-center">
        <span className="opacity-50">Code Postal :</span> {codesPostaux[0]}
      </span>
      <span className="text-right">
        <span className="opacity-50">Population :</span>{" "}
        {format ? formatCode(population) : population}
      </span>
    </li>
  );
}
