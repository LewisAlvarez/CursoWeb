//--------------------- JSON ------------------
console.log(JSON)

//PAra convertir de JS a objeto

//PARSE: Analiza una cadena que tenga un formado válido de JSON y lo convierte en un objeto JS

console.log("{}")
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))

//PAra convertir de Objeto a cadena de texto
//stringify: A partir d eun objeto valido en JS lo convierte en cadena de texto

console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3,4]))
console.log(JSON.stringify(true))
console.log(JSON.stringify({x: 2, y: 3})) //Convierte a formato json

const objectJson = {
    "Cadena": "Jhon",
    "numero": 30,
    "boolean": false,
    "arreglo": ["USA", "Colombia", "Mexico"],
    "nulo": null,
    "Objeto": {
        "email": "lewis040@hotmail.es",
        "twitter": "@blackcalle"
    }
}

console.log(objectJson)

console.log(JSON.stringify(objectJson)) //Convierte a formato json