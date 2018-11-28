import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCYzIHA-OXAyWG-_wDBPQvJS4xShiX9KyM",
    authDomain: "starreactaplasme.firebaseapp.com",
    databaseURL: "https://starreactaplasme.firebaseio.com",
    projectId: "starreactaplasme",
    storageBucket: "starreactaplasme.appspot.com",
    messagingSenderId: "632359535348"

});

export default app;