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
              checkValue = 1;
              localStorage.setItem("PRN", PRN);
              sessionStorage.setItem("checkValue", checkValue);
              prnnn = PRN;
              oneTime();
              update_Allllll();
              popup("Sign-in successful !", 2000, "alert alert-success");
              setTimeout(function () {
                //window.location.assign("./home.html");
              }, 3000);

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

let TaskcheckValue = sessionStorage.getItem("checkValue");

function oneTime() {
  flagTime = 1;
  firebase.auth().onAuthStateChanged(function (user) {
    console.log("12345");
    if (user !== null) {
      demo = user.uid;
      console.log(user.uid);
      console.log(TaskcheckValue);
      if (TaskcheckValue == 1) {
        console.log(TaskcheckValue);
        if (Number(prnnn) == 19070122120 || Number(prnnn) == 19070122126 || Number(prnnn) == 19070122129 || Number(prnnn) == 19070122134) {
          let arr = ["B", "B1", "B2", "B3", "A", "A1", "A2", "A3", "C", "C1", "C2", "C3", "IT", "T1", "T2", "T3"];
          for (let i = 0; i < arr.length; i++) {
            xyz = arr[i];
            //console.log(xyz);
            var updates1 = {};
            updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
            firebase.database().ref().update(updates1);
          }
        } else if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122095) {
          xyz = "B1";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
          //create_unfinished_task();
        } else if (Number(prnnn) >= 19070122096 && Number(prnnn) <= 19070122119) {
          xyz = "B2";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
          //create_unfinished_task();
        } else if (Number(prnnn) >= 19070122120 && Number(prnnn) <= 19070122145) {
          xyz = "B3";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
          //create_unfinished_task();
        } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122025) {
          xyz = "A1";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
          //create_unfinished_task();
        } else if (Number(prnnn) >= 19070122026 && Number(prnnn) <= 19070122048) {
          xyz = "A2";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
          //create_unfinished_task();
        } else if (Number(prnnn) >= 19070122049 && Number(prnnn) <= 19070122072) {
          xyz = "A3";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
          //create_unfinished_task();
        } else if (Number(prnnn) >= 19070122146 && Number(prnnn) <= 19070122167) {
          xyz = "C1";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070122168 && Number(prnnn) <= 19070122190) {
          xyz = "C2";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070122191 && Number(prnnn) <= 20070122515) {
          xyz = "C3";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070124001 && Number(prnnn) <= 19070124028) {
          xyz = "T1";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070124029 && Number(prnnn) <= 19070124055) {
          xyz = "T2";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070124056 && Number(prnnn) <= 20070124502) {
          xyz = "T3";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        }

        if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122145) {
          xyz = "B";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122072) {
          xyz = "A";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122072) {
          xyz = "C";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122072) {
          xyz = "IT";

          var updates1 = {};
          updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
          firebase.database().ref().update(updates1);
        }
      } else {
        console.log(TaskcheckValue);
        console.log("I am hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!1");
      }
    } else {
      // alert("Please login");
      popup_alltasks2("Please login !", 4000, "alert alert-warning");
      setTimeout(function () {
        window.location.assign("login.html");
      }, 2000);
    }
  });
}

let xyz;

function update_Allllll() {
  let updateArr = ["B", "B1", "B2", "B3", "A", "A1", "A2", "A3", "C", "C1", "C2", "C3", "IT", "T1", "T2", "T3"];
  let tempArr = ["B", "B3", "A1"];
  for (let i = 0; i < tempArr.length; i++) {
    xyz = tempArr[i];
    console.log(xyz);
    firebase
      .database()
      .ref("All-Tasks" + "/" + xyz)
      .once(
        "value",
        function (snapshot) {
          //console.log(snapshot.val());
          console.log(demo);
          firebase
            .database()
            .ref("/To-Do-List/" + demo + "/" + xyz)
            .set(snapshot.val());
          console.log(snapshot.val());
        },
        function (errorObject) {}
      );
    //popup_alltasks("Task has been Updated !", 2000, "alert alert-info");
  }
  //create_unfinished_task();
}
