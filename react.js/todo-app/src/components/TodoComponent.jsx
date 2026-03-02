export default function TodoComponent(props,children) {
  return (
    <div>
      <h4>{props.title}</h4>
      {children}
    </div>
  );
}