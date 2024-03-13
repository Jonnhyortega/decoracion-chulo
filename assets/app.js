// DESPLEGAR MENU
const nav = document.getElementById("navegador-mobile");

const desplegarMenu = () => {
  if (nav.classList.contains("desplegado")) {
    nav.classList.remove("desplegado");
  } else {
    nav.classList.add("desplegado");
  }
};
// DESPLEGAR MENU

// PRODUCTOS

const productos = [
  {
    id: 1,
    nombre: "Botiquin Marron",
    precio: 1000,
    imagen: "/assets/imgs/productos/botiquin-marron.jpeg",
  },
  {
    id: 2,
    nombre: "Botiquin Blanco",
    precio: 1000,
    imagen: "/assets/imgs/productos/botiquin-blanco.jpeg",
  },
  {
    id: 3,
    nombre: "Divisor Blanco",
    precio: 1000,
    imagen: "/assets/imgs/productos/divisor-blanco.jpeg",
  },
  {
    id: 4,
    nombre: "Divisor Opaco",
    precio: 1000,
    imagen: "/assets/imgs/productos/divisor-opaco.jpeg",
  },
  {
    id: 5,
    nombre: "Divisor Opaco plastico",
    precio: 1000,
    imagen: "/assets/imgs/productos/divisor-opaco-plastico.jpeg",
  },
];

const productosContainer = document.querySelector("#productos-container");

const cargarProductos = (e) => {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img
    id="producto-img"
    src="${producto.imagen}"
    alt="${producto.nombre}"
  />
  
  <div class="box-card">
  <span id="price">$${producto.precio}</span>
  <span id="descuento">-15%</span>
  </div>
  
  <span id="description">${producto.nombre}</span>
  
  <div class="box-card-button" onclick="agregarProducto();">
  <button id="${producto.id}" class="agregar">Agregar</button>
  <i class="fa-solid fa-cart-shopping"></i>
  </div>
  `;
    productosContainer.append(div);
  });
};

cargarProductos();
// PRODUCTOS

// Shopping cart functions
// Funciones CARRITO de compras

// Expand menu
// DESPLEGAR menu
const carritoDeCompras = document.getElementById("productos-carrito");

const abrirCarrito = () => {
  if (carritoDeCompras.classList.contains("carrito-desplegado")) {
    carritoDeCompras.classList.remove("carrito-desplegado");
  } else {
    carritoDeCompras.classList.add("carrito-desplegado");
  }
};
// DESPLEGAR MENU
// Expand menu

// Agregar productos
const carroDeCompras = document.getElementById("productos-agregados");
const arrayDeProductosAgregados = [];
let productoAgregado = document.getElementById("producto-agregado");
const agregarProducto = () => {
  let numberProducts = document.getElementById("number-products");
  currentNumber = parseInt(numberProducts.textContent);
  let newNumber = currentNumber + 1;
  numberProducts.textContent = newNumber;
  arrayDeProductos.push(productos[producto]);
};

const sustraerProducto = () => {
  let numberProducts = document.getElementById("number-products");
  let currentNumber = parseInt(numberProducts.textContent);
  if (currentNumber === 0) {
    return;
  } else {
    let newNumber = currentNumber - 1;
    numberProducts.textContent = newNumber;
  }
};
// Funciones CARRITO de compras
// Shopping cart functions

// MOSTRAR PASSWORD DE LOGIN
function mostrarPassword() {
  var passwordInput = document.getElementById("password-login");
  var icon = document.getElementById("button-show-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
