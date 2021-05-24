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

/* 
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

*/

//--- DOM: Atributos y Data-Atributtes ------

//Acceder al valor de un atributo

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".link-dom").href)                     //Los resultados son distintos:
console.log(document.querySelector(".link-dom").getAttribute("href"))

//Cambiar valor de atributos
document.documentElement.lang = 'es'
console.log(document.documentElement.getAttribute("lang"))
//Otra forma de cmabiar el valor del atributo
document.documentElement.setAttribute("lang", "es-COL")  //PArametros (NombreDelAtributo, NuevoValor)
console.log(document.documentElement.getAttribute("lang"))

//Guardamos todo en una constante, se declara la variable anteponiendo $ por buena practica de lectura
const $linkDom = document.querySelector(".link-dom") //Cuando es una clase lo que se busca en el filtro se inicia por "."
console.log($linkDom)

//Para que al precionar el botón DOM, abra otra pagina con el código html
$linkDom.setAttribute("target", "_blank")
$linkDom.setAttribute("rel", "nooperner") //Buenas practicas de seguridad
console.log($linkDom)

//Cambiar el valor del atributo href y redireccionarlo a otra pagina
$linkDom.setAttribute("href", "https://github.com/LewisAlvarez/CursoWeb")
console.log($linkDom.getAttribute("href"))

//Saber si un atributo se encuentro dentro de un elemento html: retorno --> yes, o not
console.log($linkDom.hasAttribute("rel"))
console.log($linkDom.hasAttribute("link"))

//Eliminar un atributo
$linkDom.removeAttribute("rel")
console.log($linkDom.hasAttribute("rel"))

//-------------- DATA - ATRIBUTTES --------------
console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.dataset) // Retorna un mapa con todos los data-atributtes

console.log($linkDom.getAttribute("data-id"))
$linkDom.setAttribute("data.id", `${$linkDom.getAttribute("data-id")}`)
console.log($linkDom.getAttribute("data-id"))