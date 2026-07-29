document.addEventListener("DOMContentLoaded", () => {

    const adminLogueado = localStorage.getItem('adminLogueado');

    const opcionesAdmin = document.getElementsByClassName("admin");

    const opcionesUsuario = document.getElementsByClassName("usuario");

    if (adminLogueado === "true") {

        for (let opcion of opcionesAdmin) {
            opcion.style.display = "block";
        }

        for (let opcion of opcionesUsuario) {
            opcion.style.display = "none";
        }

    } else {

        for (let opcion of opcionesUsuario) {
            opcion.style.display = "block";
        }

        for (let opcion of opcionesAdmin) {
            opcion.style.display = "none";
        }

    }

    const botonCerrarSesion = document.getElementById('cerrarSesion');

    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', CerrarSesion);
    }

    const formularioLogin = document.querySelector("#formulario-iniciar-sesion");

    if (formularioLogin) {
        formularioLogin.addEventListener("submit", Login);
    }

    const formularioReserva = document.querySelector('#formulario-reserva')

    if (formularioReserva) {
        formularioReserva.addEventListener("submit", function (e) {
            e.preventDefault();
            CrearReserva();
        });
    }
    
    const gestionReservas = document.getElementById('reservas-pendientes');
    
    if(gestionReservas) {     
            TraerReservas();
    }

    const gestionHabitaciones = document.getElementById('consultar-disponibilidad-habitaciones');

    if(gestionHabitaciones) {     
            TraerHabitaciones();
    }

    const checkIn = document.getElementById('resultadoCheckIn');

    if(checkIn) {
        document.getElementById('btnCheckIn').addEventListener('click', function (e) {
            ExisteReservaAceptada();
        })
    }

    const checkOut = document.getElementById('resultadoCheckOut');

    if(checkOut) {
        document.getElementById('btnCheckOut').addEventListener('click', function (e) {
            ExisteReservaEnCurso();
        })
    }
});