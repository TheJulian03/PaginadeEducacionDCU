document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("userForm");
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const foto = document.getElementById("foto").value;
        const id = document.getElementById("id").value;
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;

        console.log("Datos registrados:", { foto, id, nombre, correo, telefono });

        
    });
});

function redireccion() {
    location.href = "contenido.html"
    
}

function capturar() {
    let nombre = document.getElementById("nombre").value;
    alert(nombre);
}
