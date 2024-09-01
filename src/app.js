/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excusa").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pro = ["Mi", "El", "Tu"];
  let quien = [" perro", " gato", " loro", " raton"];
  let verbo = [" se ha comido", " ha cogido", " se ha llevado"];
  let objetivo = [" mi teclado", " mi libro", " tus deberes", " mi movil"];
  let donde = [" en casa", " en la biblioteca", " a la carretera"];

  let pro1 = Math.floor(Math.random() * pro.length);
  let pro2 = Math.floor(Math.random() * quien.length);
  let pro3 = Math.floor(Math.random() * verbo.length);
  let pro4 = Math.floor(Math.random() * objetivo.length);
  let pro5 = Math.floor(Math.random() * donde.length);

  return pro[pro1] + quien[pro2] + verbo[pro3] + objetivo[pro4] + donde[pro5];
};
