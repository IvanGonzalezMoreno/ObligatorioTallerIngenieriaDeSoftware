function MostrarEstrellas(calificacion) {
    let estrellas = "";

    for (let i = 0; i < calificacion; i++) {
        estrellas += `★`;
    }

    return estrellas;
}