const nav = document.getElementById("navegador-mobile");

const desplegarMenu = () => {
  if (nav.classList.contains("desplegado")) {
    nav.classList.remove("desplegado");
  } else {
    nav.classList.add("desplegado");
  }
};


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

document.addEventListener("DOMContentLoaded", function () {
  var cardsContainer = document.querySelector(".cards-container");
  var verMasButton = document.getElementById("verMas");
  var cards = document.querySelectorAll(".card");
  var mostrarPorClick = 4; // Cantidad de tarjetas a mostrar por clic
  var indiceInicio = 0;

  // Ocultar todas las tarjetas al cargar la página
  ocultarTarjetas();

  // Función para ocultar todas las tarjetas
  function ocultarTarjetas() {
    cards.forEach(function (card) {
      card.style.display = "none";
    });
  }

  // Función para mostrar las siguientes tarjetas
  function mostrarSiguientesTarjetas() {
    var i;
    for (i = indiceInicio; i < indiceInicio + mostrarPorClick; i++) {
      if (cards[i]) {
        cards[i].style.display = "block";
      }
    }
    indiceInicio += mostrarPorClick;

    // Ocultar botón si no hay más tarjetas por mostrar
    if (indiceInicio >= cards.length) {
      verMasButton.style.display = "none";
    }
  }

  // Mostrar las primeras tarjetas al cargar la página
  mostrarSiguientesTarjetas();

  // Evento click del botón "Ver más"
  verMasButton.addEventListener("click", function () {
    mostrarSiguientesTarjetas();
  });
});
