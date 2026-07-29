/**
 * @jest-environment jsdom
 */

const { Login, CredencialesValidas } = require("../script/core/login");

beforeEach(() => {
    document.body.innerHTML = `
        <input id="email">
        <input id="password">
        <div id="loginError"></div>
    `;

    localStorage.clear();

    window.alert = jest.fn();
});


test("Credenciales correctas", () => {

    const resultado = CredencialesValidas(
        "admin@gmail.com",
        "1234"
    );

    expect(resultado).toBe(true);
});


test("Credenciales incorrectas", () => {

    const resultado = CredencialesValidas(
        "admin@gmail.com",
        "1111"
    );

    expect(resultado).toBe(false);
});


test("Login correcto guarda sesión", () => {

    document.getElementById("email").value = "admin@gmail.com";
    document.getElementById("password").value = "1234";


    const evento = {
        preventDefault: jest.fn()
    };


    Login(evento);


    expect(localStorage.getItem("adminLogueado"))
        .toBe("true");
});


test("Login incorrecto muestra mensaje de error", () => {

    document.getElementById("email").value = "otro@gmail.com";
    document.getElementById("password").value = "1111";


    const evento = {
        preventDefault: jest.fn()
    };


    Login(evento);


    expect(document.getElementById("loginError").innerHTML)
        .toBe("Datos incorrectos");
});