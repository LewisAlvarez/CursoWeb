//
/**
 * Exportar una función por defecto. Parametros: 
 * @param {*} panelBtn Botón del cual se va a ejecutar la acción: Btn hamburguesa
 * @param {*} panel // Panel al cual se le va a ejecutar la acción
 * @param {*} menuLink Para hacer desaparecer el panel con las secciones al presional en uno de los enlaces
 */
export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click", e =>{
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){ //  `${panelBtn} *` --> cualquier parte interna del botón. Todos los elementos hijos de ese botón
            d.querySelector(panel).classList.toggle("is-active"); //Intercambiar clases con toggle
            d.querySelector(panelBtn).classList.toggle("is-active"); //Para animación del botón, se cambia la clase a "is-active" --> dada la fuente de donde se toma el estilo de css.
        }

        //Ocultar el panel cuando se presiona una sección
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active"); //Removemos en ambas para desaparecer la lista de secciones y volvemos a poner el botón en su estado normal
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}