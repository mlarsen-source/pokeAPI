export default function DataCard({data}) {
  
  let name = data.name.toUpperCase()
  
  let allTypes = data.types.map((each, index)=>
    <div key={index}>
      <p>Slot {each.slot}: {each.type.name}</p>
    </div>
  )

  return(
    <section className="data-card-section">
      <h3>{ name }</h3>
      <div>{ allTypes }</div>
    </section>
  )

}