import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBatWpI-3bt7XHmQkZ8U-Qess6mLr3tW64",
    authDomain: "healthcare-management-sy-b1fcb.firebaseapp.com",
    projectId: "healthcare-management-sy-b1fcb",
    storageBucket: "healthcare-management-sy-b1fcb.appspot.com",
    messagingSenderId: "639169370176",
    appId: "1:639169370176:web:37705c193d2b8f8c7727a5",
    measurementId: "G-XKDJDGG7DB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    return null;
  }
};
