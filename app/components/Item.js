export default function Item({
  nom,
  codeDepartement,
  codesPostaux,
  population,
}) {
  return (
    <li className="grid grid-cols-3 p-4 my-0.5 rounded-md shadow-md border border-solid">
      <span>
        <strong>{nom}</strong> - {codeDepartement}
      </span>
      <span>
        <span>Code Postal :</span> {codesPostaux}
      </span>
      <span>
        <span>Population :</span> {population}
      </span>
    </li>
  );
}
