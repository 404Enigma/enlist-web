function first() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("aaaaaaa");
      window.location.assign("./home.html");
    } else {
      // No user is signed in.
      console.log("bbbbbbbbbbbbb");
      window.location.assign("./main.html");
    }
  });
}
