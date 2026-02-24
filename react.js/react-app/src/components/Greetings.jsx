export default function Greeting(props) {
  return (
    <div className="greeting-card">
      <h1>Hello, こんにちは {props.name}</h1>
      <p>Welcome to Learn React.Js</p>
    </div>
  );
}