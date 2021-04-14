//Latitude and Longitude
var lat;
var long;
var locationArr = [];
console.log(locationArr);

function SelectAllData() {
  
  firebase
    .database()
    .ref("Admin")
    .once("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        lat = CurrentRecord.val().Latitude;
        long = CurrentRecord.val().Longitude;
        evname = CurrentRecord.val().Name;
        data = CurrentRecord.val().Data;
        address = CurrentRecord.val().Address;
        machine = CurrentRecord.val().Machine;
        restro = CurrentRecord.val().Restaurants;
        toilet = CurrentRecord.val().Toilet;
        play = CurrentRecord.val().Play_Area;
        store = CurrentRecord.val().General_Store;
        tyre = CurrentRecord.val().Tyre_Facility;

        var locationData = {
          latitude: lat,
          longitude: long,
          evname: evname,
          address: address,
          data: data,
          machine: machine,
          restro: restro,
          toilet: toilet,
          play: play,
          store: store,
          tyre: tyre
        };
        var marker = L.marker([locationData.latitude, locationData.longitude])
      .addTo(map)
      .bindPopup(
        "<h5>" + locationData.evname + "</h5>" + 
        "<h6>Number of Cars: " + locationData.data + "</h6>" +
        "<h6>Number of Machines in EV-Station: " + locationData.machine + "</h6>" +
        "<h6>Address : " + locationData.address + "</h6>" +
        "<h6>Is there Restaurants nearby 🍔 🍕: " + locationData.restro + "</h6>" +
        "<h6>Is there Toilet/Restrooms nearby 🚻 : " + locationData.toilet + "</h6>" +
        "<h6>Is there Play-Area nearby ⚽ ⛳: " + locationData.play + "</h6>"+
        "<h6>General Store 🏬 : " + locationData.store + "</h6>" +
        "<h6>Tyre Air checking facility : " + locationData.tyre + "</h6>"
      );
      console.log(evname);
       
      });
    
    });
 
}
// default map layer
let map = L.map("map", {
  layers: MQ.mapLayer(),
  center: [19.382695436041132, 72.8243402683932],
  zoom: 5,
});
window.onload = SelectAllData();

