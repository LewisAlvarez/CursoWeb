//Importación de variables
import saludar, {PI, usuario} from "./constantes.js"
import {sumar,restar, aritmetica as cal} from "./aritmetica.js"  //Importamos aritmetica, y le ponemos el alias "cal", este es opcional

console.log("Archivo modulos.js")
console.log(PI, usuario)
console.log(sumar(5,7))
console.log(restar(10,4))
saludar()

console.log(cal.multiplicar(8,8))
console.log(cal.dividir(100,4))