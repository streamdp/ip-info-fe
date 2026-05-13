const map = L.map('map', { zoomControl: false }).setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OSM' }).addTo(map);
L.control.zoom({ position: 'bottomright' }).addTo(map);

const markerRegistry = {};

document.addEventListener('htmx:afterSettle', function(evt) {
    const targetId = evt.detail.target.id;
    const card = evt.detail.target.querySelector('.info-card');
    if (!card) return;

    const ip = card.dataset.ip;
    const lat = parseFloat(card.dataset.lat);
    const lng = parseFloat(card.dataset.lng);
    const isClient = (targetId === 'client-result');

    if (isNaN(lat) || isNaN(lng) || (lat === 0 && lng === 0)) return;
    const coords = [lat, lng];

    if (markerRegistry[ip]) {
        markerRegistry[ip].openPopup();
    } else {
        const marker = L.marker(coords, {
            icon: L.icon({
                iconUrl: '../marker-icon.png',
                iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34],
                shadowUrl: '../marker-shadow.png', shadowSize: [41, 41],
                className: isClient ? 'marker-client' : 'marker-history'
            })
        }).addTo(map);
        marker.bindPopup(`<div class="text-xs font-sans"><b>${ip}</b><br>${card.dataset.city || 'Location'}</div>`).openPopup();
        markerRegistry[ip] = marker;
    }
    autoFitAll();
});

function autoFitAll() {
    const markers = Object.values(markerRegistry);
    if (markers.length === 0) return;
    if (markers.length === 1) map.flyTo(markers[0].getLatLng(), 10, { duration: 1.5 });
    else map.flyToBounds(new L.featureGroup(markers).getBounds(), { padding: [80, 80], duration: 1.5 });
}