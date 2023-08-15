class Disco {
    constructor(artista, album, anio) {
        this.artista = artista;
        this.album = album;
        this.anio = anio;
    }
}

let discosArray = [];

// Load items from localStorage if available
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

    // Save updated array to localStorage
    localStorage.setItem("discosArray", JSON.stringify(discosArray));

    console.log(discosArray);

    document.getElementById('Artist').value = '';
    document.getElementById('Album').value = '';
    document.getElementById('Anio').value = '';


    updateArrayDisplay(); // Update and display the array
});

const arrayDisplayElement = document.getElementById("arrayDisplay");
const ul = document.createElement("ul");
arrayDisplayElement.appendChild(ul);

function updateArrayDisplay() {
    ul.innerHTML = ''; // Clear the existing list

    // Loop through the array and create list items
    discosArray.forEach((disco, index) => {
        const li = document.createElement("li");
        li.textContent = `Artista: ${disco.artista}, Album: ${disco.album}, Año: ${disco.anio}`;
    
        const botonBuscar = document.createElement("button");
        botonBuscar.textContent = "Buscar Youtube";
        botonBuscar.addEventListener("click", () => {
            let encodedQuery = encodeURIComponent(disco.artista + ' ' + disco.album + ' ' + disco.anio);
            var newPageUrl = "https://www.youtube.com/results?search_query=" + encodedQuery;
    
            // Open the new page in a new tab/window
            window.open(newPageUrl, "_blank");
        });
    
        const deleteButton = document.createElement("button"); // Create delete button
        deleteButton.textContent = "Delete"; // Button text
        deleteButton.addEventListener("click", () => {
            // Remove the disco from the array
            discosArray.splice(index, 1);
            // Save updated array to localStorage
            localStorage.setItem("discosArray", JSON.stringify(discosArray));
            // Update the display
            updateArrayDisplay();
        });
    
        li.appendChild(botonBuscar);
        li.appendChild(deleteButton); // Append delete button
    
        ul.appendChild(li);
    });
}

// Initial display
updateArrayDisplay();
