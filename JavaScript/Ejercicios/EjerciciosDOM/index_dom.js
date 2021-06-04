/**
 * Clase principal de la lógica JS.
 */

import  { alarma, relojDigital } from "./hora_alarma.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {shortcuts, moveBall} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js"

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj","#iniciar-reloj","#detener-reloj");  //# cuando es un id
    alarma("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
    countdown("countdown", "Jun 02, 2022 02:27:19", "Feliz Cumpleaños :)" ); //nombre del id directo del selector
    scrollTopButton(".scroll-top-btn");
})

/**
 * Eventos del teclado
 * keydown --> Cuando presionamos la tecla
 * keyup   --> Cuando Soltamos la tecla
 * keypress --> mientras se tenga la tecla presionada se va a ejecutar
 */

d.addEventListener("keydown", e => {
    // shortcuts(e);
    moveBall(e, ".ball", ".stage"); //Evento, balon, escenario mirar html
})


