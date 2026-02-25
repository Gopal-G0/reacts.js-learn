export default function ListComponent () {
  
  const fruits = ['Apple', 'Banana', 'Mangoes', 'Plum', 'Pomegranate'];
  
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{ fruit }</li>
        })}
      </ul>
    </div>
  );
}