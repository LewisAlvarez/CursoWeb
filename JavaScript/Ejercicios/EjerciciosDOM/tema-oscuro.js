const d = document;
const ls = localStorage;

/**
 *Método para cambiar el tema de la pagina a oscuro o volverlo a su estado natural.
 * @param {*} btn --> Representación del botón
 * @param {*} classDark --> Elementos del dom que contenga la clase dark , para convertir los elementos html a oscuro.
 * El segundo parametro es un data-attibute que se usará en todas las etiquetas html que se quieren cambiar a modo oscuro. Esa clase se llama data-dark
 */

export default function darkTheme(btn, classDark){

    const $themeBtn = d.querySelector(btn);
    //$slectors --> de la forma en que se encuentra escrita me retorna una lista con todas las etiquetas html que tengan el atributo data-dark
    const $selectors = d.querySelectorAll("[data-dark]")  //Lista de elementos del DOM que tengan el atributo data-dark, especificado n el archivo html.
    //console.log($selectors)

    let moon = "🌙";
    let sun = "🌞";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark)); //a cada elemento se le elimina la clase que entra por parametro, es decir la classDark.
        $themeBtn.textContent = moon; //Cambio del texto del botón por la luna.
        ls.setItem("theme", "dark"); //Cambiamos el valor de la variable en el localstorage
    }
    const darkMode = () => {
        //Agregue la clase dark a todos los elementos html que tengan la clase dark.
        $selectors.forEach(el => el.classList.add(classDark)); //a cada elemento se le agrega la clase que entra por parametro, la cual en el archivo index hace referencia a la clase descrita en el archivo css.
        $themeBtn.textContent = sun; //Cambio del texto del botón por el sol.
        ls.setItem("theme", "light"); //Cambiamos el valor de la variable en el localstorage
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
           // console.log($themeBtn.textContent);
           if ($themeBtn.textContent === moon) {
               darkMode();
           }else{
               lightMode();
           }
        }
    });


    //PAra almacenamiento de tema oscuro o nos: localstorage

    d.addEventListener("DOMContentLoaded", e => {
        //Para que al momento de cargar la pagina, obtenga el contenido de la variable de localstorag
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    })
} 