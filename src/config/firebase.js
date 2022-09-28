
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBY3V5zpopFzJ_5eH-D1ENwgdC9PsOetNc",
    authDomain: "fblogin-d8313.firebaseapp.com",
    projectId: "fblogin-d8313",
    storageBucket: "fblogin-d8313.appspot.com",
    messagingSenderId: "51826950657",
    appId: "1:51826950657:web:685d6bcc64d5a66b3bb600",
    measurementId: "G-NYC1NK6R24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


async function register(form) {

    let { email, password } = form
    await createUserWithEmailAndPassword(auth, email, password)

}

async function login(email, password) {

    await signInWithEmailAndPassword(auth, email, password)

}
export {
    register,
    login
}