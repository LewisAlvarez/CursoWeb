/**
 * Clase JS para Sección 1
 */
const d = document;
let clockTiempo;

/**
 * Función para la funcionalidad de los botones (Iniciar, Detener)
 * @param {*} reloj --> Div donde se maquetará la horá en tiemp real
 * @param {*} btnIniciar  --> Botón que al precionar mostrará la hora actual
 * @param {*} btnDetener  --> Botón que al presionar detendrá la hora y ocultará el Div (Reloj)
 */

export function relojDigital(reloj, btnIniciar, btnDetener){
    d.addEventListener("click", e => {
        if(e.target.matches(btnIniciar)){
           clockTiempo = setInterval(() => {  //Intervalo para actualización
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3> ${clockHour} </h3>`;  //Se agrega html al div que contiene la información de la hora
            }, 1000) //Cada segungo se actualiza

            e.target.disabled = true;  //Se deshabilida el boton inicial
            d.querySelector(btnDetener).disabled = false;
        }

        if(e.target.matches(btnDetener)){
            clearInterval(clockTiempo); //Limpiamos el intervalo
            d.querySelector(reloj).innerHTML = null;
            e.target.disabled = true; //Deshabilitamos el btón detener
            d.querySelector(btnIniciar).disabled = false; //Volvemos a poner el botón iniciar habilitado
        }
    })
}

/**
 * 
 * @param {*} sonido 
 * @param {*} btnIniciar 
 * @param {*} btnDetener 
 */

export function alarma(sonido, btnIniciar, btnDetener){
    let alarmaTiempo;

    const $alarm = d.createElement("audio"); //se crea un lemento html de tipo audio
    $alarm.src = sonido; // se le asigna como ruta fuenta la ruta que entra por parámetro

    let btn;

    d.addEventListener("click", e => {
        if (e.target.matches(btnIniciar)){
            alarmaTiempo = setTimeout(() => {
                $alarm.play();
            }, 2000) //2 segundos
            e.target.disabled = true;
        }

        if (e.target.matches(btnDetener)){
            clearTimeout(alarmaTiempo);
            $alarm.pause();
            $alarm.currentTime = 0;  //Inicie desde el principio
            d.querySelector(btnIniciar).disabled = false;
        }
    })
}