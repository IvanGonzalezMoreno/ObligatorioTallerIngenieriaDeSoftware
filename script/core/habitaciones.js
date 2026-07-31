function CargarInformacionHabitaciones() {
    let detallesHabitacion = JSON.parse(localStorage.getItem("precios"));
    let capacidad = JSON.parse(localStorage.getItem("habitaciones"));


    for (let i = 0; i < detallesHabitacion.length; i++) {

        if (detallesHabitacion[i].nombre === "Estandar") {

            document.getElementById("habitacionEstandar").innerHTML = `<p>Precio: USD ${detallesHabitacion[i].precio} por noche</p>
                            <p>Capacidad: ${capacidad[i].capacidad} personas</p>
                            <p>${detallesHabitacion[i].descripcion}</p>   
                        `
        }

        if (detallesHabitacion[i].nombre === "Doble") {

            document.getElementById("habitacionDoble").innerHTML = `<p>Precio: USD ${detallesHabitacion[i].precio} por noche</p>
                            <p>Capacidad: ${capacidad[i].capacidad} personas</p>
                            <p>${detallesHabitacion[i].descripcion}</p>  
                        `
        }

        if (detallesHabitacion[i].nombre === "Suite") {

            document.getElementById("habitacionSuite").innerHTML = `<p>Precio: USD ${detallesHabitacion[i].precio} por noche</p>
                            <p>Capacidad: ${capacidad[i].capacidad} personas</p>
                            <p>${detallesHabitacion[i].descripcion}</p>    
                        `
        }

        if (detallesHabitacion[i].nombre === "Familiar") {

            document.getElementById("habitacionFamiliar").innerHTML = `<p>Precio: USD ${detallesHabitacion[i].precio} por noche</p>
                            <p>Capacidad: ${capacidad[i].capacidad} personas</p>
                            <p>${detallesHabitacion[i].descripcion}</p>    
                        `
        }
    }
}