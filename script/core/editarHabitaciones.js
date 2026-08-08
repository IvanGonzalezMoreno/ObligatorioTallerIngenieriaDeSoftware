function recibirHabitaciones() {
    let detallesHabitacion = JSON.parse(localStorage.getItem("precios")) || [];
    let html = "";
    
    for(let i = 0; i < detallesHabitacion.length; i++) {
        let habitacion = detallesHabitacion[i];
        html += `
            <div class="habitacion">
                <h3>${habitacion.nombre}</h3>
                <label for="precio${i}">Precio:</label>
                <input type="number" id="precio${i}" value="${habitacion.precio}" />
                <label for="descripcion${i}">Descripción:</label>
                <input type="text" id="descripcion${i}" value="${habitacion.descripcion}" />
                <button onclick="guardarCambios(${i})">Guardar Cambios</button>
            </div>
        `;
    }
    document.getElementById("habitacionesContainer").innerHTML = html;
}


function guardarCambios(i) {
    let detallesHabitacion = JSON.parse(localStorage.getItem("precios")) || [];
    
    for(let j = 0; j < detallesHabitacion.length; j++) {
        if(j === i) {
            let precioInput = document.getElementById(`precio${j}`).value;
            console.log(precioInput)
            let descripcionInput = document.getElementById(`descripcion${j}`).value;
            console.log(descripcionInput)
            detallesHabitacion[j].precio = parseFloat(precioInput);
            detallesHabitacion[j].descripcion = descripcionInput;
            localStorage.setItem("precios", JSON.stringify(detallesHabitacion));
            alert(`Cambios guardados para la habitación ${detallesHabitacion[j].nombre}`);
            break;
        }
    }
}