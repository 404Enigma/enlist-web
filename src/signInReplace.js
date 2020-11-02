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
  PRN = prnn.value;
  localStorage.setItem("PRN", PRN);

  if (prnn.value === "") {
    alert("Please enter the PRN1");
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
      console.log(prnn.value);
      var docRef = db.collection("Member Access/");
      //console.log(docRef);

      docRef
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            console.log(doc.id);
            console.log(user.email);
            if (doc.id === user.email) {
              console.log("Document data:", doc.data());
              let pry = doc.get("PRN");
              console.log(pry);
              console.log(prnn);
              if (prnn.value == pry) {
                flag = 1;
                console.log("aaaaaaaaaaa");
                setTimeout(function () {
                  if (flag === 1) {
                    window.location.assign("./home.html");
                    console.log("Woahhhhhhhh!");
                  } else {
                    alert("Please enter you credentials");
                  }
                }, 1000);
              } else {
                alert("Please enter you PRN");
              }
            }
            console.log("done");
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
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
