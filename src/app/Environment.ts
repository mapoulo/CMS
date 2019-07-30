export const firebaseConfig = {
  apiKey: "AIzaSyC9-2_NtJOaVeNJn-ChnGrhMhLfXkzfFXI",
  authDomain: "myapp-e3408.firebaseapp.com",
  databaseURL: "https://myapp-e3408.firebaseio.com",
  projectId: "myapp-e3408",
  storageBucket: "gs://myapp-e3408.appspot.com/",
  messagingSenderId: "589136956850",
  appId: "1:589136956850:web:9d1ed28b3b51b001"
  };

  export const transpoter= snapshot=>{
    let arrayOfRooms = [];
    snapshot.forEach(element => {
          let item  = element.val();
          item.key = element.key;
          arrayOfRooms.push(item);
    }); 
    return arrayOfRooms;
  } 
  
  