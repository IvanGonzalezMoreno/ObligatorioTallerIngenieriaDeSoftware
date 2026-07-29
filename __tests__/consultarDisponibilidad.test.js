/**
 * @jest-environment jsdom
 */

const { TraerHabitaciones } = require("../script/core/consultarDisponibilidad");


beforeEach(() => {

    document.body.innerHTML = `
        <div id="lista-disponibilidad"></div>
    `;

    localStorage.clear();
});


test("Muestra las habitaciones disponibles correctamente", () => {

    const habitaciones = [
        {
            nombre: "Suite",
            cantidad: 3
        },
        {
            nombre: "Doble",
            cantidad: 6
        }
    ];


    localStorage.setItem(
        "habitaciones",
        JSON.stringify(habitaciones)
    );


    TraerHabitaciones();


    const html = document.getElementById("lista-disponibilidad").innerHTML;


    expect(html).toContain("Suite");

    expect(html).toContain("Cantidad disponible: 3");

    expect(html).toContain("Doble");

    expect(html).toContain("Cantidad disponible: 6");
});


test("No muestra habitaciones si no existen datos", () => {

    TraerHabitaciones();


    expect(
        document.getElementById("lista-disponibilidad").innerHTML
    ).toBe("");
});