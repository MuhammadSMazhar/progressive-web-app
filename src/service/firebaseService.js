import firebase from 'firebase';

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
 const messaging = firebase.messaging();

export function initNotication(){
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted'){
            messaging.getToken().then((currentToken) => 
            {
                if (currentToken) {
                    console.log('token')
                    console.log(currentToken)
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                
              });
        }
    })
}