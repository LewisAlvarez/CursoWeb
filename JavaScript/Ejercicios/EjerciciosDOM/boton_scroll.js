
const d = document;
const w = window;
/**
 * Método para hacer subir la página wb hacia arriba
 * @param {*} btn --> Representación del botón.
 */


export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    //Para visibilidad del botón
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        //console.log(scrollTop)
        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click", e => {
        if (e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0  //Enviar el scroll directamente al top de la interfaz
            });
        }
    });
}