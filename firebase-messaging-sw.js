// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCgXIITSqCaVmNzQBdYq-REoKi-4pTP4DM",
  authDomain: "vidwath-app-notification.firebaseapp.com",
  databaseURL: "https://vidwath-app-notification.firebaseio.com",
  projectId: "vidwath-app-notification",
  storageBucket: "vidwath-app-notification.appspot.com",
  messagingSenderId: "49340646797",
  appId: "1:49340646797:web:ecda31545b50a0201669c4",
  measurementId: "G-DNW62VWVB2"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});