document.addEventListener('DOMContentLoaded', function () {
  mapa([35.9375, 14.3754]);
});


function mapa(coord){

    var map = L.map('map').setView(coord, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker(coord).addTo(map);
}