// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDs5ConzFDM2yGvweN-sZdAPFAlowyCDhE",
//   authDomain: "reactmoviepp.firebaseapp.com",
//   projectId: "reactmoviepp",
//   storageBucket: "reactmoviepp.appspot.com",
//   messagingSenderId: "719848561957",
//   appId: "1:719848561957:web:254facecfb591921474ecc",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDE6MkB19bmR5HRdkwatMwqXx9DN6Z9LeE",
  authDomain: "phone-otp-auth-ae0eb.firebaseapp.com",
  databaseURL: "https://phone-otp-auth-ae0eb-default-rtdb.firebaseio.com",
  projectId: "phone-otp-auth-ae0eb",
  storageBucket: "phone-otp-auth-ae0eb.appspot.com",
  messagingSenderId: "380532456376",
  appId: "1:380532456376:web:c45645df7385b546856d4d",
  measurementId: "G-4Z3ZTB44DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);