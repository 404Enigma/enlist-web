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

function first() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("aaaaaaa");
      let UIDD = user.uid;
      console.log(UIDD);
      let prnValue = localStorage.getItem("bypassPRN");
      console.log(prnValue);
      localStorage.setItem("uniqueUid", UIDD);
      window.location.assign("./home.html");
    } else {
      // No user is signed in.
      console.log("bbbbbbbbbbbbb");
      window.location.assign("./login.html");
    }
  });
}

// let BBB = document.getElementById("BBB");
// console.log(BBB.getAttribute("value"));

function CS_A() {
  sessionStorage.setItem("class", "CS-A");
  window.location.assign("./login.html");
}

function CS_B() {
  sessionStorage.setItem("class", "CS-B");
  window.location.assign("./login.html");
}

function CS_C() {
  sessionStorage.setItem("class", "CS-C");
  window.location.assign("./login.html");
}

function IT() {
  sessionStorage.setItem("class", "IT");
  window.location.assign("./login.html");
}
