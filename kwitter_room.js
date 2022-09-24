
var firebaseConfig = {
      apiKey: "AIzaSyAM62Y9iuPvi2DoGO1Js-psPHTs_iX_z0c",
      authDomain: "kwitter2-4126a.firebaseapp.com",
      databaseURL: "https://kwitter2-4126a-default-rtdb.firebaseio.com",
      projectId: "kwitter2-4126a",
      storageBucket: "kwitter2-4126a.appspot.com",
      messagingSenderId: "357938305104",
      appId: "1:357938305104:web:9e1ec8f169be3c68f51955"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name"); 
    document.getElementById("Username").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding rooms"
      });
      localStorage.setItem("room_name ", room_name);
      window.location="kwitter_page.html";
    }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      console.log("room name "+Room_names);
      row="<div class='room name ' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function login_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}