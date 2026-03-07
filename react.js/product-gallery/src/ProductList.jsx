export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Acer Laptop",
      price: "$340",
    },
    {
      id: 2,
      name: "Apple Iphone 16",
      price: "$1200",
    },
    {
      id: 3,
      name: "Apple Ipad",
      price: "$650",
    },
  ];
  
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}
              <br />
              {product.price}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
