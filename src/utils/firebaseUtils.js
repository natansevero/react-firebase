import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCNoEJiXZQXJB-v6o745JnLI8-t6EmE29Q",
    authDomain: "weatherapp-1c69c.firebaseapp.com",
    databaseURL: "https://weatherapp-1c69c.firebaseio.com",
    projectId: "weatherapp-1c69c",
    storageBucket: "weatherapp-1c69c.appspot.com",
    messagingSenderId: "1022113696624"
};

export const firebaseImpl = firebase.initializeApp(config)
export const firebaseDatabase = firebase.database()