export default function ImageCard({data}) {
  let url = data.sprites.front_default
  return (
    <section className="image-card-section">
      <img src={url}/>
    </section>
  );
}