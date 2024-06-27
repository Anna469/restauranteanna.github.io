// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, mediante AJAX o fetch()

    // Ejemplo básico de salida
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);

    // Puedes agregar aquí la lógica para enviar los datos a un servidor
    // Por ejemplo, utilizando fetch() para enviar los datos a un endpoint
});
