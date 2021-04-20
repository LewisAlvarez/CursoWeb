/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//EJERCICIO 1
function numeroCaracteres(cadena){
    let dato = cadena + ""; //Para asegurarme de que sea una cadena o convertir a cadena
    return dato.length
}

//Prueba
let cad1 = "Hola 123"
let cad2 = 1234567890
const Objeto = {
    nombre: 'John',
    apellido: 'Snow'
}
console.log(numeroCaracteres(cad1))
console.log(numeroCaracteres(cad2))
console.log(numeroCaracteres(Objeto))
console.log(Objeto)
console.clear()

//EJERCICIO 2
function recortarCaracteres(cadena, n){
    let dato = cadena + ""
    return dato.substr(0,n)
}

//Prueba
let sub1 = 'Hola que tal?'
let sub2 = '6788000 koko 8901'
let num = 4



console.log(recortarCaracteres(sub1,num))
console.log(recortarCaracteres(sub2,7))


//EJERCICIO 3
function separador(cadena, sep){
    let dato = cadena + ""
    return dato.split(sep)
}

//Prueba
let texto1 = 'Esto*Es*Un*texto*separado*por*asteriscos'
let texto2 = 'JavaScript, es un, lenguaje de programacion, para el desarrollo, de, paginas web'

console.log(separador(texto1,'*'))
console.log(separador(texto2,','))


//EJERCICIO 4
function repetirCadena(cadena, n){
    let cadenaRepetida = ''
    for (let i = 1; i <= n; i++){
        cadenaRepetida += cadena
        cadenaRepetida += ' '
    }
    return cadenaRepetida
}

//Pruebas
let cadena1 = 'Hola mundo'
let cadena2 = 'JavaScript'
let numero = 123

console.log(repetirCadena(cadena1,5))
console.log(repetirCadena(cadena2,8))
console.log(repetirCadena(numero,3))
