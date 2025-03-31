// Ejemplo de validación de formulario con JavaScript
document.querySelector('form').addEventListener('submit', function(e) {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || correo === '' || mensaje === '') {
        e.preventDefault(); // Prevenir el envío del formulario
        alert('Por favor, completa todos los campos.');
    }
});
function initMap() {
    const myLatLng = { lat: 10.032, lng: -84.223 }; // Reemplaza con la ubicación de tus lotes
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: myLatLng,
    });
    
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Lote en Costa Rica",
    });
}

// Asegúrate de agregar la clave de tu API en el siguiente script
<script
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async
    defer
></script>
