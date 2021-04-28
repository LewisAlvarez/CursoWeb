//TEMPORIZADORES

console.log("inicio")

let temp = setTimeout(() => {
    console.log("Ejecutando un setTimOut, esto se ejecuta una sola vez")
}, 5000); //La linea se ejecuta despues de tantos milisegundos ponga como parametro


setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta cada 2 segundos !!")
}, 2000);//La linea se ejecuta cada tanto milisegundos ponga como parametro


let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

//Para run setTimeOut
clearTimeout(temp)
clearInterval(temporizador)