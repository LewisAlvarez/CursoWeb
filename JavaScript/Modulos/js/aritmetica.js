//Funciones
export function sumar(a,b){
    return a + b
}

export function restar(a,b){
    return a - b
}

//Las siguientes 2 funciones las exportaremos como un objeto que las contenga a ambas

function multiplicar(a,b){
    return a * b
}

function dividir(a,b){
    if(b!=0){
        return a / b
    }else{
        return 'No se puede dividir entre cero (0)'
    }
}

//Objeto
export const aritmetica = {
    multiplicar,
    dividir
}