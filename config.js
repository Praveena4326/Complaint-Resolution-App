import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyBfVUsDRrMUBkRWZbOBlHtm7VaMGUCVo3c",
  authDomain: "complaint-forum-ec6e8.firebaseapp.com",
  projectId: "complaint-forum-ec6e8",
  storageBucket: "complaint-forum-ec6e8.appspot.com",
  messagingSenderId: "257162974020",
  appId: "1:257162974020:web:471052738b9413990d3d11"

}
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

