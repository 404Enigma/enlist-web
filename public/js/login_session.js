const firebaseConfig = {
  apiKey: "AIzaSyBenfo9DOb6YmHGryzhR5ALD9pjTRX5GiQ",
  authDomain: "enlist-v2.firebaseapp.com",
  projectId: "enlist-v2",
  storageBucket: "enlist-v2.appspot.com",
  messagingSenderId: "268052686241",
  appId: "1:268052686241:web:9a3051de1342de52cb17e0",
  measurementId: "G-TVHM380FWR",
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

// // FirebaseUI config.
// var uiConfig = {
//   signInOptions: [
//     // google sign in option
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],

//   // Terms of service url/callback.
//   tosUrl: "<your-tos-url>",
//   // Privacy policy url/callback.
//   privacyPolicyUrl: function () {
//     window.location.assign("<your-privacy-policy-url>");
//   },

//   callbacks: {
//     signInSuccess: function (user, credential, redirectUrl) {
//       // User successfully signed in.
//       console.log(user);
//       user
//         .getIdToken()
//         .then(function (idToken) {
//           // document.cookie = "__session=idToken"
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
// };
// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// // The start method will wait until the DOM is loaded.
// ui.start("#firebaseui-auth-container", uiConfig);

const checkCredentials = async (credential) => {
  try {
    const response = await axios.post(`/checkUID`, credential);

    const final_response = await response.data;

    console.log(`final response: `, final_response);

    return final_response;
  } catch (errors) {
    console.error(errors);
  }
};

const signInWithGoogle = (data) => {
  console.log(data);
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (result) => {
      // /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      data.email = user.email;
      data.user_id = user.user_id;
      data.name = user.name;
      data.picture = user.picture;
      console.log(data);
      const isReady = await checkCredentials(data);

      if (isReady === "matched") {
        console.log(isReady);
        //condition for email_check (user.email===email from database)
        //send req to server to check for email verification
        user
          .getIdToken()
          .then(function (idToken) {
            window.location.href = "/savecookie?idToken=" + idToken;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert(isReady);

        //window.location.reload();
      }

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

const loginForm = document.getElementById("loginForm");

loginForm.onsubmit = async (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  signInWithGoogle(data);
};
