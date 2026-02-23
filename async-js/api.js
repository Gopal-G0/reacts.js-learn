const productList = document.querySelector(".List");
console.log(productList);

function renderProducts(productItems) {
  productList.innerHTML = productItems.map((products) => {
    return `<p>${products.title}</p>`;
  }).join(" ");
}

async function getProductList() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    console.log(result);

    if (result?.products?.length > 0) {
      renderProducts(result?.products);
    }
  } catch (e) {
    console.log(e);
  }
}

getProductList();
