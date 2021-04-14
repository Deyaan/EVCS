//login user
function LoginUser() {
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
    alert('User login successfully');
    window.location.href='../HTML/Map.html';

  }).catch(function(error){
    var errorcode=error.code;
    var errormsg=error.message;
    alert(errormsg);

   });
}
