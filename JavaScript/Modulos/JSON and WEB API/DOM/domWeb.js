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

const $cards = document.querySelector(".cards")
const $newCard = document.createElement("figure")

let contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption> </figcaption>
`;

$newCard.classList.add("card")

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
$newCard.insertAdjacentHTML("afterbegin", contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Esto es texto ANY")
$cards.insertAdjacentElement("afterbegin", $newCard)



