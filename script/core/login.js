function CredencialesValidas(email, password) {
    return email === "admin@gmail.com" && password === "1234";
}

function Login(e) {
    e.preventDefault();
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;

    if (!CredencialesValidas(inputEmail, inputPassword)) {
        document.getElementById("loginError").innerHTML = "Datos incorrectos";
        return;
    }

    localStorage.setItem('adminLogueado', "true");

    location.href = "index.html";
}

if (typeof module !== "undefined") {
    module.exports = {
        Login, CredencialesValidas
    };
}