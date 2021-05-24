//----------------------------- WEB APIs ------------------------------------
/*
console.log(window)
console.log(document)

//Probando api para hablar
let texto = 'Hola, esto es una prueba de una API el cual reproduce este texto en el navegador.'

const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

hablar(texto)
*/

//---------------------------------- DOM --------------------------------
//HTML y JS
/*
console.log("************************************* Elementos del documentos ********************************")
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.charset)
console.log(document.title)
//Para wue imprima lo seleccionado por el usuario
setTimeout(()=>{
    console.log(document.getSelection().toString())
    console.log("hola")
},3000);

//document.write("<h2> Hola Mundo desde el DOM </h2>")
*/

//--- DOM: Nodos , elementos y selectores ------

//Recibe por parametro un selector valido de css
console.log(document.querySelector("#menu"))
console.log(document.getElementById("menu")) //Este método es más efectivo que el anterior porque solo filtra por id
 
//QuerySelector solo trae el primer sleector que haya encontrado con la condición que hayas puesto
console.log(document.querySelector("a"))
//Para traer todos los selectores con la condición indicada se utiliza QuerySelectorAll
console.log(document.querySelectorAll("a"))

//Para buscar clases
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))

//Por cada elemento que lleve por clase "card" imprimir el código html del mismo
document.querySelectorAll(".card").forEach((el) =>{console.log(el)})

