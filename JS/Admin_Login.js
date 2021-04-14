//login user
function LoginUser() {
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
    alert('User login successfully');
    setTimeout(function(){
      window.location.replace("../HTML/Data_Provider.html");
    }, 3000);

  }).catch(function(error){
    var errorcode=error.code;
    var errormsg=error.message;
    alert(errormsg);

   });
}