let check_class;
let storage_UIDD;
let RespectiveClass = localStorage.getItem("RespectiveClass");
let RespectiveDivision = localStorage.getItem("RespectiveDivision");
// console.log(storage_UIDD);

// var pathEls = document.querySelectorAll("path");
// for (var i = 0; i < pathEls.length; i++) {
//   var pathEl = pathEls[i];
//   var offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute("stroke-dashoffset", offset);
//   anime({
//     targets: pathEl,
//     strokeDashoffset: [offset, 0],
//     duration: anime.random(1000, 3000),
//     delay: anime.random(0, 1000),
//     loop: true,
//     direction: "alternate",
//     easing: "easeInOutSine",
//     autoplay: true,
//   });
// }

function first(storage_UIDD) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (storage_UIDD) {
      // User is signed in.

      get_PRN = firebase.database().ref("/PRN-Source/" + "/" + storage_UIDD);
      console.log(get_PRN);

      console.log(RespectiveClass);
      console.log(RespectiveDivision);
      //sessionStorage.setItem("class", RespectiveDivision);
      // firebase
      //   .database()
      //   .ref("/PRN-Source/")
      //   .once("value", function (snapshot) {
      //     snapshot.forEach(function (childSnapshot) {
      //       if (childSnapshot.exists()) {
      //         console.log("hogaya");
      //         var childKey = childSnapshot.key;
      //         var childData = childSnapshot.val();
      //         //task_array.push(Object.values(childData));
      //         console.log(childData);
      //         console.log(childKey);
      //       } else {
      //         console.log("errrrrrrrrrrrrrrrrr");
      //       }
      //     });
      //   });

      get_PRN.on(
        "value",
        function (snapshot) {
          console.log(snapshot.val());
          //console.log(ID);
          let get_PRN_value = snapshot.val();

          console.log(get_PRN_value);

          if (Number(get_PRN_value) >= 19070122073 && Number(get_PRN_value) <= 19070122145) {
            check_class = "B";
          } else if (Number(get_PRN_value) >= 19070122001 && Number(get_PRN_value) <= 19070122072) {
            check_class = "A";
          } else if (Number(get_PRN_value) >= 19070122001 && Number(get_PRN_value) <= 19070122072) {
            check_class = "C";
          } else if (Number(get_PRN_value) >= 19070122001 && Number(get_PRN_value) <= 19070122072) {
            check_class = "IT";
          }

          console.log(check_class);
          //console.log(ID);
        },
        function (error) {
          console.log("Error: " + error.code);
        }
      );
      console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
      sessionStorage.setItem("check_Bypass", "1");
      window.location.assign("../main/home.html");
    } else {
      // No user is signed in.
      console.log("bbbbbbbbbbbbb");
      window.location.assign("../Login/login.html");
    }
  });
}

// let BBB = document.getElementById("BBB");
// console.log(BBB.getAttribute("value"));

function Enter_first() {
  storage_UIDD = localStorage.getItem("finalUIDD");
  console.log(storage_UIDD);
  first(storage_UIDD);
}

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

function Review() {
  window.location.assign("../review/review.html");
}

function Demo_way() {
  window.location.assign("../demo/demo.html");
}
