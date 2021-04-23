/**
 * 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

class Pelicula{
  //Método constructor de la clase
  constructor(id, titulo, director, anhoEstreno, paises, generos, calificacion){

    if(this.datosCompletos(id, titulo, director, anhoEstreno, paises, generos, calificacion)){
      if(this.idValido(id)){
        if(this.tituloValido(titulo)){
          if(this.directorValido(director)){
            if(this.anhoValido(anhoEstreno)){
              if(this.paisesValido(paises)){
                if(this.generosValido(generos)){
                  if(this.calificacionValida(calificacion)){
                    this.id = id
                    this.titulo = titulo
                    this.director = director
                    this.anhoEstreno = anhoEstreno
                    this.paises = paises
                    this.generos = generos
                    this.calificacion = calificacion
                    console.log("Pelicula creada")
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  //Validaciones
  //1) Todos los datos fueron dilingenciados
  datosCompletos(id, titulo, director, anhoEstreno, paises, generos, calificacion){
    return (id==='undefined' || titulo==='undefined' || director==='undefined'
    || anhoEstreno==='undefined' || paises==='undefined' || generos==='undefined'
    || calificacion==='undefined') ? false : true
  }

  //2) Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  idValido(id){
    let cad = id
    if(cad.length===9){
      let letras = cad.substring(0,2).split("")
      let numeros = cad.substr(2,cad.length).split("")
      //Validamos por codigo ascci
      let letraValida = true;
      let numeroValido = true;
      letras.forEach(function(ele){
        if(!(ele.charCodeAt() >= 97 && ele.charCodeAt() <= 122)) letraValida &&= false
      })

      numeros.forEach(function(ele){
        if(!(ele.charCodeAt() >= 49 && ele.charCodeAt() <= 57)) numeroValido &&= false
      })

      return letraValida && numeroValido
      
    }else{
      return false
    }
  }

  //3)Valida que el título no rebase los 100 caracteres.
  tituloValido(titulo){
    let title = titulo + ''
    return (title.length <= 100) ? true : false
  }

  //(4)Valida que el director no rebase los 50 caracteres.
  directorValido(director){
    let dir = director + ''
    return (dir.length <= 50) ? true : false
  }

  //5) Valida que el año de estreno sea un número entero de 4 dígitos.
  anhoValido(anhoEstreno){
    let year = anhoEstreno
    return (typeof year === 'number' && (year + '').length === 4) ? true : false
  }

  //6)Valida que el país o paises sea introducidos en forma de arreglo.
  paisesValido(paises){
    let arr = paises
    return arr instanceof Array
  }

  //7)Valida que el genero o generos sea introducidos en forma de arreglo.
  //  - Valida que los géneros introducidos esten dentro de los géneros 
  //    aceptados*.
  generosValido(generos){
    let arrGen = generos
    if(arrGen instanceof Array){
      let genValidos = Pelicula.generosAceptados()
      let valido = true
      arrGen.forEach(function(ele){
        if(genValidos.indexOf(ele) === -1) valido &&= false
      })
      return valido
    }else{
      console.warn('Error: Debe ser un arreglo')
      return false
    }
  }

    //8) Crea un método estático que devuelva los géneros aceptados*.
    static generosAceptados(){
      const gengre = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 
      'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV',
       'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
       return gengre
    }


  //9)Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  // decimal de una posición.
  calificacionValida(calificacion){
    let cal = calificacion
    return typeof cal === 'number' ? (cal >= 0 && cal <= 10 ? true : false) : false;
  }

  // Crea un método que devuelva toda la ficha técnica de la película.
  fichaTecnica(){
    let ficha = ``
    for (const propiedad in this){
      ficha += `* ${propiedad} : ${this[propiedad]}\n`
    }
    return `Información de la pelicula\n${ficha}`
  }

}


/*
PRUEBAS
Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.
*/

const peliculasPrueba = [
  {
    id: 'ab1234567',
    titulo: 'Piratas del carie',
    director: "Espen Sandberg",
    anhoEstreno: 2003,
    paises: ['USA'],
    generos: ['Drama', 'Family', 'Fantasy'],
    calificacion: 9.2

  },
  {
    id: 'ml9382746',
    titulo: 'Rapido y Furioso',
    director: "Gary Scott Thompson",
    anhoEstreno: 2001,
    paises: ['USA'],
    generos: ['Action', 'Adult', 'Adventure', 'Animation'],
    calificacion: 8.9
    
  },
  {
    id: 'jj9876543',
    titulo: 'Son como niños',
    director: "Dennis Dugan",
    anhoEstreno: 2010,
    paises: ['USA', 'COL', 'ARG', 'URU'],
    generos: ['Comedy'],
    calificacion: 7
    
  }
]

const imprimirPrueba = (peliculas) =>{
  const creadas = Array()
  peliculas.forEach(function(ele){
    let peli = new Pelicula(ele.id, ele.titulo, ele.director, ele.anhoEstreno, ele.paises, ele.generos, ele.calificacion)
    creadas.push(peli)
  })
  
  creadas.forEach(function(ele){
    console.log(ele.fichaTecnica())
  })

}


imprimirPrueba(peliculasPrueba)
//console.log(peliculasPrueba[0].id)