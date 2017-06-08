import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBgWHTKLoo5UH_g56qznfDX1C7mw8Vf8F8",
  authDomain: "ng-yao-min-todo-app.firebaseapp.com",
  databaseURL: "https://ng-yao-min-todo-app.firebaseio.com",
  projectId: "ng-yao-min-todo-app",
  storageBucket: "ng-yao-min-todo-app.appspot.com",
  messagingSenderId: "100377679951"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Yao Min',
    age: 32
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
//
// var newNoteRef = notesRef.push({
//   text: 'Attend Dharma talks'
// });
//
// console.log('todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo has been added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'todo 1'
});

todosRef.push({
  text: 'todo 2 '
});
