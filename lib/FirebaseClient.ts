import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUipluS-2HQjn90wK_o6-cvJ_rSwQKH2E",
  authDomain: "collabx-us0710.firebaseapp.com",
  projectId: "collabx-us0710",
  storageBucket: "collabx-us0710.firebasestorage.app",
  messagingSenderId: "503893066184",
  appId: "1:503893066184:web:4c861792810970a09700fd",
  measurementId: "G-6V1Q82YWN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);