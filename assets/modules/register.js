// almacenar datos en storage
const users = JSON.parse(localStorage.getItem(users)) || [];

// funciones para validar
// chequea si el campo esta vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};
//verifica que el input tenga un minimo y un maximo de caracteres
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

//
const isEmailValid = () => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  // testeamos
  return te.test(input.value.trim());
};
// funcion para validar si el mail existe

const isExistingEmail = () => {
  users.some((user) => email === input.value.trim());
};

// funcion para validar el password
const isPassSecure = () => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return (re = re.test(input.value.trim()));
};

// Funcion para valir el telefono
const isPhoneValid = (input) => {
  const re = /^[0-9]{10}$/;
  // testeamos
  return re.test(input.value.trim());
};

//funcion para mostrar el eror al validar el input
