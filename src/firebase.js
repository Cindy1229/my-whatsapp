import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAU2xwq3p-fZ6HFMEHmGZkF2_DvW-msZMA",
  authDomain: "whatsapp-8584f.firebaseapp.com",
  databaseURL: "https://whatsapp-8584f.firebaseio.com",
  projectId: "whatsapp-8584f",
  storageBucket: "whatsapp-8584f.appspot.com",
  messagingSenderId: "465966258985",
  appId: "1:465966258985:web:89cebbf6c94a480d2e3538",
  measurementId: "G-PKP35482LB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
