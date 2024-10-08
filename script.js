
const locations = [
    "NUST GATE ",
    "MASIYEPAMBILI",
    "INKAKA CIRCLE",
    "ZIMCAMPUS"
];
let currentIndex = 0;

function updateLocation() {
    document.getElementById('location').textContent = locations[currentIndex];
    currentIndex = (currentIndex + 1) % locations.length;
}


setInterval(updateLocation, 5000);
updateLocation(); 
