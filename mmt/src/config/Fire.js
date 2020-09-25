import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: 'AIzaSyDIDEZEP4wLCkDEP1KAp6JFg7-rvCV6Nas',
    authDomain: 'makemyt-c9709.firebaseapp.com',
    databaseURL: 'https://makemyt-c9709.firebaseio.com',
    projectId: 'makemyt-c9709',
    storageBucket: 'makemyt-c9709.appspot.com',
    messagingSenderId: '523558263059',
    appId: '1:523558263059:web:fa480d3da6475dc3f062e6',
    measurementId: 'G-6XR00ERE9S'
  };

export const fire = firebase.initializeApp(firebaseConfig);
export const database = fire.database();
