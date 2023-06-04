
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Guarda la ubicación en una cookie
    document.cookie = "lat=" + lat + "; path=/";
    document.cookie = "lon=" + lon + "; path=/";
    
    // Obtener la ciudad a partir de las coordenadas usando un servicio como Nominatim de OpenStreetMap
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
      .then(response => response.json())
      .then(data => {
        const city = data.address.city || data.address.town || data.address.village;
        document.cookie = "city=" + city + "; path=/";

        // Muestra el nombre de la ciudad en el elemento 'city'
        document.getElementById('city').textContent = 'Desde tu ciudad ' + city + ', tenemos estos menús para ti';
      })
      .catch(error => console.error(error));

  }, function() {
    // El usuario no permitió el acceso a su ubicación
    // Aquí puedes poner la ubicación predeterminada de Buenos Aires, La Plata
    document.cookie = "lat=-34.9214; path=/";
    document.cookie = "lon=-57.9545; path=/";
    document.cookie = "city=Buenos Aires; path=/";
    
    // Muestra el nombre de la ciudad en el elemento 'city'
    document.getElementById('city').textContent = 'Desde tu ciudad Buenos Aires, tenemos estos menús para ti';
  });
} else {
  // La geolocalización no está disponible en este navegador
  // Aquí también puedes poner la ubicación predeterminada de Buenos Aires, La Plata
  document.cookie = "lat=-34.9214; path=/";
  document.cookie = "lon=-57.9545; path=/";
  document.cookie = "city=Buenos Aires; path=/";
  
  // Muestra el nombre de la ciudad en el elemento 'city'
  document.getElementById('city').textContent = 'Desde tu ciudad Buenos Aires, tenemos estos menús para ti';
}

// // geolocation.js

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
  
//       // Guarda la ubicación en una cookie
//       document.cookie = "lat=" + lat + "; path=/";
//       document.cookie = "lon=" + lon + "; path=/";
      
//       // Obtener la ciudad a partir de las coordenadas usando un servicio como Nominatim de OpenStreetMap
//       fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
//         .then(response => response.json())
//         .then(data => {
//           const city = data.address.city || data.address.town || data.address.village;
//           document.cookie = "city=" + city + "; path=/";
//         })
//         .catch(error => console.error(error));
  
//     }, function() {
//       // El usuario no permitió el acceso a su ubicación
//       // Aquí puedes poner la ubicación predeterminada de Buenos Aires, La Plata
//       document.cookie = "lat=-34.9214; path=/";
//       document.cookie = "lon=-57.9545; path=/";
//       document.cookie = "city=Buenos Aires; path=/";
//     });
//   } else {
//     // La geolocalización no está disponible en este navegador
//     // Aquí también puedes poner la ubicación predeterminada de Buenos Aires, La Plata
//     document.cookie = "lat=-34.9214; path=/";
//     document.cookie = "lon=-57.9545; path=/";
//     document.cookie = "city=Buenos Aires; path=/";
//   }
  
// geolocation.js

// geolocation.js
