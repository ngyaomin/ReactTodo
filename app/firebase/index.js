import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBgWHTKLoo5UH_g56qznfDX1C7mw8Vf8F8",
    authDomain: "ng-yao-min-todo-app.firebaseapp.com",
    databaseURL: "https://ng-yao-min-todo-app.firebaseio.com",
    projectId: "ng-yao-min-todo-app",
    storageBucket: "ng-yao-min-todo-app.appspot.com",
    messagingSenderId: "100377679951"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
