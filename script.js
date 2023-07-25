class Disco {
    constructor(artista, album, anio, escuchado){
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.escuchado = escuchado;
    }
}

var discosArray = [];


do {
    var art = prompt("Ingrese Artista o Ingrese 'exit' para finalizar");
    if (art.toLowerCase() === 'exit') {
        break;
    }
    var alb = prompt("Ingrese Nombre de Album");
    var an = prompt("Ingrese Año del Album");
    var esc = prompt("Ingrese si ha escuchado el Album");
    discosArray.push(new Disco(art,alb,an,esc));
}  while (true);