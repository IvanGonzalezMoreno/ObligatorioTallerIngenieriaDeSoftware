function TraerHabitaciones() {
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || []

    let html = ''

    for (let i = 0; i < habitaciones.length; i++) {
        html += `
        <div>
            <p>${habitaciones[i].nombre}</p>
            <p>Cantidad disponible: ${habitaciones[i].cantidad}</p>
        </div>
        `
    }
    
    document.getElementById("lista-disponibilidad").innerHTML = html
}

if (typeof module !== "undefined") {
    module.exports = {
        TraerHabitaciones
    };
}