/*
//MARKERS AND POPUPS
//surat
var marker = L.marker([21.094140,72.866240]).addTo(map).bindPopup('<h1>Kalinga Ventures India Pvt Ltd</h1> <p>Manokamna Rcm Puc, Rd Number 5, GIDC, Sachin, Surat, Gujarat 394230</p>');
//Malad
var marker = L.marker([19.184010,72.836288]).addTo(map).bindPopup('<h1>EVteQ - Electric Vehicle Charging Solution</h1> <p>104, Quantum tower, Behind SBI, Rambaug lane, S.V Road, Malad West, Mumbai, Maharashtra 400064</p>');
//Andheri
var marker = L.marker([19.146466,72.832358]).addTo(map).bindPopup('<h1>Reliance Energy Electric Vehicle Charging Station</h1> <p>P-1, Cross Rd B, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400047</p>');
//Kurla
var marker = L.marker([19.116500,72.926910]).addTo(map).bindPopup('<h1>Electric Vehicle Charging Station</h1> <p>Entrance gate 3, Phoenix Market City, LBS Marg, Kurla West, Mumbai, Maharashtra</p>');
//Vikhroli
var marker = L.marker([19.079964,72.991704]).addTo(map).bindPopup('<h1>Tata Power Co Ltd. Car Charging Point</h1> <p>Pirojshanagar, Vikhroli, Mumbai, Maharashtra 400079</p>');
//Vashi
var marker = L.marker([19.059310,73.001510]).addTo(map).bindPopup('<h1>ChargeGrid - 2 | Vashi | Car Charging Station</h1> <p>Plot 81, B-Lane, Sector 8, Vashi, Navi Mumbai, Maharashtra 400703</p>');
//Navi Mumbai[kopar khairane]
var marker = L.marker([19.102852,73.003075]).addTo(map).bindPopup('<h1>Magenta ChargeGrid Charging Station</h1> <p>Plot no 26, Alpha Garden, behind Reliance Foundation School, Sector 14, Kopar Khairane, Navi Mumbai, Maharashtra 400709</p>');
//Lonavala
var marker = L.marker([18.757891,73.418907]).addTo(map).bindPopup('<h1>Electric Vehicle Charging Station</h1> <p>Gharkul Society, Valvan, Lonavla, Maharashtra 410405</p>');
//Nashik
var marker = L.marker([19.974870,73.825340]).addTo(map).bindPopup('<h1>Kanchan Motors Workshop</h1> <p>Madsangavi, Nashik, Maharashtra 422006</p>');
//Telangana
var marker = L.marker([17.423920,78.444770]).addTo(map).bindPopup('<h1>Amplify Mobility Charging Station</h1> <p>8-2, 335/2, Rd Number 5, SBI Executive Enclave, Green Valley, Banjara Hills, Hyderabad, Telangana 500034</p>');
//Chennai
var marker = L.marker([12.943640,80.134850]).addTo(map).bindPopup('<h1>ReVolt’s Electric Vehicle Charging Station</h1> <p>16, 7th St, Vinobaji Nagar, Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600064</p>');
//Bengaluru
var marker = L.marker([13.058440,77.736069]).addTo(map).bindPopup('<h1>SemaConnect Systems India Pvt Ltd</h1> <p>Cheemasandra Rd, Virgonagar, Cheemasandra, Bengaluru, Karnataka 560049</p>');
//Bengaluru-2
var marker = L.marker([12.922850,77.569800]).addTo(map).bindPopup('<h1>Supreme Ridz</h1> <p>No 329 CT Bed, Banashankari 2d Stage, Thyagarajanagar, Bengaluru, Karnataka 560028</p>');
//Begaluru-3
var marker = L.marker([12.805990,77.625450]).addTo(map).bindPopup('<h1>Mahindra Reva Solar Charging Station</h1> <p>Koppa, Bengaluru, Karnataka 560099</p>');
//Lucknow
var marker = L.marker([26.837470,80.900250]).addTo(map).bindPopup('<h1>Khalsa Agencies</h1> <p>6 Mill Road,Aishbagh,Near- Union Bank Of India, Lucknow, Uttar Pradesh 226004</p>');
//New Delhi
var marker = L.marker([28.569420,77.220900]).addTo(map).bindPopup('<h1>EV Plugin Charging Station</h1> <p>2nd Floor, 39, Shahpur Jat, New Delhi, Delhi 110049</p>');
//Haryana-1
var marker = L.marker([28.494976,77.089539]).addTo(map).bindPopup('<h1>Zevpoint E-mobility</h1> <p>DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122022</p>');
//Haryana-2
var marker = L.marker([28.681290,76.937510]).addTo(map).bindPopup('<h1>NDPI Electric India Pvt. Ltd</h1> <p>Shop No. 1,Najafgarh Road, Near Ballore Chungi, Bahadurgarh, Haryana 124507</p>');
//Indore
var marker = L.marker([22.759430,75.886009]).addTo(map).bindPopup('<h1>EV-Urjaa Charging Station</h1> <p>Building 3rd Floor, EV URJAA PVT LTD C/o Prestige Vihar, Law, Sector-D, Scheme No 74C, Vijay Nagar, Indore, Madhya Pradesh 452010</p>');
*/

