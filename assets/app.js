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

function cargarProductos() {
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
  
  <div class="box-card-button">
    <button onclick="agregarProducto();" id="${producto.id}" class="agregar">Agregar</button>
    <i class="fa-solid fa-cart-shopping"></i>
  </div>
    `;
    productosContainer.append(div);
  });
}

cargarProductos();
// PRODUCTOS

// Funciones CARRITO de compras

// DESPLEGAR
const carritoDeCompras = document.getElementById("productos-carrito");

const abrirCarrito = () => {
  if (carritoDeCompras.classList.contains("carrito-desplegado")) {
    carritoDeCompras.classList.remove("carrito-desplegado");
  } else {
    carritoDeCompras.classList.add("carrito-desplegado");
  }
};
// DESPLEGAR

// Agregar productos
const carroDeCompras = document.getElementById("productos-agregados");
const arrayDeProductos = [];
const agregarProducto = (producto) => {
  arrayDeProductos.push(productos[producto]);
};

// Funciones CARRITO de compras

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

