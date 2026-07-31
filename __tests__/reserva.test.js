/**
 * @jest-environment jsdom
 */

const { CrearReserva, CalcularPrecios } = require("../script/core/reserva");


beforeEach(() => {

    document.body.innerHTML = `
        <input id="nombreCompleto">
        <input id="telefono">
        <input id="email">
        <input id="tipoHabitacion">
        <input id="cantidadPersonas">

        <input id="desayuno" type="checkbox">
        <input id="camaExtra" type="checkbox">
        <input id="traslado" type="checkbox">

        <input id="fechaIngreso">
        <input id="fechaSalida">

        <textarea id="solicitudEspecial"></textarea>

        <input id="precioHabitacion">
    `;

    localStorage.clear();

    window.alert = jest.fn();
});


test("Crea una reserva correctamente", () => {

    document.getElementById("nombreCompleto").value = "Juan Pérez";
    document.getElementById("telefono").value = "099123456";
    document.getElementById("email").value = "juan@gmail.com";
    document.getElementById("tipoHabitacion").value = "Suite";
    document.getElementById("cantidadPersonas").value = "2";

    document.getElementById("fechaIngreso").value = "2030-10-10";
    document.getElementById("fechaSalida").value = "2030-10-12";


    CrearReserva();


    const reservas = JSON.parse(
        localStorage.getItem("reservaCompleta")
    );


    expect(reservas.length).toBe(1);

    expect(reservas[0].nombre)
        .toBe("Juan Pérez");

    expect(reservas[0].estado)
        .toBe("pendiente");
});


test("No crea reserva si el nombre es demasiado corto", () => {

    document.getElementById("nombreCompleto").value = "Juan";
    document.getElementById("telefono").value = "099123456";
    document.getElementById("fechaIngreso").value = "2030-10-10";
    document.getElementById("fechaSalida").value = "2030-10-12";


    CrearReserva();


    expect(window.alert)
        .toHaveBeenCalledWith(
            "El nombre debe contener al menos 6 caracteres"
        );


    expect(localStorage.getItem("reservaCompleta"))
        .toBeNull();
});


test("No crea reserva con teléfono inválido", () => {

    document.getElementById("nombreCompleto").value = "Juan Pérez";
    document.getElementById("telefono").value = "123456";
    document.getElementById("fechaIngreso").value = "2030-10-10";
    document.getElementById("fechaSalida").value = "2030-10-12";


    CrearReserva();


    expect(window.alert)
        .toHaveBeenCalledWith(
            "Ingrese un teléfono uruguayo válido."
        );


    expect(localStorage.getItem("reservaCompleta"))
        .toBeNull();
});


test("No crea reserva si la fecha de ingreso es anterior a hoy", () => {

    document.getElementById("nombreCompleto").value = "Juan Pérez";
    document.getElementById("telefono").value = "099123456";

    document.getElementById("fechaIngreso").value = "2020-01-01";
    document.getElementById("fechaSalida").value = "2020-01-10";


    CrearReserva();


    expect(window.alert)
        .toHaveBeenCalledWith(
            "La fecha de ingreso debe ser mayor o igual a la fecha actual"
        );
});


test("No crea reserva si la fecha de salida es anterior al ingreso", () => {

    document.getElementById("nombreCompleto").value = "Juan Pérez";
    document.getElementById("telefono").value = "099123456";

    document.getElementById("fechaIngreso").value = "2030-10-10";
    document.getElementById("fechaSalida").value = "2030-10-01";


    CrearReserva();


    expect(window.alert)
        .toHaveBeenCalledWith(
            "La fecha de salida debe ser mayor o igual a la fecha de ingreso"
        );
});

test("Calcula correctamente el precio de la reserva", () => {

    localStorage.setItem("precios", JSON.stringify([
        { nombre: "Suite", precio: 100 },
        { nombre: "Desayuno", precio: 20 },
        { nombre: "CamaExtra", precio: 50 },
        { nombre: "Traslado", precio: 30 }
    ]));

    document.getElementById("tipoHabitacion").value = "Suite";

    document.getElementById("desayuno").checked = true;
    document.getElementById("camaExtra").checked = true;
    document.getElementById("traslado").checked = true;

    document.getElementById("fechaIngreso").value = "2030-10-10";
    document.getElementById("fechaSalida").value = "2030-10-12";

    CalcularPrecios();

    expect(document.getElementById("precioHabitacion").value)
        .toBe("320");
});

test("Calcula el precio solo de la habitación", () => {

    localStorage.setItem("precios", JSON.stringify([
        { nombre: "Suite", precio: 100 },
        { nombre: "Desayuno", precio: 20 },
        { nombre: "CamaExtra", precio: 50 },
        { nombre: "Traslado", precio: 30 }
    ]));

    document.getElementById("tipoHabitacion").value = "Suite";

    document.getElementById("desayuno").checked = false;
    document.getElementById("camaExtra").checked = false;
    document.getElementById("traslado").checked = false;

    document.getElementById("fechaIngreso").value = "2030-10-10";
    document.getElementById("fechaSalida").value = "2030-10-12";

    CalcularPrecios();

    expect(document.getElementById("precioHabitacion").value)
        .toBe("200");
});