importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyByUml3oGNflzcD7GYgidzqsoPrFstTgNw",
  authDomain: "rock-you-f12d5.firebaseapp.com",
  databaseURL: "https://rock-you-f12d5.firebaseio.com",
  projectId: "rock-you-f12d5",
  storageBucket: "rock-you-f12d5.appspot.com",
  messagingSenderId: "766738254879",
  appId: "1:766738254879:web:e3f2d32162e9ec94ca992a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
