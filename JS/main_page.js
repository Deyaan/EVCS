var id = 0;
var msg = document.getElementById('message');
var status=false;
function addItemsToList(name,city,address,email,number,machine,data,restro,play,toilet,store,tyre){
    var ul = document.getElementById('list');
    var header = document.createElement('h2');

    var _name = document.createElement('li');
    var _address = document.createElement('li');
    var _email=document.createElement('li');
    var _city=document.createElement('li');
    var _number = document.createElement('li');
    var _machine = document.createElement('li');
    var _data=document.createElement('li');
    var _restro = document.createElement('li');
    var _play = document.createElement('li');
    var _toilet=document.createElement('li');
    var _store = document.createElement('li');
    var _tyre=document.createElement('li');

    header.innerHTML = '' + (name);
   // header.setAttribute("style","border: red");

    //_name.innerHTML='Name: '+name;
    _address.innerHTML='Address: '+address; 
    _city.innerHTML='Name of the City: '+city;
    _email.innerHTML='Email: '+email; 
    _number.innerHTML='Contact Number : '+number;
    _machine.innerHTML='Number of Machines: '+machine;
    _data.innerHTML='Number Of Cars: '+data;
    _restro.innerHTML='Is there Restaurants nearby 🍔 🍕: '+restro;
    _play.innerHTML='Is there Play-Area nearby ⚽ ⛳: '+play;
    _toilet.innerHTML='Is there Toilet/Restrooms nearby 🚻 : '+toilet;
    _store.innerHTML='General Store 🏬 : '+store;
    _tyre.innerHTML='Tyre Air checking facility 🚗 : '+tyre;
    ul.appendChild(header);
    ul.appendChild(_name);
    ul.appendChild(_address);
    ul.appendChild(_city);
    ul.appendChild(_email);
    ul.appendChild(_number);
    ul.appendChild(_machine);
    ul.appendChild(_data);
    ul.appendChild(_restro);
    ul.appendChild(_play);
    ul.appendChild(_toilet);
    ul.appendChild(_store);
    ul.appendChild(_tyre);
}

function FetchAllData(){
    firebase.database().ref('Admin').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                msg.style.display = "none";
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let city = ChildSnapshot.val().City;
                let address = ChildSnapshot.val().Address;
                let number = ChildSnapshot.val().Number;
                let machine = ChildSnapshot.val().Machine;
                let data = ChildSnapshot.val().Data;
                let restro = ChildSnapshot.val().Restaurants;
                let play = ChildSnapshot.val().Play_Area;
                let toilet = ChildSnapshot.val().Toilet;
                let store = ChildSnapshot.val().General_Store;
                let tyre = ChildSnapshot.val().Tyre_Facility;
                addItemsToList(name,city,address,email,number,machine,data,restro,play,toilet,store,tyre);
            }
        )
    });
}

//search
var searchString='';
function filter(){
firebase
  .database()
  .ref()
  .child("/Admin/")
  .on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
       let place = childSnapshot.val().City.toLowerCase();
       //alert("//"+city);
        var found = place.search(searchString.toLowerCase());
      if(found!=-1){
        //alert("**"+place);
        status = true;
        msg.style.display = "none";
        let name = childSnapshot.val().Name;
        let email = childSnapshot.val().Email;
        let city = childSnapshot.val().City;
        let address = childSnapshot.val().Address;
        let number = childSnapshot.val().Number;
        let machine = childSnapshot.val().Machine;
        let data = childSnapshot.val().Data;
        let restro = childSnapshot.val().Restaurants;
        let play = childSnapshot.val().Play_Area;
        let toilet = childSnapshot.val().Toilet;
        let store = childSnapshot.val().General_Store;
        let tyre = childSnapshot.val().Tyre_Facility;
        //alert("name:"+name);
        addItemsToList(name,city,address,email,number,machine,data,restro,play,toilet,store,tyre);
      }
    });
    //alert("alert1"+status);
   
  });
}
function main(){
const queryString = window.location.href;
var url = new URL(queryString);
if(url.searchParams.has("query")){   
    searchString = url.searchParams.get("query");
    //alert(searchString);
    filter();
}else{
  FetchAllData();
  document.getElementsById('body').style.background = "red";
 }
}