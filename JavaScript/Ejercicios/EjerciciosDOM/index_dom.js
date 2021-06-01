/**
 * Clase principal de la lógica JS.
 */

import  { alarma, relojDigital } from "./hora_alarma.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {shortcuts} from "./teclado.js"

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj","#iniciar-reloj","#detener-reloj")  //# cuando es un id
    alarma("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma")
})

/**
 * Eventos del teclado
 * keydown --> Cuando presionamos la tecla
 * keyup   --> Cuando Soltamos la tecla
 * keypress --> mientras se tenga la tecla presionada se va a ejecutar
 */

d.addEventListener("keydown", e => {
    /*
    shortcuts(e);
    shortcuts(e.key);
    shortcuts(e.keyCode);
    shortcuts(e.ctrlKey);
    shortcuts(e.altKey);
    shortcuts(e.shiftKey);
    */

    //Cuando el usuario presione las tecla alt + a, abre un alert
    if (e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado (Shortcuts)");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Esta es una confirmación lanzada desde el teclado")
    }

    if (e.key === "p" && e.altKey) {
        prompt("Esto es un aviso lanzado desde el teclado")
    }
})