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

function CalcularPrecios() {
    let precios = JSON.parse(localStorage.getItem("precios")) || [];
    let tipoHabitacion = document.getElementById("tipoHabitacion").value;
    let desayuno = document.getElementById("desayuno").checked;
    let camaExtra = document.getElementById("camaExtra").checked;
    let traslado = document.getElementById("traslado").checked;
    let precioInicial = 0;

    let fechaIngreso = new Date(document.getElementById("fechaIngreso").value);
    let fechaSalida = new Date(document.getElementById("fechaSalida").value);

    let cantidadNoches = (fechaSalida - fechaIngreso) / (1000 * 60 * 60 * 24);

    if (desayuno) {
        precioInicial += precios.find(p => p.nombre === "Desayuno").precio * cantidadNoches;
    }

    if (camaExtra) {
        precioInicial += precios.find(p => p.nombre === "CamaExtra").precio;
    }

    if (traslado) {
        precioInicial += precios.find(p => p.nombre === "Traslado").precio;
    }

    for (let i = 0; i < precios.length; i++) {
        if (precios[i].nombre === tipoHabitacion) {
            document.getElementById("precioHabitacion").value = (precios[i].precio * cantidadNoches) + precioInicial;
            break;
        }
    }
}

if (typeof module !== "undefined") {
    module.exports = {
        CrearReserva,
        CalcularPrecios
    };
}