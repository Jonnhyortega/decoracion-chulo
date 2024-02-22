const nav = document.getElementById("navegador-mobile");

const desplegarMenu = () => {
  if (nav.classList.contains("desplegado")) {
    nav.classList.remove("desplegado");
  } else {
    nav.classList.add("desplegado");
  }
};
