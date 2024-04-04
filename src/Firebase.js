// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNlloRJ4Cm_Qf9Wi2Hqor2uznYikN-apc",
  authDomain: "vps-cst.firebaseapp.com",
  projectId: "vps-cst",
  storageBucket: "vps-cst.appspot.com",
  messagingSenderId: "119416080675",
  appId: "1:119416080675:web:afcc56f7366ba11c426496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app , db};
