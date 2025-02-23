export default function Item({ city, department, zipCode, population }) {
  return (
    <li className="grid grid-cols-3 p-4 my-0.5 rounded-md shadow-md border border-solid">
      <span>
        <strong>{city}</strong> - {department}
      </span>
      <span>
        <span>Code Postal :</span> {zipCode}
      </span>
      <span>
        <span>Population :</span> {population}
      </span>
    </li>
  );
}
