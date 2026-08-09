document.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.getElementById("btnMenu");
    const menuDesplegable = document.getElementById("menuDesplegable");

    if (btnMenu) {
        btnMenu.addEventListener("click", function () {
            menuDesplegable.classList.toggle("mostrar");
            btnMenu.classList.toggle("abierto");
        });
    }

    const adminLogueado = localStorage.getItem('adminLogueado');

    const opcionesAdmin = document.getElementsByClassName("admin");

    const opcionesUsuario = document.getElementsByClassName("usuario");

    let precios = [{ nombre: "Estandar", precio: 90, descripcion: "Está equipada con una cama matrimonial." },
    { nombre: "Doble", precio: 140, descripcion: "Está equipada con una cama matrimonial y 2 individuales." },
    { nombre: "Suite", precio: 190, descripcion: "Está equipada con una cama matrimonial, jacuzzi y balcón con vista al mar." },
    { nombre: "Familiar", precio: 240, descripcion: "Posee con 2 ambientes. Está equipada con una cama matrimonial y 4 camas individuales." },
    { nombre: "Desayuno", precio: 10, descripcion: "Desayuno completo." },
    { nombre: "CamaExtra", precio: 20, descripcion: "Cama adicional." },
    { nombre: "Traslado", precio: 15, descripcion: "Servicio de traslado al aeropuerto." }
    ]

    if (!localStorage.getItem("precios")) {
        localStorage.setItem("precios", JSON.stringify(precios));
    }

    let review = JSON.parse(localStorage.getItem("reviews"));
    if (!review) {
        review = [
            { nombre: "Juan Pérez", comentario: "Excelente servicio y atención. La habitación estaba impecable.", calificacion: 5 },
            { nombre: "Pedro González López", comentario: "Disfruté mucho mi estadía. El desayuno fue delicioso.", calificacion: 4 },
            { nombre: "Carla García", comentario: "El personal fue muy amable y servicial. Volveré pronto.", calificacion: 5 }
        ];

        localStorage.setItem("reviews", JSON.stringify(review));
    }

    const btnReview = document.getElementById("btnReview");
    const modalReview = document.getElementById("modalReview");
    const cerrarModal = document.getElementById("cerrarModal");

    if (btnReview) {
        btnReview.addEventListener("click", function () {
            modalReview.style.display = "block";
        });
    }

    if (cerrarModal) {
        cerrarModal.addEventListener("click", function () {
            modalReview.style.display = "none";
        });
    }

    const mostrarReviews = document.getElementById("contenedor-reseñas");

    if (mostrarReviews) {
        MostrarReview();

        window.addEventListener("click", function (e) {
            if (e.target === modalReview) {
                modalReview.style.display = "none";
            }
        });
    }

    const formReview = document.getElementById("formReview");

    if (formReview) {
        formReview.addEventListener("submit", function (e) {
            // e.preventDefault();
            CrearReview();
            MostrarReview();
        });
    }

    let datosHabitaciones = JSON.parse(localStorage.getItem("habitaciones"));

    if (!datosHabitaciones) {
        datosHabitaciones = [
            { nombre: "Estandar", cantidad: 8, capacidad: 2 },
            { nombre: "Doble", cantidad: 6, capacidad: 4 },
            { nombre: "Suite", cantidad: 3, capacidad: 2 },
            { nombre: "Familiar", cantidad: 3, capacidad: 6 }
        ];

        localStorage.setItem("habitaciones", JSON.stringify(datosHabitaciones));
    }

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

        formularioReserva.addEventListener("change", function (e) {
            CalcularPrecios();
        })
    }

    const gestionReservas = document.getElementById('reservas-pendientes');

    if (gestionReservas) {
        TraerReservas();
    }

    const gestionHabitaciones = document.getElementById('consultar-disponibilidad-habitaciones');

    if (gestionHabitaciones) {
        TraerHabitaciones();
    }

    const checkIn = document.getElementById('resultadoCheckIn');

    if (checkIn) {
        document.getElementById('btnCheckIn').addEventListener('click', function (e) {
            ExisteReservaAceptada();
        })
    }

    const checkOut = document.getElementById('resultadoCheckOut');

    if (checkOut) {
        document.getElementById('btnCheckOut').addEventListener('click', function (e) {
            ExisteReservaEnCurso();
        })
    }

    const habitaciones = document.getElementById('habitacionesSection');

    if (habitaciones) {
        CargarInformacionHabitaciones();
    }

    const editarHabitaciones = document.getElementById('habitacionesContainer');

    if (editarHabitaciones) {
        recibirHabitaciones();
    }

    const estadistica = document.getElementById('seccionEstadistica');

    if (estadistica) {
        MostrarEstadisticas();
    }


});