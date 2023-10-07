// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYNh0EnDDTJSMmCp1a7BQT5IDJGD80YHU",
    authDomain: "wedding-related-projeact.firebaseapp.com",
    projectId: "wedding-related-projeact",
    storageBucket: "wedding-related-projeact.appspot.com",
    messagingSenderId: "216248493221",
    appId: "1:216248493221:web:85dc99d24d31ff7808d94c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;