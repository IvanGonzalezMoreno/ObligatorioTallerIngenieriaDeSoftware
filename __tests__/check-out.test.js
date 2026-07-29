/**
 * @jest-environment jsdom
 */

const { ExisteReservaEnCurso, checkOut } = require("../script/core/check-out");


beforeEach(() => {

    document.body.innerHTML = `
        <input id="emailCheckOut">

        <div id="resultadoCheckOut"></div>
    `;

    localStorage.clear();

    window.alert = jest.fn();
});


test("Muestra una reserva en curso correctamente", () => {

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
            estado: "En curso"
        }
    ];


    localStorage.setItem(
        "reservaAceptada",
        JSON.stringify(reservas)
    );


    document.getElementById("emailCheckOut").value = "juan@gmail.com";


    ExisteReservaEnCurso();


    const resultado =
        document.getElementById("resultadoCheckOut").innerHTML;


    expect(resultado)
        .toContain("Juan Pérez");


    expect(resultado)
        .toContain("Realizar Check-Out");
});


test("Muestra mensaje si no tiene reserva en curso", () => {

    localStorage.setItem(
        "reservaAceptada",
        JSON.stringify([])
    );


    document.getElementById("emailCheckOut").value = "juan@gmail.com";


    ExisteReservaEnCurso();


    expect(
        document.getElementById("resultadoCheckOut").innerHTML
    )
    .toBe("Este huésped no tiene una reserva en curso");
});


test("Realiza check-out correctamente", () => {

    const reservas = [
        {
            nombre: "Juan Pérez",
            tipoHabitacion: "Suite",
            estado: "En curso"
        }
    ];


    const habitaciones = [
        {
            nombre: "Suite",
            cantidad: 2
        }
    ];


    localStorage.setItem(
        "reservaAceptada",
        JSON.stringify(reservas)
    );


    localStorage.setItem(
        "habitaciones",
        JSON.stringify(habitaciones)
    );


    checkOut(0);


    const reservasActualizadas = JSON.parse(
        localStorage.getItem("reservaAceptada")
    );


    const habitacionesActualizadas = JSON.parse(
        localStorage.getItem("habitaciones")
    );


    expect(reservasActualizadas[0].estado)
        .toBe("Finalizada");


    expect(habitacionesActualizadas[0].cantidad)
        .toBe(3);


    expect(window.alert)
        .toHaveBeenCalledWith(
            "Check-Out realizado con éxito"
        );
});