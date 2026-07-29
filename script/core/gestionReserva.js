let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));

if (!habitaciones) {
    habitaciones = [
        { nombre: "Estandar", cantidad: 8 },
        { nombre: "Doble", cantidad: 6 },
        { nombre: "Suite", cantidad: 3 },
        { nombre: "Familiar", cantidad: 3 }
    ];

    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
}

function TraerReservas() {
    let reservas = JSON.parse(localStorage.getItem("reservaCompleta")) || []
    console.log(reservas)
    let html = ''

    for (let i = 0; i < reservas.length; i++) {
        html += `
        <div>
            <p>Nombre: ${reservas[i].nombre}</p>
            <p>Telefono: ${reservas[i].telefono}</p>
            <p>Correo: ${reservas[i].correo}</p>
            <p>Tipo de habitación: ${reservas[i].tipoHabitacion}</p>
            <p>Cantidad de personas: ${reservas[i].cantidadPersonas}</p>
            <p>Desayuno: ${reservas[i].desayuno ? "Sí" : "No"}</p>
            <p>Cama extra: ${reservas[i].camaExtra ? "Sí" : "No"}</p>
            <p>Traslado: ${reservas[i].traslado ? "Sí" : "No"}</p>
            <p>Fecha ingreso: ${reservas[i].fechaIngreso}</p>
            <p>Fecha salida: ${reservas[i].fechaSalida}</p>
            <p>Solicitud especial: ${reservas[i].solicitudEspecial}</p>
            
            <button class="btn btn-danger" onclick="eliminarReserva(${i})">Eliminar reserva</button>
            <button class="btn btn-success" onclick="aceptarReserva(${i})">Aceptar reserva</button>
        </div>
        `
    }
    document.getElementById("reservas-pendientes").innerHTML = html
}


function eliminarReserva(i) {
    let reservas = JSON.parse(localStorage.getItem("reservaCompleta")) || []
    for (let j = 0; j < reservas.length; j++) {
        if (j === i) {
            reservas.splice(j, 1);
            localStorage.setItem("reservaCompleta", JSON.stringify(reservas));
            TraerReservas();
            break;
        }
    }
    document.getElementById("mensaje-reserva").innerHTML = "Reserva eliminada correctamente"
}


function aceptarReserva(i) {
    let reservas = JSON.parse(localStorage.getItem("reservaCompleta")) || []

    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
    let reservasAceptadas = JSON.parse(localStorage.getItem("reservaAceptada")) || []

    for (let j = 0; j < reservas.length; j++) {

        if (j === i) {

            reservas[j].estado = "Aceptada";
            reservasAceptadas.push(reservas[j]);
            localStorage.setItem("reservaAceptada", JSON.stringify(reservasAceptadas));

            for (let habitacion of habitaciones) {

                if (habitacion.nombre === reservas[i].tipoHabitacion) {

                    habitacion.cantidad--;
                    break;
                }
            }

            reservas.splice(j, 1);
            localStorage.setItem("reservaCompleta", JSON.stringify(reservas));
            TraerReservas();
            break;
        }

    }

    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
    
    document.getElementById("mensaje-reserva").innerHTML = "Reserva aceptada correctamente"
}

if (typeof module !== "undefined") {
    module.exports = {
        TraerReservas,
        eliminarReserva,
        aceptarReserva
    };
}