document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    const url = 'https://jsonplaceholder.typicode.com/users.'; // URL de la API

    const formData = new FormData(this); // Captura los datos del formulario

    // Realiza la solicitud POST utilizando fetch()
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes realizar acciones adicionales después de recibir una respuesta exitosa del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
});