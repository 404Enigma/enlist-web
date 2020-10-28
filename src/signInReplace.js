// document.onkeydown = function(e) {
//     if(event.keyCode == 123) {
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//     return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//     return false;
//     }
//     }
console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEEEE!");
var db = firebase.firestore();

// var user = firebase.auth().currentUser;

// if (user != null) {
//   email = user.email;
//   uid = user.uid;
// }

var prnn = document.getElementById("prn");
let PRNlength = prnn.value.length;
var favoritemovie;

function signInWithGoogle() {
  favoritemovie = prnn.value;
  sessionStorage.setItem("favoriteMovie", favoritemovie);

  if (prnn.value === "") {
    alert("Please enter the PRN");
  } else {
    if (prnn.value.length !== 11) {
      alert("Please enter a 11 digit PRN");
    } else {
      signIn();
    }
  }
}

function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      let flag = 0;
      console.log(user.email);

      var docRef = db.collection("Member Access/").doc(user.email);
      console.log(docRef);

      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            flag = 1;
            console.log("Document data:", doc.data());
            let pry = doc.get("PRN");
            console.log(pry);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });

      if (flag === 1) {
        window.location.assign("./home.html");
        console.log("Woahhhhhhhh!");
      } else {
        alert("Please enter you PRN");
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
