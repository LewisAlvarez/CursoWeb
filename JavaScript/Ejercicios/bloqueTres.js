/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//EJERCICIO 9

const aleatorio = () =>{
    const x = 501
    const y = 600
    //Ecuación (x-y+1)+y
    let num = Math.random() * (x-y+1)+y
    return Math.round(num)
}

//Puebas

console.log(aleatorio())
console.log(aleatorio())
console.log(aleatorio())

//EJERCICIO 10

const capicua = (numero = "") =>{
    let num = numero + "";
    if(!num){
        console.error("No ha escrito ningún valor")
    }else{
        let reverso = num.split("").reverse().join("")
        return (num===reverso) ? `Son iguales ${num} = ${reverso}: True` : `Son diferentes ${num} != ${reverso}: False`
    }
}

//Puebas

console.log(capicua())
console.log(capicua(23456))
console.log(capicua(12321))


//EJERCICIO 11

const factorial = (numero) =>{
    if(numero>=0){
        try {
            let num = parseInt(numero)
            let fac = 1
            for (let index = num; index > 0; index--) fac*=index
            return fac
        } catch (error) {
            console.error("No escribiste un numero")
            console.error(error)
        }
    }else{
        console.warn("El numero debe ser un entero positivo")
    }
}

const factorial2 = (num) =>{
    if(num === 0){
        return 1
    }else if(num === 1){
        return 1
    }else{
        return num * factorial2(num-1)
    }
}

//Puebas


console.log(factorial(5))
console.log(factorial(-5))
console.log(factorial(1))
console.log(factorial(0))
console.log(factorial("hh"))

console.log(factorial2(0))
console.log(factorial2(1))
console.log(factorial2(5))
console.log(factorial2(3))
console.log(factorial2(10))

