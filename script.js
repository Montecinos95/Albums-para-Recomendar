
// Declare la info inicial de la clase disco que requiere un artista album anio y escuchado
class Disco {
    constructor(artista, album, anio, escuchado){
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.escuchado = escuchado;
    }
}


var discosArray = [];


// Cargar el array con Bublce Do While (Funcionando)
/*do {
    var art = prompt("Ingrese Artista o Ingrese 'exit' para finalizar");
    if (art.toLowerCase() === 'exit') {
        break;
    }
    var alb = prompt("Ingrese Nombre de Album");
    var an = prompt("Ingrese Año del Album");
    var esc = prompt("Ingrese si ha escuchado el Album");
    discosArray.push(new Disco(art,alb,an,esc));
}  while (true);
*/

// Recibir la informacion del Form en html
document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
  
    // Obtengo los Valores con get element by id y el valor 
    const art = document.getElementById('Artist').value;
    const alb = document.getElementById('Album').value;
    const an = document.getElementById('Anio').value;
    const esc = document.getElementById('Escuchado').value;

    // Agrego la info al array
    discosArray.push(new Disco(art,alb,an,esc));
  
    // Muestro el array
    console.log(discosArray);
  
    // Limpio el Form en html
    document.getElementById('Artist').value = '';
    document.getElementById('Album').value = '';
    document.getElementById('Anio').value = '';
    document.getElementById('Escuchado').value = '';
  });
  
