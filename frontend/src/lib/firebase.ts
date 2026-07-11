import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLffQa0SnH4VnFsBRulixBGdHYt0-VLog",
    authDomain: "it-support-marketplace.firebaseapp.com",
    projectId: "it-support-marketplace",
    storageBucket: "it-support-marketplace.firebasestorage.app",
    messagingSenderId: "255477170460",
    appId: "1:255477170460:web:e584d7eaf1455f7c937ad9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);