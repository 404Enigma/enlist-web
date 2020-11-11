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

var prnn = document.getElementById("prn");
let PRNlength = prnn.value.length;
var PRN;

function signInWithGoogle() {
  if (prnn.value === "") {
    popup("Please enter the PRN !", 4000, "alert alert-info");
  } else {
    if (prnn.value.length !== 11) {
      popup("Please enter a 11 digit PRN !", 4000, "alert alert-info");
    } else {
      signIn();
    }
  }
}

// let BBB = document.getElementById("BBB");
// console.log(BBB.getAttribute("value"));
let whichClass = sessionStorage.getItem("class");
console.log(whichClass);

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
      var docRef = db.collection(whichClass + "/");

      docRef
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            console.log(doc.id);
            console.log(user.email);
            let pry = doc.get("PRN");
            console.log(pry);
            console.log(prnn);

            if (doc.id === user.email) {
              console.log("Document data:", doc.data());

              if (prnn.value === pry && doc.id === user.email) {
                flag = 1;
                console.log("aaaaaaaaaaa");
              } else {
                // popup("Please enter your PRN !", 1000, "alert alert-danger");
              }
            }
          });

          setTimeout(function () {
            if (flag === 1) {
              PRN = prnn.value;
              localStorage.setItem("PRN", PRN);
              popup("Sign-in successful !", 2000, "alert alert-success");
              window.location.assign("./home.html");
              console.log("Woahhhhhhhh!");
            } else {
              popup("Please enter your credentials !", 1000, "alert alert-info");
            }
          }, 1000);
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

function popup(sent, time, color) {
  console.log("Popup finction");
  let pass = document.getElementById("container");
  let A = document.createElement("div");
  console.log(color);
  A.setAttribute("class", color);
  A.setAttribute("role", "alert");
  A.setAttribute("id", "popup");
  A.innerHTML = sent;
  pass.append(A);
  console.log(A.value);
  console.log(pass.value);
  console.log("Execute");
  setTimeout(function () {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, time);
}

function sessionSignOut() {
  console.log("I got it");
  firebase.auth().signOut();
}
