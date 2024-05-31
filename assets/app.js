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

const cargarProductos = () => {
  products.map((p) => (productsContainer.innerHTML += `${template(p)}`));
  addEventsButtonsAdd();
};

function saveToLs(){
localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts))
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
                          id="add-item"
                          class="fa-solid fa-plus"
                        ></i>
                        <span id="quantity-item-carrito">1</span>
                        <i
                          id="subtract-item"
                          class="fa-solid fa-minus"></i>
                      </div>
                      <span id="price-item-carrito">${product.price}</span>
                    </div>
  `;
}

function addEventsButtonsAdd() {
  let btn = document.querySelectorAll(".agregar");
  btn.forEach((b) => {
    b.addEventListener("click", (e) => {
      let product = products.find((p) => p.id == e.currentTarget.id);
      console.log(product)
      let existingMovie = arrayProducts.some(p => p.id == product.id)
      if(existingMovie){
        console.log("ya existe en el array esta pelicula")
      }else {
        arrayProducts.push(product)
        saveToLs()
        console.log(`Agregado ${arrayProducts}`)
      }
    });
  });
}

function renderProductsCart(){
  let productosAgregados = document.querySelector("#productos-agregados")
  let dropdownMenu = document.querySelector(".dropdown-menu")
  let containerTotal = document.querySelector("#total-container")
  if(arrayProducts.length > 0) {
    productosAgregados.innerHTML = arrayProducts.map(p => templateCart(p)).join('');
    containerTotal.textContent = `Total $ ${TOTAL}`
  } else {
    document.querySelector(".dropdown-menu").innerHTML = `Carrito vacio`
  }
}

document.addEventListener("DOMContentLoaded", cargarProductos);
document.addEventListener("DOMContentLoaded", renderProductsCart);
document.querySelector(".dropdown-menu").addEventListener("click", (e) => {
  e.stopPropagation()
})
console.log(arrayProducts)