function CerrarSesion() {
    localStorage.removeItem("adminLogueado");
    location.href = "index.html";
}