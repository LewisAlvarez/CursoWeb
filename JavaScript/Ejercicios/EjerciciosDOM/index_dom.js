import  { alarma, relojDigital } from "./hora_alarma.js";
import hamburgerMenu from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj","#iniciar-reloj","#detener-reloj")  //# cuando es un id
    alarma("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma")
})
