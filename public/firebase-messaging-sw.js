importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyBipop2yfoXdoMyf73SpzBLhkTpGFkVBSA",
    authDomain: "notificationapp-4ae74.firebaseapp.com",
    databaseURL: "https://notificationapp-4ae74.firebaseio.com",
    projectId: "notificationapp-4ae74",
    storageBucket: "notificationapp-4ae74.appspot.com",
    messagingSenderId: "296391043043",
    appId: "1:296391043043:web:cd35414fe9826f9f9f62d6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();