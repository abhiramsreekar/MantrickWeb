import axios from "axios";

const apiClient = axios.create({
  apiKey: "AIzaSyCaH1fCiPqXRsnfl0KKIKiB06XvLOP4RyM",
  authDomain: "mantrick-studios-fdb0f.firebaseapp.com",
  databaseURL: "https://mantrick-studios-fdb0f-default-rtdb.firebaseio.com",
  projectId: "mantrick-studios-fdb0f",
  storageBucket: "mantrick-studios-fdb0f.appspot.com",
  messagingSenderId: "937571371999",
  appId: "1:937571371999:web:30de2e4f397eb043b4526a",
  measurementId: "G-59VMVTGTGE"
});

export default apiClient;
