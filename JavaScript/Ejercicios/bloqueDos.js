/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//EJERCICIO 5

const invertirCadena = (texto) => {

    if (!texto){
        console.error("No ingresaste ningun valor en el texto")
    }else if (texto.length == 1){
        console.warn(`El texto invertido es el mismo: ${texto} , porque solo tiene una letra`)
    }else{
        let tam = texto.length
        let invertida = ''
        for (let index = tam; index >= 0; index--) {
            invertida += texto.charAt(index)
        }
       return invertida
    }
}


//Pruebas
let cad1 = ''
let cad2 = 'a'
let cad3 = 'Hola Mundo'
let cad4 = 'Palabra que al invertirse se lee igual: RECONOCER'

console.log(invertirCadena(cad3))
console.log(invertirCadena(cad4))

//EJERCICIO 6

const palabraRepetida = (texto, palabra) =>{
    //Se realiza por medio de expresiones regulares
    if(!texto || !palabra){
        console.error("No ingresaste ningun valor en el texto o en la palabra a buscar")
    }else{
        const expReg = new RegExp(palabra, "ig")
        let elTexto = palabra + ""
        let result = elTexto.match(expReg).length
        let salida = `La palabra ${palabra} se encuentra ${result}` 
        return salida
    }
}

//Pruebas

console.log(palabraRepetida("hola a todas las personas, hola a la vida hola, hola si hello -> hola","Hola"))
console.log(palabraRepetida("si esta vez si funciona el codigo si puedo continuar con el otro ejercicio","si"))
console.log(palabraRepetida("palabra palabra",""))

//EJERCICIO 7

const esPalindromo = (texto) =>{
    if(!texto){
        console.error("No ingresaste ningun valor en el texto o en la palabra")
    }else if(texto.length === 1){
        console.warn("Tiene una letra, por ende es palindromo: true")
    }else{
        //Usamos la funcion que realizamos al principio: invertirCadena(texto)
        let cadenaInvertida = invertirCadena(texto)

        return cadenaInvertida === texto ? true : false; 
    }
}

//Pruebas

console.log(esPalindromo('salas'))
console.log(esPalindromo('reconocer'))
console.log(esPalindromo('palindromo no es un palindromo'))

//EJERCICIO 8

const eliminarPatron = (texto, patron) =>{
    if(!texto || !patron){
        console.error("No ingresaste ningun valor en el texto o en el patrón a buscar")
    }else{
        const expReg = new RegExp(patron, "ig")
        let elTexto = texto + ""
        let result = elTexto.replaceAll(expReg, "")
        return result
    }
}

//Pruebas

console.log(eliminarPatron("Esto123 es123 123un 123ejemplo","123"))
console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz","xyz"))
console.log(eliminarPatron("EstoLL es unaLL LLExpresion LLnueva ","LL"))