function runDirection(start, end) {
  // recreating new map layer after removal
  map = L.map("map", {
    layers: MQ.mapLayer(),
    center: [19.382695436041132, 72.8243402683932],
    zoom: 12,
  });

  
  firebase
    .database()
    .ref("Admin")
    .once("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        lat = CurrentRecord.val().Latitude;
        long = CurrentRecord.val().Longitude;
        evname = CurrentRecord.val().Name;
        address = CurrentRecord.val().Address;
        data = CurrentRecord.val().Data;
        machine = CurrentRecord.val().Machine;
        restro = CurrentRecord.val().Restaurants;
        toilet = CurrentRecord.val().Toilet;
        play = CurrentRecord.val().Play_Area;
        store = CurrentRecord.val().General_Store;
        tyre = CurrentRecord.val().Tyre_Facility;

        var locationData = {
          latitude: lat,
          longitude: long,
          evname: evname,
          address: address,
          data: data,
          machine: machine,
          restro: restro,
          toilet: toilet,
          play: play,
          store: store,
          tyre: tyre
        };

        var marker = L.marker([locationData.latitude, locationData.longitude])
      .addTo(map)
      .bindPopup(
        "<h5>" + locationData.evname + "</h5>" + 
        "<h6>Number of Cars: " + locationData.data + "</h6>" +
        "<h6>Number of Machines in EV-Station: " + locationData.machine + "</h6>" +
        "<h6>Address : " + locationData.address + "</h6>" +
        "<h6>Is there Restaurants nearby 🍔 🍕: " + locationData.restro + "</h6>" +
        "<h6>Is there Toilet/Restrooms nearby 🚻 : " + locationData.toilet + "</h6>" +
        "<h6>Is there Play-Area nearby ⚽ ⛳: " + locationData.play + "</h6>"+
        "<h6>General Store 🏬 : " + locationData.store + "</h6>" +
        "<h6>Tyre Air checking facility : " + locationData.tyre + "</h6>"
        );
      console.log(evname);
       
      });
    
    });
 
  //Markers
 /* //surat
  var marker = L.marker([21.09414, 72.86624])
    .addTo(map)
    .bindPopup(
      "<h1>Kalinga Ventures India Pvt Ltd</h1> <p>Manokamna Rcm Puc, Rd Number 5, GIDC, Sachin, Surat, Gujarat 394230</p>"
    );
  //Malad
  var marker = L.marker([19.18401, 72.836288])
    .addTo(map)
    .bindPopup(
      "<h1>EVteQ - Electric Vehicle Charging Solution</h1> <p>104, Quantum tower, Behind SBI, Rambaug lane, S.V Road, Malad West, Mumbai, Maharashtra 400064</p>"
    );
  //Andheri
  var marker = L.marker([19.146466, 72.832358])
    .addTo(map)
    .bindPopup(
      "<h1>Reliance Energy Electric Vehicle Charging Station</h1> <p>P-1, Cross Rd B, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400047</p>"
    );
  //Kurla
  var marker = L.marker([19.1165, 72.92691])
    .addTo(map)
    .bindPopup(
      "<h1>Electric Vehicle Charging Station</h1> <p>Entrance gate 3, Phoenix Market City, LBS Marg, Kurla West, Mumbai, Maharashtra</p>"
    );
  //Vikhroli
  var marker = L.marker([19.079964, 72.991704])
    .addTo(map)
    .bindPopup(
      "<h1>Tata Power Co Ltd. Car Charging Point</h1> <p>Pirojshanagar, Vikhroli, Mumbai, Maharashtra 400079</p>"
    );
  //Vashi
  var marker = L.marker([19.05931, 73.00151])
    .addTo(map)
    .bindPopup(
      "<h1>ChargeGrid - 2 | Vashi | Car Charging Station</h1> <p>Plot 81, B-Lane, Sector 8, Vashi, Navi Mumbai, Maharashtra 400703</p>"
    );
  //Navi Mumbai[kopar khairane]
  var marker = L.marker([19.102852, 73.003075])
    .addTo(map)
    .bindPopup(
      "<h1>Magenta ChargeGrid Charging Station</h1> <p>Plot no 26, Alpha Garden, behind Reliance Foundation School, Sector 14, Kopar Khairane, Navi Mumbai, Maharashtra 400709</p>"
    );
  //Lonavala
  var marker = L.marker([18.757891, 73.418907])
    .addTo(map)
    .bindPopup(
      "<h1>Electric Vehicle Charging Station</h1> <p>Gharkul Society, Valvan, Lonavla, Maharashtra 410405</p>"
    );
  //Nashik
  var marker = L.marker([19.97487, 73.82534])
    .addTo(map)
    .bindPopup(
      "<h1>Kanchan Motors Workshop</h1> <p>Madsangavi, Nashik, Maharashtra 422006</p>"
    );
  //Telangana
  var marker = L.marker([17.42392, 78.44477])
    .addTo(map)
    .bindPopup(
      "<h1>Amplify Mobility Charging Station</h1> <p>8-2, 335/2, Rd Number 5, SBI Executive Enclave, Green Valley, Banjara Hills, Hyderabad, Telangana 500034</p>"
    );
  //Chennai
  var marker = L.marker([12.94364, 80.13485])
    .addTo(map)
    .bindPopup(
      "<h1>ReVolt’s Electric Vehicle Charging Station</h1> <p>16, 7th St, Vinobaji Nagar, Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600064</p>"
    );
  //Bengaluru
  var marker = L.marker([13.05844, 77.736069])
    .addTo(map)
    .bindPopup(
      "<h1>SemaConnect Systems India Pvt Ltd</h1> <p>Cheemasandra Rd, Virgonagar, Cheemasandra, Bengaluru, Karnataka 560049</p>"
    );
  //Bengaluru-2
  var marker = L.marker([12.92285, 77.5698])
    .addTo(map)
    .bindPopup(
      "<h1>Supreme Ridz</h1> <p>No 329 CT Bed, Banashankari 2d Stage, Thyagarajanagar, Bengaluru, Karnataka 560028</p>"
    );
  //Begaluru-3
  var marker = L.marker([12.80599, 77.62545])
    .addTo(map)
    .bindPopup(
      "<h1>Mahindra Reva Solar Charging Station</h1> <p>Koppa, Bengaluru, Karnataka 560099</p>"
    );
  //Lucknow
  var marker = L.marker([26.83747, 80.90025])
    .addTo(map)
    .bindPopup(
      "<h1>Khalsa Agencies</h1> <p>6 Mill Road,Aishbagh,Near- Union Bank Of India, Lucknow, Uttar Pradesh 226004</p>"
    );
  //New Delhi
  var marker = L.marker([28.56942, 77.2209])
    .addTo(map)
    .bindPopup(
      "<h1>EV Plugin Charging Station</h1> <p>2nd Floor, 39, Shahpur Jat, New Delhi, Delhi 110049</p>"
    );
  //Haryana-1
  var marker = L.marker([28.494976, 77.089539])
    .addTo(map)
    .bindPopup(
      "<h1>Zevpoint E-mobility</h1> <p>DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122022</p>"
    );
  //Haryana-2
  var marker = L.marker([28.68129, 76.93751])
    .addTo(map)
    .bindPopup(
      "<h1>NDPI Electric India Pvt. Ltd</h1> <p>Shop No. 1,Najafgarh Road, Near Ballore Chungi, Bahadurgarh, Haryana 124507</p>"
    );
  //Indore
  var marker = L.marker([22.75943, 75.886009])
    .addTo(map)
    .bindPopup(
      "<h1>EV-Urjaa Charging Station</h1> <p>Building 3rd Floor, EV URJAA PVT LTD C/o Prestige Vihar, Law, Sector-D, Scheme No 74C, Vijay Nagar, Indore, Madhya Pradesh 452010</p>"
    );*/

  //route
  var dir = MQ.routing.directions();

  dir.route({
    locations: [start, end],
  });

  CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: (location) => {
      var custom_icon;
      var marker;

      custom_icon = L.icon({
        iconUrl: "../IMG/red.png",
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29],
      });

      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

      return marker;
    },

    createEndMarker: (location) => {
      var custom_icon;
      var marker;

      custom_icon = L.icon({
        iconUrl: "../IMG/blue.png",
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29],
      });

      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

      return marker;
    },
  });

  map.addLayer(
    new CustomRouteLayer({
      directions: dir,
      fitBounds: true,
    })
  );
}

// function that runs when form submitted
function submitForm(event) {
  event.preventDefault();

  // delete current map layer
  map.remove();

  // getting form data
  start = document.getElementById("start").value;
  end = document.getElementById("destination").value;

  // run directions function
  runDirection(start, end);

  // reset form
  document.getElementById("form").reset();
}

// asign the form to form variable
const form = document.getElementById("form");

// call the submitForm() function when submitting the form
form.addEventListener("submit", submitForm);
