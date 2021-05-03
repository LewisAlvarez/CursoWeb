//TEMPORIZADORES

/*
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
*/

//ASINCRONIA Y EVENT LOOP

/*
    CODIGO SINCRONO BLOQUEANTE
*/

/*
(() => {

    console.log("Código síncrono")
    console.log("INICIO")

    function dos(){
        console.log("Dos")
    }

    function uno(){
        console.log("Uno")
        dos()
        console.log("Tres")
    }

    uno()
    console.log("FIN")

})();

console.log("***********************");
/*
    CODIGO ASINCRONO NO BLOQUEANTE
*/

/*
(() => {

    console.log("Código Asíncrono")
    console.log("INICIO")

    function dos(){
        setTimeout(() => {
            console.log("Dos") 
        }, 1000);
    }

    function uno(){
        setTimeout(() => {
            console.log("Uno")
        }, 0);
        dos()
        console.log("Tres")
    }

    uno()
    console.log("FIN")
    
})();

*/

//----------------------------------- SYMBOLS --------------------------------------------
//NUEVOS TIPOS DE DE DATOS

//symbol --> Crea una referencia única del tipo de dato
/*
let id = Symbol('id1') //Etiqueta
let id2 = Symbol('id2')

console.log(id === id2)
console.log(id, id2)

const NOMBRE = Symbol()
const SALUDAR = Symbol()

const persona = {
    [NOMBRE] : 'Car'
};

console.log(persona)

persona.NOMBRE = 'Lewis Car'
console.log(persona)

//Para funciones
persona[SALUDAR] = function(){
    console.log(`Hola soy ${persona[NOMBRE]}`)
}

console.log(persona)
persona[SALUDAR]()

//Listar los symbols a manera de arreglo

console.log(Object.getOwnPropertySymbols(persona))
*/
//-------------------------------------------------------------- SETS -----------------------------------------------
//Arreglo de datos únicos
/*
const set = new Set(['Hola', 3, 3, 3, 4, 6, 4, true, false, 'hola'])
const set2 = new Set([])
console.log(set)

set2.add(1)
set2.add(1)
set2.add(1)
set2.add(4)
set2.add(false)
set2.add('Bye')
set2.add('Hello')

console.log(set2)

console.log(set.size)
console.log(set2.size)

//Eliminar objetos
set2.delete('Hello')
console.log(set2)

//Validar si un dato se encuentra en la estructura de datos SET
console.log(set2.has(4))
*/

//------------------------ TIPO de Dato MAP ----------------------------------
//Colección de datos
/*
let mapa = new Map()
//Llave-VAlor
mapa.set("Nombre", "Car")
mapa.set("Apellido", "Cossio")
mapa.set("Edad", 25)
mapa.set("Tel", 4358939828)
mapa.set("ID", 'C456')

console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("Correo"))
console.log(mapa.has("Edad"))
console.log(mapa.get('Tel'))
*/
//------------------------------ WEAKSET Y WEAKMAP ---------------------------------
const ws = new WeakSet()

//Debo agregar elemento por elemento, solo se pueden agregar objetos

let uno = {'valor1':1}
let dos = {'valor2':2}
let tres = {'valor3':3}

ws.add(uno)
ws.add(dos)
ws.add(tres)

console.log(ws)

//------------ weakmap
const wm = new WeakMap()

let a = {'valor1':1}
let b = {'valor2':2}
let c = {'valor3':3}

wm.set(a, 1)
wm.set(b, 2)
wm.set(c, 3)

console.log(wm)
