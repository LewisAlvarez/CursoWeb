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

/*
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


console.clear()
*/

//------------------------ DOM: CLases CSS ------------------------//

/*
const $card = document.querySelector(".card")
console.log($card)
console.log($card.className) //nombre de la clase
console.log($card.classList) //DOMTokenList

//¿Tiene una clase específica?
console.log($card.classList.contains("rotate-45")) //  True/False

//Agregamos la clase rotate-45 ael queryselector (En este caso solo es para la imagen 1)
$card.classList.add("rotate-45") //Rota 45 grados la imagen
console.log($card.classList.contains("rotate-45"))

//Quitar una clase
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))

// -------------- COMODIN ------------ //
//Toggle --> Para agregar/eliminar -> si tiene la propiedad lo elimina y si no lo agrega
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))

//Agregar más de una clase a la vez
$card.classList.add("sepia", "opacity-80")


//Rotar todas las imagenes
const $cards = document.querySelectorAll(".card")
$cards.forEach((el) => { el.classList.add("rotate-45") })
*/

//------------------ DOM: Texto y HTML -----------------

/*
const $texto = document.getElementById("que-es")
console.log($texto) 

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
    API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

//Cambiar el valor del texto
//Opcion 1

//$texto.innerText = text  // --> Esta forma no hac parte del estandar
$texto.textContent = text
$texto.innerHTML = text

console.clear()

*/
//----------------- Recorrer elementos del DOM, Traversing ------------------------------//
//Enfocado a las etiquetas como tal

/*
const $cards = document.querySelector(".cards")
console.log($cards)
console.log($cards.firstChild)
console.log($cards.children)
console.log($cards.children[3])

console.clear()
*/
//--------------------- Creando elementos y Fragmentos ------------------------------- //

/*

//Creando y agregando 1 elemento
const $figure = document.createElement("figure")
const $img = document.createElement("img")
const $figcaption = document.createElement("figcaption")
const figcaptionText = document.createTextNode("Animals")
const $cards = document.querySelector(".cards")

$img.setAttribute("src", "https://placeimg.com/200/201/animals")
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")

$figcaption.appendChild(figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

//Agregar un hijo
$cards.appendChild($figure)

//Creando y agregando varios elementos
const estaciones = ["Primavera", "Otoño", "Verano", "Invierno"]
const $ul = document.createElement("ul")

document.writeln("<h3> Las cuatro estaciones del año son: </h3>")
//Se agrega la lista al padre body
document.body.appendChild($ul)

estaciones.forEach((ele) => {
    const $li = document.createElement("li")
    $li.textContent = ele
    $ul.appendChild($li)
})

//Para facilidad, buenas practicas y optimización usamos fragmentos para actualizar e iterar este y no directamente en el DOM
//Ejemplo
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"]
const $ul2 = document.createElement("ul")
const $fragment = document.createDocumentFragment()

meses.forEach(ele =>{
    const $li = document.createElement("li")
    $li.textContent = ele
    $fragment.appendChild($li) //--> Agregamos al fragmento
})

//Luego de tener todo agragado al fragmento, ahora sí agregamos a la lista ul
$ul2.appendChild($fragment)
document.writeln("<h3> Los meses del año son: </h3>")
//Agregamos al body
document.body.appendChild($ul2)

console.clear()

//--------------------------- Templates HTML ----------------------------- //

const $claseCard = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $elFragment = document.createDocumentFragment();
const cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
];

//Por cada cardContent , seleccionamos dentro del template el atributo img y lo cambiamos por el valor que se encuentre en cardcontent
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title
    //Clonar el nodo del template pq solo esta disponible una vez, para el primero.
    let $clone = document.importNode($template,true)  //--> clona todo
    $elFragment.appendChild($clone)
})

//Se agrega el fragmento al dom
$cards.appendChild($elFragment)

*/

// --------------------------  MODIFICANDO ELEMENTOS ----------------------//
/*
//REEMPLAZAR UN NODO EXISTENTE
const $cards = document.querySelector(".cards")
const $newCard = document.createElement("figure")
const $cloneCards = $cards.cloneNode(true)

//Agrego codigo html
$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

//console.log($cards)
//Le asignamos a newCard la clas "card"
$newCard.classList.add("card")
//Reemplazamos un nodo existente por "Any" (nuevoNodo, nodoAReemplazar)
$cards.replaceChild($newCard, $cards.children[2])

//Reemplazar dado un nodo de referencia
//Insertar un nodo antes de un nodo de referencia (nuevoNodo, nodoReferencia)
$cards.insertBefore($newCard, $cards.firstElementChild)

//Eliminar nodos
//Eliminar el ultimo nodo
$cards.removeChild($cards.lastElementChild)

//Agregamos la copia (Agrega al final)
document.body.appendChild($cloneCards)

*/

//Modificando Elementos 2
//Nuevos metodos
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/*
const $cards = document.querySelector(".cards")
const $newCard = document.createElement("figure")

let contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption> </figcaption>
`;

$newCard.classList.add("card")

*/

//Insertando con los nuevos metodos

/*
$cards.insertAdjacentElement("beforebegin", $newCard)
$cards.insertAdjacentElement("afterbegin", $newCard)
$cards.insertAdjacentElement("afterend", $newCard)
$cards.insertAdjacentElement("beforeend", $newCard)
*/

//Agregar contenido HTML (sin usar innerHtml)
//Usando .insertAdjacentHTML(position,html)

