const d = document;
const w = window;


export default function responsiveMedia(id, mq, mobileContent, desktopContent,) {

    let breakpoint = w.matchMedia(mq); //Media query detectada 1024px

    //Listenner para escuchar o monitoriar la media query

    const responsive = (e) => {
        //console.log(e.matches)
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;

        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    }

    

    //breakpoint.addListener(responsive);
    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint); //Para que se ejecute inmediatamente se inicie en la pagina// AL momento que se cargue el documento (Para cargar contenido mobil y contenido escritorio)

}