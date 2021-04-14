//Register user
function RegisterUser() {
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
   alert('User Register successfully');
   var id=firebase.auth().currentUser.uid;
   firebase.database().ref('Owners/'+id).set({
    Name:name,
    Email:email,
    Password:password,
   });

    setTimeout(function(){
      window.location.replace("../HTML/Data_Provider.html");
     }, 3000);

  }).catch(function(error){
    var errorcode=error.code;
    var errormsg=error.message;
    alert(errormsg);
  });
}
    