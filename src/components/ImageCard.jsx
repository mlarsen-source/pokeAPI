export default function ImageCard(props) {
  return (
    <>
      {props.content ? <img src={props.url}/> : null}
    </>
  );
}