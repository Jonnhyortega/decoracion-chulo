const products = [
  {
    id: 1,
    name: "Botiquin Marron",
    price: 1000,
    image: "/assets/imgs/productos/botiquin-marron.jpeg",
  },
  {
    id: 2,
    name: "Botiquin Blanco",
    price: 1000,
    image: "/assets/imgs/productos/botiquin-blanco.jpeg",
  },
  {
    id: 3,
    name: "Divisor Blanco",
    price: 1000,
    image: "/assets/imgs/productos/divisor-blanco.jpeg",
  },
  {
    id: 4,
    name: "Divisor Opaco",
    price: 1000,
    image: "/assets/imgs/productos/divisor-opaco.jpeg",
  },
  {
    id: 5,
    name: "Divisor Opaco plastico",
    price: 3000,
    image: "/assets/imgs/productos/divisor-opaco-plastico.jpeg",
  },
  {
    id: 6,
    name: "Divisor Opaco ",
    price: 1020,
    image: "/assets/imgs/productos/divisor-opaco.jpeg",
  },
  {
    id: 7,
    name: "Divisor vidrio",
    price: 1000,
    image: "/assets/imgs/productos/divisor-opaco-plastico.jpeg",
  },
  {
    id: 8,
    name: "Respaldo cama",
    price: 10000,
    image: "/assets/imgs/productos/respaldo-cama.jpeg",
  },
];

const productsContainer = document.querySelector("#productos-container");
let arrayProducts = JSON.parse(localStorage.getItem("arrayProducts")) || [];

const cargarProductos = (array) => {
  productsContainer.innerHTML = ''; 
  array.map((p) => (productsContainer.innerHTML += `${template(p)}`));
  addEventsButtonsAdd();
};

function saveToLs() {
  localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts));
}

function template(product) {
  return `
  <div class="card">
      <img
      id="producto-img"
      src="${product.image}"
      alt="${product.name}"
      />
      <div class="box-card">
      <span id="price">$${product.price}</span>
      <span id="descuento">-15%</span>
      </div>
      <span id="description">${product.name}</span>
      <div class="box-card-button">
      <button id="${product.id}" class="agregar"><i class="fa-solid fa-cart-shopping"></i>
      </button>
</div>
  `;
}

function templateCart(product) {
  return `
  <div id="producto-agregado">
    <img
      id="img-carrito"
      src="${product.image}"
      alt="imagen del producto"
    />
    <span id="name-item-carrito">${product.name}</span>
    <div id="box-adds-items">
      <i
        data-id="${product.name}"
        class="add fa-solid fa-plus"
      ></i>
      <span id="quantity-item-carrito">${product.cuantity}</span>
      <i
        data-id="${product.name}"
        class="subtract fa-solid fa-minus"
      ></i>
    </div>
    <span id="price-item-carrito">$${
      product.price * product.cuantity
    }</span>
  </div>
  `;
}

function addEventsButtonsCart() {
  document.querySelectorAll(".add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      arrayProducts.map((p) => {
        if (p.name === e.currentTarget.dataset.id) {
          p.cuantity += 1;
          saveToLs();
          renderProductsCart();
        }
      });
    });
  });

  document.querySelectorAll(".subtract").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      arrayProducts.map((p) => {
        if (p.name === e.currentTarget.dataset.id) {
          if (p.cuantity == 1) {
            arrayProducts = arrayProducts.filter(
              (p) => p.name !== e.currentTarget.dataset.id
            );
            saveToLs();
            renderProductsCart();
          } else if (p.cuantity > 1) {
            p.cuantity -= 1;
            saveToLs();
            renderProductsCart();
          }
        }
        return;
      });
    });
  });
}

function addEventsButtonsAdd() {
  let btn = document.querySelectorAll(".agregar");
  btn.forEach((b) => {
    b.addEventListener("click", (e) => {
      let product = products.find((p) => p.id == e.currentTarget.id);
      let existingMovie = arrayProducts.some((p) => p.id == product.id);
      if (existingMovie) {
        console.log("ya existe en el array este producto");
      } else if (!existingMovie) {
        product.cuantity = 1;
        arrayProducts.push(product);

        saveToLs();
        console.log(`Agregado ${arrayProducts}`);
        console.log(arrayProducts);
        renderProductsCart();
      }
    });
  });
}

function totalCuantityProductos(array){
  let totalCuantity = 0
    array.forEach(p=>{totalCuantity += p.cuantity})
    return totalCuantity
}

console.error(totalCuantityProductos(arrayProducts))

function renderProductsCart() {
  let dropdownMenu = document.querySelector(".dropdown-menu");
  
  document.querySelector("#numberProducts").innerHTML = totalCuantityProductos(arrayProducts);

  if (arrayProducts.length > 0) {
    dropdownMenu.innerHTML = `
      <p>Productos</p>
      <div id="productos-agregados">
        ${arrayProducts.map((p) => templateCart(p)).join("")}
      </div>
      <div id="total-container">Total $${totalBuy(arrayProducts)}</div>
    `;
    addEventsButtonsCart();
  } else {
    dropdownMenu.innerHTML = `
      <p id="cartEmpty">Carrito vacío</p>
    `;
  }
}

function totalCuantityProductos(array) {
  return array.reduce((acc, item) => acc + item.cuantity, 0);
}

   

// HELPER FUNCTION
function totalBuy(array) {
  let totalBuy = 0;
  array.forEach((x) => {
    let total = x.cuantity * x.price;
    totalBuy += total;
  });
  return totalBuy;
}

// SEARCH PRODUCT
let searchButton = document.querySelector("#buscar");

const filterProducts = (query) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(query.toLowerCase().slice(0, 3))
  );
  return filteredProducts.length > 0 ? filteredProducts : false;
};

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos(products);
  renderProductsCart();
});

document.querySelector(".dropdown-menu").addEventListener("click", (e) => {
  e.stopPropagation();
});

searchButton.addEventListener("click", () => {
  
  let searchInput = document.querySelector("#search").value;
  let productsToRender = filterProducts(searchInput);
  if(productsToRender == false){
    productsContainer.innerHTML = `<p>No se encontro</p>`
    productsContainer.style.gridTemplateColumns = "1fr"
  }else {
    productsContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
    productsContainer.innerHTML = ''; 
    cargarProductos(productsToRender);
  }
});
