export default function CardComponent(props) {
  
  const cardStyle = {
    border: "1px solid grey",
    padding: 10,
    width: 250,
    margin: 10,
    borderRadius: 15
  }
  
  return (
    <div style = {cardStyle}>
      <img style={{width:105, height:105, borderRadius:50}} src={props.image} ></img>
      <h2>Name: {props.name}</h2>
      <h4>worksAs: {props.jobTitle}</h4>
      <h4>Email: {props.email}</h4>
      
    </div>
  );
}