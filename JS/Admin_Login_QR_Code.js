//getting uid
var id;
firebase.auth().onAuthStateChanged((Admin) => {
id=firebase.auth().currentUser.uid;
//console.log(id);
});

//getting id
firebase
  .database()
  .ref()
  .child("/Admin/")
  .on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      //console.log(key);
      var tempObj = childSnapshot.val()
      var identity = tempObj.Id;
      //console.log("iden: "+identity);
      if(id===identity){
        var result=key;
        //alert("result: "+ result);
        //opening qr code for check in
        var inlink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://deyaan.github.io/Check-In-QR/check_in_index.html?ev=" + result;
        //console.log(inlink);
        document.getElementById("in").href = inlink;

        //opening qr code for check out
        var outlink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://deyaan.github.io/Check-Out-QR/?ev=" + result;
        //console.log(outlink);
        document.getElementById("out").href = outlink;
      }
    });
  });