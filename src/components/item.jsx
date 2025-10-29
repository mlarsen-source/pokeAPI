import React from "react";
import DataCard from "./DataCard"
import ImageCard from "./ImageCard"

export default function Item() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [clicked, setClicked] = React.useState(false); 
  
  function fetchData() {
    setData(null)
    setError(null)
    setClicked(true)
    
    const num = Math.floor(Math.random() * 1100) +1;
    console.log(num)
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error));
  }
  
  return (
    <main>
      <div className="pokemon-card">
        {error?
          <p>Something went wrong, please try again.</p> : null} 
        {data? 
          <section>
            <DataCard 
              data = {data}
            />
            <ImageCard
              data ={data}
            /> 
          </section>: (
            clicked && !error ? <p>loading...</p>: null)}
      </div>
      <button onClick={fetchData}>Catch a Random Pokémon</button>
    </main>
  );
}