//$cards.insertAdjacentHTML("beforebegin", contentCard)
//USANDO LOS 3 METODOS
/*
$newCard.insertAdjacentHTML("afterbegin", contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Esto es texto ANY")
$cards.insertAdjacentElement("afterbegin", $newCard)

*/

// --------------------------- MANEJADORES DE EVENTOS ------------------------------ //

/*
function holaMundo(){
    alert("Hola accediste a un evento mediante un boton");
    console.log(event);
}

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}, que tal?`)
}

//Como manejador semantico
//Se cuarda en una varibale la representación del objeto button
const $eventoSemantico = document.getElementById("evento-semantico")
//En ese objeto se accede al evento onclick (en este caso) y lo igualamos a la función que queremos que ejecute al presionar el botón
//Este manejador semantico, solo puede manejar 1 evento
$eventoSemantico.onclick = holaMundo  //La función a la que iguales debe ir sin parentesis
$eventoSemantico.onclick = () =>{ alert("Hola mundo, manejador de eventos semantico")}

//Evento con MANEJADOR MULTIPLE
//Permite ejecutar varias funciones que se hayan definido en diferentes manejadores al mismo evento
const $eventoMultiple = document.getElementById("evento-multiple")
$eventoMultiple.addEventListener("click", holaMundo)  //(NombreDelEvento, funcionAEjecutar ) --> Puede tener mas parametros
$eventoMultiple.addEventListener("click", (e) => {
    alert("Esto es un manejador de eventos múltiples")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
})

//Eventos con Parámetos y Remover Eventos
$eventoMultiple.addEventListener("click", () => {saludar("Car")})  //--> la función manejadora pasa a ser la arrowFunction y dentro de esta llamamos a la función deseada con parametros

//Removiendo eventos con manejadores multiples
const $eventoRemovedor = document.getElementById("evento-remover")

const removerEvento = (e) => {
    alert(`Removiendo el evento de tipo: ${e.type}`)
    console.log(e)
    $eventoRemovedor.removeEventListener("dblclick", removerEvento)
    $eventoRemovedor.disabled = true //Desabilitamos el boton
}

$eventoRemovedor.addEventListener("dblclick", removerEvento)


//-------------------------------------- Flujo de Eventos -----------------------------------///

//Propagación del evento, (Burbuja y Captura)

const $divsEventos = document.querySelectorAll(".eventos-flujos div")
//console.log($divsEventos)

function flujoEventos(e) {
    console.log(`Hola te saluda: ${this.className}, el click lo originó ${e.target.className}`)
    e.stopPropagation()
}

//Asignar un evento a cada div
$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos, false) //Fase de burbuja, del mas interno al mas externo
    //div.addEventListener("click", flujoEventos, true) //Fase de captura, del elemento más externo al más interno. (Poco uso)
})


//------------ Boton para girar imagen ------------- //
const $girarImg = document.getElementById("girar")
const $images = document.querySelector(".cards")

function girarAleatoria(){
    let rand = Math.round(Math.random() * 4)
    $images.children[rand].classList.add("rotate-135")
    console.log(`Se ha rotado la imagen: ${rand + 1}`)
}

//Voltear una imagen aleatoria
$girarImg.addEventListener("click", girarAleatoria)

//------------ Boton para girar imagen ------------- //

//**************************************************************************** */

//--------------------------------- DOM: stopPropagation & preventDefault ------------------------------- //

/*
const $linkEventos = document.querySelector(".eventos-flujos a") //clase y eqiqueta que deseo obtener
console.log($linkEventos)

$linkEventos.addEventListener("click",(e) => {
    alert("Hola te saludo porque presionaste en el enlace")
    e.stopPropagation()
})

*/

//--------------------------------------- DOM: Delegación de Eventos ---------------------------//
// 1 listener general aplicado al nodo raiz, agregandole todos los posibles eventos
// ###### Se le asigna un listener al document y por medio de condicionales revisamos a cual elemento se le generó el evento y a ese especifico se le asigna la función que deseemos que realice. ######
/*
function flujoEventos(e) {
    console.log(`Hola te saluda: el click lo originó ${e.target.className}`)
    //e.stopPropagation()
}

//Asignamos el eventListener al document
document.addEventListener("click", (e) => {
    console.log("Click en" , e.target)

    //Por medio de condicionales  //e.target --> me dice quien generó el click o evento
    if (e.target.matches(".eventos-flujos a")){ //Busca coincidencias que haga match con "eventos-flujos a" --> el cual hace referencia al link
        alert("Hola te saludo porque presionaste en el enlace")
        e.preventDefault() //No abre la pagina
    }

    if (e.target.matches(".eventos-flujos div")){
        flujoEventos(e)
    }
})

*/

//---------------------------------- BOM Propiedades y Eventos --------------------------------- //
// ----------------------------------- BROWSER OBJECT MODEL ------------------------------- //

window.addEventListener("resize", (e) => {  //--> Solo se ejecuta cuando se cmabia de tamaño la pantallo
    console.clear()
    console.log("************* Evento resize ***********")
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log(window.outerHeight)
    console.log(window.outerWidth)
    console.log(e)
})

window.addEventListener("scroll", (e) => {
    console.clear()
    console.log("************* Evento scroll ***********")
    console.log(window.scrollX)
    console.log(window.scrollY)
    console.log(e)
})

window.addEventListener("load", (e) => {
    //console.clear()
    console.log("************* Evento load ***********")
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
})

window.addEventListener("DOMContentLoaded", (e) => {
    //console.clear()
    console.log("************* Evento DOMContentLoaded ***********")
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
})