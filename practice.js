
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBQs4X9gKBkaYSRXBkLvvdM_lb-De0Rw9Q",
    authDomain: "kwitter-4c596.firebaseapp.com",
    databaseURL: "https://kwitter-4c596-default-rtdb.firebaseio.com",
    projectId: "kwitter-4c596",
    storageBucket: "kwitter-4c596.appspot.com",
    messagingSenderId: "1032344976981",
    appId: "1:1032344976981:web:99c9955750de7592595edc"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    }
       
    );
}