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

/*

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

*/

//----------------------- DOM: Estilos y Variables CSS --------------------//

const $linkDom = document.querySelector(".link-dom")
console.log($linkDom.style) //Retorna un mapa de CSSStyles y todos los atributos posibles
console.log($linkDom.getAttribute("style")) //Retorna los atributos internos de style
console.log($linkDom.style.color)
console.log($linkDom.style.backgroundColor)

//Cambiar valores/atributos de un objeto: cambios de atributos css
$linkDom.style.setProperty("text-decoration", "none")
$linkDom.style.setProperty("display", "block")
$linkDom.style.width = "60%"
$linkDom.style.textAlign = "center"
$linkDom.style.marginLeft = "auto"
$linkDom.style.marginRight = "auto"
$linkDom.style.padding = "1rem"
$linkDom.style.borderRadius = ".5rem"

//Variables CSS -- Custom Properties CSS
//Accediendo a las variables y propiedades 
const $html = document.documentElement
const $body = document.body

//Una variable en la cual se guardará el valor de un atributo
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor)
console.log(varYellowColor)

//Asignar el valor de las variables creando stilo en el body, en este caso al body
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

//Modificar la propiedad de una variable css
$html.style.setProperty("--dark-color", "green")
//Actualizamos el valor de la variable varDarkColor
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
$body.style.backgroundColor = varDarkColor
