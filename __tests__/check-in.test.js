/**
 * @jest-environment jsdom
 */

const { ExisteReservaAceptada, checkIn } = require("../script/core/check-in");


beforeEach(() => {

    document.body.innerHTML = `
        <input id="emailCheckIn">

        <div id="resultadoCheckIn"></div>
    `;

    localStorage.clear();

    window.alert = jest.fn();
});


test("Muestra una reserva aceptada correctamente", () => {

    const reservas = [
        {
            nombre: "Juan Pérez",
            correo: "juan@gmail.com",
            tipoHabitacion: "Suite",
            cantidadPersonas: 2,
            desayuno: true,
            camaExtra: false,
            fechaIngreso: "2030-10-10",
            fechaSalida: "2030-10-12",
            estado: "Aceptada"
        }
    ];


    localStorage.setItem(
        "reservaAceptada",
        JSON.stringify(reservas)
    );


    document.getElementById("emailCheckIn").value = "juan@gmail.com";


    ExisteReservaAceptada();


    const resultado = document.getElementById("resultadoCheckIn").innerHTML;


    expect(resultado)
        .toContain("Juan Pérez");

    expect(resultado)
        .toContain("Realizar Check-In");
});


test("Muestra mensaje si no tiene reserva aceptada", () => {

    localStorage.setItem(
        "reservaAceptada",
        JSON.stringify([])
    );


    document.getElementById("emailCheckIn").value = "juan@gmail.com";


    ExisteReservaAceptada();


    expect(
        document.getElementById("resultadoCheckIn").innerHTML
    )
    .toBe("Este huésped no tiene una reserva aceptada");
});


test("Realiza check-in correctamente", () => {

    const reservas = [
        {
            nombre: "Juan Pérez",
            estado: "Aceptada"
        }
    ];


    localStorage.setItem(
        "reservaAceptada",
        JSON.stringify(reservas)
    );


    checkIn(0);


    const resultado = JSON.parse(
        localStorage.getItem("reservaAceptada")
    );


    expect(resultado[0].estado)
        .toBe("En curso");


    expect(window.alert)
        .toHaveBeenCalledWith(
            "Check-In realizado con éxito"
        );
});