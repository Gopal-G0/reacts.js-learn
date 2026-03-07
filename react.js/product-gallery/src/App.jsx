import ProductList from "./ProductList";

function App() {
  const products = [
    {
      id: 1,
      image: "https://shorturl.at/xLp2o",
      name: "Nike Shoes",
      price: "$500",
    },
    {
      id: 2,
      image: "https://shorturl.at/0YF3o",
      name: "Motorola Edge 50 Fusion",
      price: "INR 22k",
    },
    {
      id: 3,
      image: "https://shorturl.at/ig7ZT",
      name: "Google Pixel 10",
      price: "$924",
    },
    {
      id: 4,
      image: "https://shorturl.at/NIGaq",
      name: "1984: By George Orwell",
      price: "$INR 450",
    },
    {
      id: 5,
      image: "https://shorturl.at/DP9l2",
      name: "DJI Drone",
      price: "$750",
    },
    {
      id: 6,
      image: "https://rb.gy/4b475q",
      name: "MacBook M4 Chip",
      price: "$1400",
    },
  ];
  
  const btnStyle = {
    width: 130,
    height: 40,
    borderRadius: 7,
    border: "1px solid #623CEA",
    fontSize: 17,
    fontWeight: 550,
    backgroundColor: "#623CEA",
    color: "#E9F1F7"
  }

  return (
    <div>
      <ul style = {{listStyle: "none", margin:0, display: "flex", gap: 50}}>
        {products.map(product => (
          <li key={product.id}>
            <img style = {{width:200, height: 200, boxShadow: "2px 2px 2px 3px", borderRadius: 10}}
              src={product.image}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            <h3>Price: {product.price}</h3>
            <button style = {btnStyle}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      
      <ProductList />
    </div>
  );
}

export default App;
