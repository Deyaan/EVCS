const fname = document.getElementById("name");
const email = document.getElementById("email");
const data = document.getElementById("data");
const id = document.getElementById("id");
const machine = document.getElementById("machine");
const number = document.getElementById("number");
const city = document.getElementById("city");
const address = document.getElementById("address");
const lat = document.getElementById("datalat");
const lng = document.getElementById("datalng");

var toilet = false;
var restro = false;
var play_area = false;
var tyre = false;
var store = false;

const submitbtn = document.getElementById("submitbtn");
const editbtn = document.getElementById("editbtn");

var database;


var identity;
//getting uid
firebase.auth().onAuthStateChanged(() => {
  identity=firebase.auth().currentUser.uid;
  //console.log(identity);
  });

//restro function
function validate1() {
  if (document.getElementById("Restro").checked) {
    //console.log("restro checked");
    restro = "Yes";
  } else {
    //console.log("Restro unchecked");
    restro = "No";
  }
  //console.log(restro);
}

//play_area function
function validate2() {
  if (document.getElementById("Play_Area").checked) {
    //console.log("play checked");
    play_area = "Yes";
  } else {
    console.log("play_area unchecked");
    play_area = "No";
  }
  //console.log(play_area);
}

//toilet function
function validate3() {
  if (document.getElementById("Toilet").checked) {
    //console.log("toilet checked");
    toilet = "Yes";
  } else {
    //console.log("toilet unchecked");
    toilet = "No";
  }
  //console.log(toilet);
}

//store function
function validate4() {
  if (document.getElementById("Store").checked) {
    //console.log("store checked");
    store = "Yes";
  } else {
    //console.log("store unchecked");
    store = "No";
  }
  //console.log(store);
}

//tyre function
function validate5() {
  if (document.getElementById("Tyre").checked) {
    //console.log("tyre checked");
    tyre = "Yes";
  } else {
    //console.log("tyre unchecked");
    tyre = "No";
  }
  //console.log(tyre);
}

//Submit data
submitbtn.addEventListener("click", (e) => {
  database = firebase.database();
  e.preventDefault();

  validate1();
  validate2();
  validate3();
  validate4();
  validate5();

  if (id.value === "") {
    alert("Enter your Id");
  } else {
    alert("submitted!");
    database.ref("/Admin/" + id.value).set({
      Name: fname.value,
      City: city.value,
      Address: address.value,
      Email: email.value,
      Number: number.value,
      Data: data.value,
      Machine: machine.value,
      Latitude: lat.innerHTML,
      Longitude: lng.innerHTML,
      Restaurants: restro,
      Toilet: toilet,
      Play_Area: play_area,
      General_Store: store,
      Tyre_Facility: tyre,
      Id: identity,
    });
  }
  //console.log(lat.innerHTML);
 // console.log(lng.innerHTML);
});


//Update Data
editbtn.addEventListener("click", (e) => {
  database = firebase.database();
  const rootRef = database.ref("Admin");
  e.preventDefault();

  validate1();
  validate2();
  validate3();
  validate4();
  validate5();

  if (id.value === "") {
    alert("Enter your Id");
  } else {
    alert("updated!!!");
    const newData = {
      Name: fname.value,
      City: city.value,
      Address: address.value,
      Email: email.value,
      Number: number.value,
      Data: data.value,
      Machine: machine.value,
      Latitude: lat.innerHTML,
      Longitude: lng.innerHTML,
      Restaurants: restro,
      Toilet: toilet,
      Play_Area: play_area,
      General_Store: store,
      Tyre_Facility: tyre,
      Id: identity,
    };
    rootRef.child(id.value).update(newData);
  }
});