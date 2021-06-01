/**
 * Clase JS para Sección 2.
 */

const d = document;
//Para movimeento de la ball
let x = 0, y = 0; 

/**
 * Método para mover la pelota sobre el escenario.
 * @param {*} e --> Evento generado: Para determinar si es izq, der, arriba, abajo.
 * @param {*} ball --> Representación de la pelota que se moverá.
 * @param {*} stage  --> Representación del escenario donde se moverá.
 */

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);

    //Para definir los limites del margen negro
    let limitBall = $ball.getBoundingClientRect();
    let limitStage = $stage.getBoundingClientRect();

    //console.log(limitBall, limitStage)

    //Dependiendo el keyCode así se debe realizar el movimiento
    
    let dir = e.keyCode;
    
    if (dir === 37) {
        //console.log(e.key);
        if (limitBall.left > limitStage.left){
            e.preventDefault();
            x--;
        } 
    }else if (dir === 38) {
        //console.log(e.key)
        if (limitBall.top > limitStage.top){
            e.preventDefault();
            y--;
        }
    }else if (dir === 39){
        //console.log(e.key)
        if (limitBall.right < limitStage.right){
            e.preventDefault();
            x++;
        }
    }else if (dir === 40) {
        //console.log(e.key)
        if (limitBall.bottom < limitStage.bottom){
            e.preventDefault();
            y++;
        }
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;  //Función de CSS transform

}

/**
 * Método shourcuts para realizar comandos con el teclado ( Alt + c, Alt + p, Alt + a)
 * @param {*} e --> Evento del teclado para determinar la tecla undida.
 */

export function shortcuts(e) {
    /*
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    */

    //Cuando el usuario presione las tecla alt + a, abre un alert
    if (e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado (Shortcuts)");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Esta es una confirmación lanzada desde el teclado")
    }

    if (e.key === "p" && e.altKey) {
        prompt("Esto es un aviso lanzado desde el teclado")
    }
}