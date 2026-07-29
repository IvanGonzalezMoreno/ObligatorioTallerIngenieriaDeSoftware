function CrearReserva() {

    let reservaCompleta = {
        fechaSolicitud: Date.now(),
        estado: "pendiente",
        nombre: document.getElementById("nombreCompleto").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("email").value,
        tipoHabitacion: document.getElementById("tipoHabitacion").value,
        cantidadPersonas: document.getElementById("cantidadPersonas").value,
        desayuno: document.getElementById("desayuno").checked,
        camaExtra: document.getElementById("camaExtra").checked,
        traslado: document.getElementById("traslado").checked,
        fechaIngreso: document.getElementById("fechaIngreso").value,
        fechaSalida: document.getElementById("fechaSalida").value,
        solicitudEspecial: document.getElementById("solicitudEspecial").value
    };

    if (reservaCompleta.nombre.length < 7) {
        alert('El nombre debe contener al menos 6 caracteres')
        return;
    }

    const formatoTelefono = /^09\d{7}$/;

    if (reservaCompleta.telefono && !formatoTelefono.test(reservaCompleta.telefono)) {
        alert("Ingrese un teléfono uruguayo válido.");
        return;
    }

    const fechaIngreso = new Date(reservaCompleta.fechaIngreso);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaIngreso < hoy) {
        alert('La fecha de ingreso debe ser mayor o igual a la fecha actual')
        return;
    }

    const fechaSalida = new Date(reservaCompleta.fechaSalida);

    if (fechaSalida < fechaIngreso) {
        alert('La fecha de salida debe ser mayor o igual a la fecha de ingreso')
        return;
    }

    let reservas = JSON.parse(localStorage.getItem("reservaCompleta")) || [];
    reservas.push(reservaCompleta)
    localStorage.setItem('reservaCompleta', JSON.stringify(reservas))

    alert('Solicitud correctamente enviada. Queda a espera de confirmación.');
}

if (typeof module !== "undefined") {
    module.exports = {
        CrearReserva
    };
}

//JSON.parse(localStorage.reservaCompleta)