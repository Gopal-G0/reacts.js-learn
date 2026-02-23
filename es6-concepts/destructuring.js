const productId = 1;
const productName = "Acer Aspire 3 Laptop";
const rating = 4.7;

// const product = {
//     id: productId,
//     productName: productName,
//     rating : rating
// }

const product = {
  productId,
  productName,
  rating,
};

console.log(product);

const product2 = {
  description: "Product 2 description",
  productId,
  productName,
  rating,
};

// const getProduct2Decrp = product2.description;
// console.log(getProduct2Decrp);

const { description } = product2; // Object Destructuring
console.log(description);

//Array Destructuring
const array = [1, 2, 3, 4];

// let a = array[0];
// let b = array[1];
// let c = array[2];

const [a, b, c, d] = array;

console.log(a, b, c, d);
