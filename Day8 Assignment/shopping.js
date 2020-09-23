let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product5.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product9.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Black TShirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product4.jpg",
    description: "Good looking Black TShirt",
  },

  {
    id: 4,
    name: "Yellow Female Tshirt",
    size: "M",
    color: "yellow",
    price: 3000,
    image: "product10.jpg",
    description: "Beautifull Tshirt",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product11.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product1.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Gray Tshirt",
    size: "L",
    color: "Gray",
    price: 1200,
    image: "product7.jpg",
    description: "Good looking Gray tshirt",
  },
  {
    id: 8,
    name: "Army Shirt",
    size: "M",
    color: "Multi Color",
    price: 500,
    image: "product8.jpg",
    description: "Good looking Army shirt",
  },

  {
    id: 9,
    name: "navy Blue TShirt",
    size: "S",
    color: "White & Blue",
    price: 900,
    image: "product6.jpg",
    description: "Good looking Nevy Blue",
  },

  {
    id: 10,
    name: "Green Femal Tshirt",
    size: "M",
    color: "Green",
    price: 300,
    image: "product12.jpg",
    description: "Beautifull Green Tshirt",
  },

  {
    id: 11,
    name: "Yellow kurti",
    size: "S",
    color: "Yellow",
    price: 1000,
    image: "product2.jpg",
    description: "Good looking Kurti",
  },

  {
    id: 12,
    name: "White Dress",
    size: "L",
    color: "White",
    price: 1500,
    image: "product3.jpg",
    description: "Good looking Traditional Dress",
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);
// function searchProduct(max) {
//   return products.reduce(function (memo, product) {
//     if (max <= product.price) {
//       memo.push(product);
//     }
//     return memo;
//   }, []);
// }

function searchProduct1(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  let pro = getProductByID(products, id);

  cart.push(pro);
  displayProducts(cart, "cart");

  console.log(pro);
}

function removeFromCart(id) {
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  cart.splice(index, 1);
  displayProducts(cart, "cart");
}
