function MostrarReview() {
    let review = JSON.parse(localStorage.getItem("reviews")) || [];
    let html = "";

    for (let i = 0; i < review.length; i++) {
        html += `
        <article class="articulo-reseña">
                    <div class="encabezado-reseña">
                        <img src="images/usuario.svg" alt="Foto de perfil" class="imgPerfil">

                        <div class="informacion-huesped">
                            <h3 class="nombre-huesped">${review[i].nombre}</h3>

                            <div class="estrellas">
                                ${MostrarEstrellas(review[i].calificacion)}
                            </div>

                        </div>
                    </div>
                    <p class="texto-reseña">${review[i].comentario}</p>
                </article>
        `;
    }
    document.getElementById("contenedor-reseñas").innerHTML = html + html;
}