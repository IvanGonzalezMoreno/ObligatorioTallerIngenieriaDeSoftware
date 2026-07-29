function ExisteReservaAceptada() {
    let reservas = JSON.parse(localStorage.getItem("reservaAceptada")) || []
    let correoUsuario = document.getElementById("emailCheckIn").value
    let html = ''

    let reservaAceptada = false;

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

            if (reservas[i].estado === "Aceptada") {

                reservaAceptada = true;

                html += `
                <button class="btn btn-danger" onclick="checkIn(${i})">Realizar Check-In</button>
                `;
            }

            html += `
        </div>
        `;
        }
    }

    if(reservaAceptada) {
        document.getElementById("resultadoCheckIn").innerHTML = html;
    } else {
        document.getElementById("resultadoCheckIn").innerHTML = "Este huésped no tiene una reserva aceptada";
    }
   
}

function checkIn(i) {
    let reservas = JSON.parse(localStorage.getItem("reservaAceptada")) || [];

    if (reservas[i].estado === "Aceptada") {
        reservas[i].estado = "En curso"
        localStorage.setItem("reservaAceptada", JSON.stringify(reservas))
        alert("Check-In realizado con éxito")

    }

    ExisteReservaAceptada();
}

if (typeof module !== "undefined") {
    module.exports = {
        ExisteReservaAceptada,
        checkIn
    };
}