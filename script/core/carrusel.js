const imagenes = [
    "images/salaDeEstar.png",
    "images/recepcion.png",
    "images/gym1.png",
    "images/gym2.png",
    "images/piscina.png",
    "images/estacionamiento.png",
    "images/restaurante.png",
];

let indice = 0;

const imagenCarrusel = document.getElementById("imagenCarrusel");

imagenCarrusel.src = imagenes[indice];

document.getElementById("siguiente").addEventListener("click", () => {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    imagenCarrusel.src = imagenes[indice];
});

document.getElementById("anterior").addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    imagenCarrusel.src = imagenes[indice];
});