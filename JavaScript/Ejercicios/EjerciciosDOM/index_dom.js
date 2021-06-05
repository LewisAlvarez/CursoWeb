/**
 * Clase principal de la lógica JS.
 */

import  { alarma, relojDigital } from "./hora_alarma.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {shortcuts, moveBall} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js"
import darkTheme from "./tema-oscuro.js";
import responsiveMedia from "./objeto_responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj","#iniciar-reloj","#detener-reloj");  //# cuando es un id
    alarma("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
    countdown("countdown", "Jun 02, 2022 02:27:19", "Feliz Cumpleaños :)" ); //nombre del id directo del selector
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube",
     "(min-width: 1024px)",
     `<a href="https://youtu.be/A113z4zadBQ" target="_blank rel="nooperner> Ver Video Proyecto PDG </a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/A113z4zadBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/KebaaReKdHeVnD2H8" target="_blank rel="nooperner> Abrir Mapa </a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6712788032046!2d-76.54342528591053!3d3.4299601523202985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a69bc40cba09%3A0x4ac54a6d820c91bf!2sEstadio%20Pascual%20Guerrero!5e0!3m2!1ses!2sco!4v1622925615662!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>"`);
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



darkTheme(".dark-theme-btn","dark-mode"); //nombre de la clase (dark mode)

