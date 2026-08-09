function MostrarEstadisticas() {
    //promedio de calificacion
    //promedio habitacion ocupada
    let reservas = JSON.parse(localStorage.getItem("reservaAceptada")) || [];
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || [];
    let contadorReviews = 0;
    let contadorReservas = 0;

    for(let i = 0; i < reservas.length; i++) {
        if(reservas[i].estado != "Finalizada") {
            contadorReservas++;
        }
    }

    for(let i = 0; i < reviews.length; i++) {
        contadorReviews += reviews[i].calificacion;
    }
    document.getElementById("promedioHabitacionesOcupadas").innerHTML = "Porcentaje de ocupación: " + (contadorReservas * 100 / 20).toFixed(0) + "%";
    document.getElementById("promedioReviews").innerHTML = "Promedio de calificación: " + (contadorReviews / reviews.length).toFixed(1);
}