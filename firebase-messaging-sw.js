importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAvuMpqE1Ft-ctI-aaRKKa_OtLIhW-rXps",
  authDomain: "bottom-street.firebaseapp.com",
  databaseURL: "https://bottom-street-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bottom-street",
  storageBucket: "bottom-street.appspot.com",
  messagingSenderId: "834378631815",
  appId: "1:834378631815:web:9c5ad46f64cfd9cdc10622",
  measurementId: "G-Z1RDVQTKTV"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
