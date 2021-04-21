/** 

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/

//EJERCICIO 12

const esPrimo = (numero) => {

    if(typeof numero !== 'number'){
        console.error("El valor ingresado debe ser un numero")
    }else{
        const primos = Array(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53) //Listado de los primeros primos para aplicar formula
        let termino = false
        let primo = true;
        for (let index = 0; index < primos.length && !termino; index++) {
            let cociente = Math.floor(numero / primos[index])
            let residuo = numero % primos[index]
            if (residuo===0 && cociente >= primos[index]){
                termino = true
                primo= false
            }
        }
        return primo
    }
}
//Puebas


console.log(esPrimo(7))
console.log(esPrimo(23))
console.log(esPrimo(15))
console.log(esPrimo(10))
console.log(esPrimo(3))
console.log(esPrimo(163))
console.log(esPrimo(2))
console.log(esPrimo(25))
console.log(esPrimo(997))


//EJERCICIO 13

const parOImpar = (numero) =>{
    if(typeof numero !== 'number'){
        console.error("El valor ingresado debe ser un numero")
    }else{
           let residuo = numero % 2
           return residuo === 0 ? `El numero: ${numero} es PAR` : `El numero: ${numero} es IMPAR`
    }
}

//Puebas

console.log(parOImpar(160))
console.log(parOImpar(33))
console.log(parOImpar(25))
console.log(parOImpar("Hola"))
console.log(parOImpar("7"))


//EJERCICIO 14
//De grados Celsius a Fahrenheit y viceversa, las entradas posibles para objetivo son C y F
const conversorGrados = (valor, objetivo) => {

    if (objetivo === 'C'){
        let celcius = (valor - 32) / 1.8
        return `El valor de ${valor}℉ en Celcius es: ${celcius}℃`
    }else if (objetivo === 'F'){
        let fahrenheit = (valor * 9/5) + 32 
        return `El valor de ${valor}℃ en Fahrenheit es: ${fahrenheit}℉`
    }else{
        console.warn("No se reconoce la entrada de representación de grados: Celsius (C) a Fahrenheit (F")
    }
}

//Puebas

console.log(conversorGrados(20,'Hola'))
console.log(conversorGrados(0,'C'))
console.log(conversorGrados(0,'F'))
console.log(conversorGrados(30,'C'))