// create map
var map = L.map('map').setView([48.87007, 2.342130], 12);
                                                //^ this number represnets zoom level

// add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Creatubg icons
var redIcon = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 5] // point from which the popup should open relative to the iconAnchor
});

// create and main add geolocation marker
var marker = L.marker([48.87007, 2.346453]).addTo(map);
        //L.marker(Latitude, Longitude)

//creating metro station markers
const rS = L.marker([48.866200610611926, 2.352236247419453],{icon: redIcon}).bindPopup('RÃ©aumur-SÃ©bastopol').addTo(map),
      sSD = L.marker([48.869531786321566, 2.3528590208055196],{icon: redIcon}).bindPopup('Strasbourg-Saint-Denis').addTo(map),
      sentier = L.marker([48.8673721067762, 2.347107922912739],{icon: redIcon}).bindPopup('Sentier').addTo(map),
      bourse = L.marker([48.86868503971672, 2.3412285142058167],{icon: redIcon}).bindPopup('Bourse').addTo(map),
      qS = L.marker([48.869560129483226, 2.3358638645569543],{icon: redIcon}).bindPopup('Quatre Septembre').addTo(map),
      gB = L.marker([48.871282159004856, 2.3434818588892714],{icon: redIcon}).bindPopup('Grands Boulevards').addTo(map);

var metroStation = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]);

//creating a circle
var circle = L.circle([48.868102, 2.295799], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1500
}).addTo(map);

//creating a polygon/Arrondissement 
var polygon = L.polygon([
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813],
    [48.86834104280146, 2.330308418109664]
]).addTo(map);
                                         
//Popups 
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle. (pop up test)");
polygon.bindPopup("I am a polygon. (pop up test)");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);