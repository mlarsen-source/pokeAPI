export default function DataCard({data}) {
  
  let name = data.name.toUpperCase()
  let baseExp = data.base_experience
  
  let allTypes = data.types.map((each, index)=>
    <li key={index}>
      Slot {each.slot}: {each.type.name}
    </li>
  )
  let allAbilities = data.abilities.map((each, index)=>
    <li key={index}>
      Slot {each.slot}: {each.ability.name}
    </li>
  )

  return(
    <section className="data-card-section">
      <h3>{ name }</h3>
      <p>Base Exp: {baseExp}</p>
      <h4>Types: </h4>
        <ul> {allTypes }</ul>
      <h4>Abilities:</h4>
        <ul>{ allAbilities }</ul>
    </section>
  )

}