import Item from "./Item";

export default function List() {
  return (
    <div>
      <Item city="Paris" department="75" zipCode="75000" population="2140526" />
      <Item
        city="Marseille"
        department="13"
        zipCode="13000"
        population="861635"
      />
      <Item city="Lyon" department="69" zipCode="69000" population="515506" />
      <Item
        city="Toulouse"
        department="31"
        zipCode="31000"
        population="479553"
      />
      <Item city="Nice" department="06" zipCode="06000" population="343848" />
      <Item city="Nantes" department="44" zipCode="44000" population="280213" />
    </div>
  );
}
