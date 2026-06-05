// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyADCxKRixHtJsRhmsNkS3eJ5FL6Cay5X-M",
  authDomain: "arshprintofficial.firebaseapp.com",
  databaseURL: "https://arshprintofficial-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arshprintofficial",
  storageBucket: "arshprintofficial.firebasestorage.app",
  messagingSenderId: "989933965159",
  appId: "1:989933965159:web:062c1dd1728b985b95a9c2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

window.exportCustomers = async function(){

    alert("Export Function Running");

}