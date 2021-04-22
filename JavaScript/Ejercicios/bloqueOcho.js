/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

//EJERCICIO 24

const ordenar = (arreglo) =>{
    if(typeof arreglo === 'undefined') {
        return console.warn("El arreglo está vacío")
    }else{
        const des = arreglo.sort((a,b) => b-a)
        const asc = arreglo.reverse()
        return `{ asc: ${asc}}, desc: ${des} }.`
    }
}


console.log(ordenar([2,1]))
console.log(ordenar([1,6,3,7,4,7,9,65,43,6,89,5,3,3,6]))
console.log(ordenar([2,3,1,6,3,9]))
console.log(ordenar([-3,-6,-8,0,2,-5,4]))


//EJERCICIO 25

const eliminarDuplicados = (arreglo) =>{
    if(typeof arreglo === 'undefined') {
        return console.warn("El arreglo está vacío")
    }else{
        
        for (let i = 0; i < arreglo.length; i++) {  
            for (let j = 0; j < arreglo.length; j++) {
                 if (i!==j){
                     if (arreglo[i]===arreglo[j]) arreglo.splice(j,1)
                 }
            }
        }
        return arreglo;
    }
}

console.log(eliminarDuplicados([1,2,6,2,7,7,5,2,9,1,2,4,'hola']))
console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]))
console.log(eliminarDuplicados(['HOLA','hello','hola',true, 5 , false, 3, 4, 3, true]))

//EJERCICIO 26
const promedio = (arreglo) =>{
    let contador = 0, suma = 0
    if(typeof arreglo === 'undefined') {
        return console.warn("El arreglo está vacío")
    }else{
        arreglo.forEach(function(ele){
    
            if(typeof ele === 'number') {
                suma+=ele
                contador++
            }else{
               return  console.warn("Deben ser numeros")
            }
        })
    }
    return (suma / contador)
}


console.log(promedio([1,1,1,1,1,1]))
console.log(promedio([9,8,7,6,5,4,3,2,1,0]))
console.log(promedio())
console.log(promedio([5,5,5,5]))
