function ExisteReservaEnCurso() {
    let reservas = JSON.parse(localStorage.getItem("reservaAceptada")) || []
    let correoUsuario = document.getElementById("emailCheckOut").value
    let html = ''

    let reservaEnCurso = false;

    for (let i = 0; i < reservas.length; i++) {

        if (reservas[i].correo === correoUsuario) {

            html += `
        <div>
            <p>Nombre: ${reservas[i].nombre}</p>
            <p>Correo: ${reservas[i].correo}</p>
            <p>Tipo de habitación: ${reservas[i].tipoHabitacion}</p>
            <p>Cantidad de personas: ${reservas[i].cantidadPersonas}</p>
            <p>Desayuno: ${reservas[i].desayuno ? "Sí" : "No"}</p>
            <p>Cama extra: ${reservas[i].camaExtra ? "Sí" : "No"}</p>
            <p>Fecha ingreso: ${reservas[i].fechaIngreso}</p>
            <p>Fecha salida: ${reservas[i].fechaSalida}</p>
            <p>Estado: ${reservas[i].estado}</p>
            `;

            if (reservas[i].estado === "En curso") {

                reservaEnCurso = true;

                html += `
                <button class="btn btn-danger" onclick="checkOut(${i})">Realizar Check-Out</button>
                `;
            }

            html += `
        </div>
        `;
        }
    }

    if (reservaEnCurso) {
        document.getElementById("resultadoCheckOut").innerHTML = html;
    } else {
        document.getElementById("resultadoCheckOut").innerHTML = "Este huésped no tiene una reserva en curso";
    }

}

function checkOut(i) {
    let reservas = JSON.parse(localStorage.getItem("reservaAceptada")) || [];
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));

    if (reservas[i].estado === "En curso") {

        reservas[i].estado = "Finalizada";

        for (let habitacion of habitaciones) {

            if (habitacion.nombre === reservas[i].tipoHabitacion) {

                habitacion.cantidad++;
                break;
            }

        }

        localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
        localStorage.setItem("reservaAceptada", JSON.stringify(reservas))

        alert("Check-Out realizado con éxito")
    }

    ExisteReservaEnCurso();
}

if (typeof module !== "undefined") {
    module.exports = {
        ExisteReservaEnCurso,
        checkOut
    };
}