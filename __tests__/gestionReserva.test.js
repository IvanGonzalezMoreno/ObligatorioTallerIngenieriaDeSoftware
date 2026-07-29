/**
 * @jest-environment jsdom
 */

const { TraerReservas, eliminarReserva, aceptarReserva } = require("../script/core/gestionReserva");


beforeEach(() => {
    document.body.innerHTML = `
        <div id="reservas-pendientes"></div>
        <div id="mensaje-reserva"></div>
    `;

    localStorage.clear();
});


test("Muestra las reservas pendientes correctamente", () => {

    const reservas = [
        {
            nombre: "Juan Pérez",
            telefono: "099123456",
            correo: "juan@gmail.com",
            tipoHabitacion: "Suite",
            cantidadPersonas: 2,
            desayuno: true,
            camaExtra: false,
            traslado: false,
            fechaIngreso: "2030-10-10",
            fechaSalida: "2030-10-12",
            solicitudEspecial: ""
        }
    ];


    localStorage.setItem(
        "reservaCompleta",
        JSON.stringify(reservas)
    );


    TraerReservas();


    expect(document.getElementById("reservas-pendientes").innerHTML)
        .toContain("Juan Pérez");

    expect(document.getElementById("reservas-pendientes").innerHTML)
        .toContain("Suite");
});


test("Elimina una reserva correctamente", () => {

    const reservas = [
        {
            nombre: "Juan Pérez",
            tipoHabitacion: "Suite"
        }
    ];


    localStorage.setItem(
        "reservaCompleta",
        JSON.stringify(reservas)
    );


    eliminarReserva(0);


    const resultado = JSON.parse(
        localStorage.getItem("reservaCompleta")
    );


    expect(resultado.length).toBe(0);


    expect(document.getElementById("mensaje-reserva").innerHTML)
        .toBe("Reserva eliminada correctamente");
});


test("Acepta una reserva correctamente", () => {

    const reservas = [
        {
            nombre: "Juan Pérez",
            tipoHabitacion: "Suite",
            estado: "pendiente"
        }
    ];


    const habitaciones = [
        {
            nombre: "Suite",
            cantidad: 3
        }
    ];


    localStorage.setItem(
        "reservaCompleta",
        JSON.stringify(reservas)
    );


    localStorage.setItem(
        "habitaciones",
        JSON.stringify(habitaciones)
    );


    aceptarReserva(0);


    const aceptadas = JSON.parse(
        localStorage.getItem("reservaAceptada")
    );


    const habitacionesActualizadas = JSON.parse(
        localStorage.getItem("habitaciones")
    );


    const pendientes = JSON.parse(
        localStorage.getItem("reservaCompleta")
    );


    expect(aceptadas.length).toBe(1);

    expect(aceptadas[0].estado)
        .toBe("Aceptada");


    expect(habitacionesActualizadas[0].cantidad)
        .toBe(2);


    expect(pendientes.length)
        .toBe(0);


    expect(document.getElementById("mensaje-reserva").innerHTML)
        .toBe("Reserva aceptada correctamente");
});

test("No elimina una reserva si el índice no existe", () => {

    localStorage.setItem("reservaCompleta", JSON.stringify([
        {
            nombre: "Juan Pérez"
        }
    ]));

    eliminarReserva(5);

    const reservas = JSON.parse(
        localStorage.getItem("reservaCompleta")
    );

    expect(reservas.length).toBe(1);
});

test("No acepta una reserva si el índice no existe", () => {

    localStorage.setItem("reservaCompleta", JSON.stringify([
        {
            nombre: "Juan Pérez",
            tipoHabitacion: "Suite"
        }
    ]));

    localStorage.setItem("habitaciones", JSON.stringify([
        {
            nombre: "Suite",
            cantidad: 3
        }
    ]));

    aceptarReserva(5);

    const reservas = JSON.parse(
        localStorage.getItem("reservaCompleta")
    );

    expect(reservas.length).toBe(1);
});

test("Acepta una reserva aunque no encuentre la habitación", () => {

    localStorage.setItem(
        "reservaCompleta",
        JSON.stringify([
            {
                nombre: "Juan Pérez",
                tipoHabitacion: "Suite",
                estado: "pendiente"
            }
        ])
    );


    localStorage.setItem(
        "habitaciones",
        JSON.stringify([
            {
                nombre: "Doble",
                cantidad: 6
            }
        ])
    );


    aceptarReserva(0);


    const aceptadas = JSON.parse(
        localStorage.getItem("reservaAceptada")
    );


    expect(aceptadas.length).toBe(1);
});

test("TraerReservas funciona sin reservas guardadas", () => {

    TraerReservas();

    expect(
        document.getElementById("reservas-pendientes").innerHTML
    ).toBe("");
});

test("TraerReservas no falla sin reservas", () => {

    TraerReservas();

    expect(
        document.getElementById("reservas-pendientes").innerHTML
    ).toBe("");
});