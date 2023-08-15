class Disco {
    constructor(artista, album, anio) {
        this.artista = artista;
        this.album = album;
        this.anio = anio;
    }
}

let discosArray = [];

// Carga los albums ya agregados del local storage
const storedItems = localStorage.getItem("discosArray");
if (storedItems) {
    discosArray = JSON.parse(storedItems);
}

document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const art = document.getElementById('Artist').value;
    const alb = document.getElementById('Album').value;
    const an = document.getElementById('Anio').value;


    discosArray.push(new Disco(art, alb, an));

    // actualiza el array en localStorage
    localStorage.setItem("discosArray", JSON.stringify(discosArray));

    console.log(discosArray);

    document.getElementById('Artist').value = '';
    document.getElementById('Album').value = '';
    document.getElementById('Anio').value = '';


    updateArrayDisplay(); // actualiza y muestra el array
});

const arrayDisplayElement = document.getElementById("arrayDisplay");
const ul = document.createElement("ul");
arrayDisplayElement.appendChild(ul);

function updateArrayDisplay() {
    ul.innerHTML = ''; // Limpia la lista

    // Va por el array agregando los list items necesarios
    discosArray.forEach((disco, index) => {
        const li = document.createElement("li");
        li.textContent = `Artista: ${disco.artista}, Album: ${disco.album}, Año: ${disco.anio}`;
    
        // crea el boton que agarra la info del array para luego buscalo en youtube
        const botonBuscar = document.createElement("button"); // crea el botton Buscar
        botonBuscar.textContent = "Buscar Youtube"; // Texto del boton
        botonBuscar.addEventListener("click", () => {
            let encodedQuery = encodeURIComponent(disco.artista + ' ' + disco.album + ' ' + disco.anio);
            var newPageUrl = "https://www.youtube.com/results?search_query=" + encodedQuery;
    
            // Abre en una nueva pagina del navegador
            window.open(newPageUrl, "_blank");
        });
    
        const deleteButton = document.createElement("button"); // crea el botton eliminar
        deleteButton.textContent = "Delete"; // Texto del boton
        deleteButton.addEventListener("click", () => {
            // Elimina el disco del arreglo
            discosArray.splice(index, 1);
            // Guarda el arreglo actualizado al local storage
            localStorage.setItem("discosArray", JSON.stringify(discosArray));
            // actualiza el div
            updateArrayDisplay();
        });
    
        li.appendChild(botonBuscar);  // Hijo del UL  
        li.appendChild(deleteButton); // Hijo del UL
    
        ul.appendChild(li);
    });
}

// Muestra el array
updateArrayDisplay();
