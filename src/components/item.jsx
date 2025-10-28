import React from "react";
import DataCard from "./DataCard"
import ImageCard from "./ImageCard"

export default function Item() {
  const [data, setData] = React.useState(null);
  

  function fetchData() {
    const num = Math.floor(Math.random() * 1326)+1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((r) => r.json())
      .then((json) => setData(json));
  }
  console.log(data)
  
  let content = false
  let url =""
  let name = ""
  let types = ""
  if (data != null) {
   content = true;
   url = data.sprites.front_default
   name = data.name
   types = data.types
  
  }

 

  return (
    <main>
      <ImageCard 
        content = {content}
        url = {url}/>
      <DataCard
        name = {name.toUpperCase()}
        types={types}
       />
      <button onClick={fetchData}>Get a Random Pokémon</button>
    </main>
  );
}
