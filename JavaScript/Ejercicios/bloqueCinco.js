/*

15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

*/

//EJERCICIO 15
const binarioADecimal = (numBinario) =>{
    if(typeof numBinario !== 'number'){
        console.error("Debe escribir un numero")
    }else{
        let num = numBinario + ''
        let sep = num.split("")
        let suma = 0
        let numDiferente = false
        for (let index = sep.length-1, exp = 0; index >= 0 && !numDiferente; index--, exp++) {
            if (sep[index]==0 || sep[index]==1){
                if (sep[index]!=0) suma += Math.pow(2,exp)
            }else{
                numDiferente = true
                console.warn(`El numero introducido contiene un numero invalido ${sep[index]}, solo se admite numeros 0 e 1`)
            }
        }
        return suma
    }
}


console.log(binarioADecimal(11101101))
console.log(binarioADecimal(111))
console.log(binarioADecimal(1010))
console.log(binarioADecimal())
console.log(binarioADecimal(10103))
console.log(binarioADecimal(160107))


//EJERCICIO 16

const descuento = (precio, desc) => {
    if (typeof precio !== 'number' && typeof desc !== 'number'){
        console.error('Datos ingresados incorrectos, deben ser números')
    }else{
        return precio - (precio * (desc / 100))
    }
}


console.log(descuento(1000,20))
console.log(descuento(10000,'20'))
console.log(descuento(50000,35))
console.log(descuento())


//EJERCICIO 17
const anhosPasados = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("NO ingresaste la fecha")
    if (!(fecha instanceof Date)) return console.warn("La fecha ingresada no se encuentra en un formato válido")

    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    let anhosEnMS = 1000 * 60 * 60 * 24 * 365
    let anhosHumanos = Math.floor(hoyMenosFecha / anhosEnMS)

    //return (Math.sign(anhosHumanos) === -1) ? console.info(`Faltan ${Math.abs(anhosHumanos)} para el ${fecha.getFullYear()}`) : Math.sign(anhosHumanos === 1 ? console.info(`Han pasado ${Math.abs(anhosHumanos)} para el ${fecha.getFullYear()}`) : console.info(`No hay diferencias, estamos en el año actual`)
}


/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
*/

//EJERCICIO 18

const vocalesYConsonantes = (cadena) => {
    let vocales = 0, consonantes = 0
    cadena = cadena.toLowerCase()
    let letras = cadena.split("")

    //Letras codigo ascci 97 - 122

    for (let index = 0; index < cadena.length; index++) {
        let letterCode = cadena.charAt(index).charCodeAt()
        if (letterCode >= 97 && letterCode <= 122){
            //Valido para las vocales
            (letterCode===97 || letterCode===101 || letterCode===105 || letterCode===111 || letterCode===117) ? vocales++ : consonantes++
        }
    }
    return `En el texto hay Vocales: ${vocales} y Consonantes: ${consonantes}.`
}


console.log(vocalesYConsonantes('Hola Mundo'))
console.log(vocalesYConsonantes('Hola ESTO es un MENsaJe para probar cuantas vocales Y CONSOTANTES LaS Personas Escriben &/() por en un Tex678to.'))

//EJERCICIO 21
const elevarCuadrado = (arr) =>{
    const alCuadrado = Array()
    arr.forEach( function(ele){
        if (typeof ele === 'number'){
            alCuadrado.push(Math.pow(ele,2) )
        }else{
            return console.warn("No es un numero")
        }
    })
    return alCuadrado
}


console.log(elevarCuadrado([1,2,3,4,5]))
console.log(elevarCuadrado([10,3,8,-7,20]))
console.log(elevarCuadrado([10,3,'4',-7,20]))

//EJERCICIO 22
const altoYBajo = (arr) =>{
    let alto = -1000000000, bajo = 1000000000
    arr.forEach( function(ele){
        if (typeof ele === 'number'){
           if (ele < bajo) bajo = ele
           if (ele > alto) alto = ele
        }else{
            return console.warn("No es un numero")
        }
    })
    return `El número más bajo es: ${bajo} y el mas alto es: ${alto}.`
}


console.log(altoYBajo([4,2,3,1,-600,-5,-601]))
console.log(altoYBajo([1,2]))
console.log(altoYBajo([1,2,-3,6,14,45.1,2,-9.87]))

//EJERCICIO 23
const paresEImpares = (arr) =>{
    const pares = Array()
    const impares = Array()
    arr.forEach( function(ele,i){
        if (typeof ele === 'number'){
            ele%2 === 0 ? pares.push(ele) : impares.push(ele)
        }else{
            return console.warn("No es un numero")
        }
    })
    return `{pares: ${pares}, impares: ${impares}}`
}

console.log(paresEImpares([0,1,2,3,4,5,6,7,8,9]))
console.log(paresEImpares([21,34,23,567,43,6,8,6,4,32,36788,765,32,2,5,75,0]))
