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