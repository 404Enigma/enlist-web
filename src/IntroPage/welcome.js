let checkValue;

var pathEls = document.querySelectorAll("path");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 1000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}

function first(ID) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("aaaaaaa");
      let UIDD = user.uid;
      console.log(UIDD);
      let prnValue = localStorage.getItem("bypassPRN");
      console.log(prnValue);

      localStorage.setItem("uniqueUid", UIDD);
      get_PRN = firebase.database().ref("/PRN-source/" + "/" + UIDD);
      console.log(get_PRN);

      get_PRN.on(
        "value",
        function (snapshot) {
          console.log(snapshot.val());
          console.log(ID);
          let get_PRN_value = snapshot.val();

          if (get_PRN_value === ID) {
            console.log("qqqqqqqqqqqqqqqqqqqqqq");
            window.location.assign("../main/home.html");
          } else {
            window.location.assign("../Login/login.html");
          }
        },
        function (error) {
          console.log("Error: " + error.code);
        }
      );
    } else {
      // No user is signed in.
      console.log("bbbbbbbbbbbbb");
      window.location.assign("../Login/login.html");
    }
  });
}

// let BBB = document.getElementById("BBB");
// console.log(BBB.getAttribute("value"));

function CS_A(ID) {
  sessionStorage.setItem("class", "CS-A");
  console.log({ ID });
  first(ID);
}

function CS_B(ID) {
  sessionStorage.setItem("class", "CS-B");
  console.log({ ID });

  first(ID);
}

function CS_C(ID) {
  sessionStorage.setItem("class", "CS-C");
  console.log({ ID });

  first(ID);
}

function IT(ID) {
  sessionStorage.setItem("class", "IT");
  console.log({ ID });

  first(ID);
}
