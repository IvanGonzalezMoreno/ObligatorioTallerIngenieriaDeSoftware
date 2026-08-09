function CrearReview() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
    let reviewNueva = {
        nombre: document.getElementById("nombreReview").value,
        comentario: document.getElementById("comentarioReview").value,
        calificacion: parseInt(document.getElementById("calificacionReview").value)
    }

    reviews.push(reviewNueva);
    
    localStorage.setItem("reviews", JSON.stringify(reviews));
}