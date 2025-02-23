import Item from "./Item";

export default function List({ cities }) {
  return (
    <div>
      <ul>
        {cities.map((city) => (
          <Item key={city.code} {...city} />
        ))}
      </ul>
    </div>
  );
}
