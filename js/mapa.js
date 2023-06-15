


var map = L.map('map').setView([-5.195244172218633, -80.63041796243898], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-5.195244172218633, -80.63041796243898]).addTo(map)
    .bindPopup('Ciudad de Piura')
    .openPopup();