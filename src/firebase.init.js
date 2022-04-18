// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR-EE-0tI5RTxoiW4sG9t75pGmDxhL-As",
    authDomain: "health-plus-20321.firebaseapp.com",
    projectId: "health-plus-20321",
    storageBucket: "health-plus-20321.appspot.com",
    messagingSenderId: "843286638134",
    appId: "1:843286638134:web:f49fb40804fb048c8db297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;