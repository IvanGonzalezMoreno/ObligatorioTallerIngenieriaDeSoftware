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

const carrusel = document.querySelector(".carrusel");

function mostrarImagen() {
    imagenCarrusel.style.opacity = "0";

    setTimeout(function () {
        imagenCarrusel.src = imagenes[indice];
        imagenCarrusel.style.opacity = "1";
    }, 200);
}

function siguienteImagen() {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    mostrarImagen();
}

function anteriorImagen() {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    mostrarImagen();
}

let intervalo = setInterval(siguienteImagen, 4000);

function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(siguienteImagen, 4000);
}

document.getElementById("siguiente").addEventListener("click", function () {
    siguienteImagen();
    reiniciarIntervalo();
});

document.getElementById("anterior").addEventListener("click", function () {
    anteriorImagen();
    reiniciarIntervalo();
});

carrusel.addEventListener("mouseenter", function () {
    clearInterval(intervalo);
});

carrusel.addEventListener("mouseleave", function () {
    reiniciarIntervalo();
});