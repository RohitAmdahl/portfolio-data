import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_Qld0AQPnIP-mlgV6tCTCQbgsx0guQRs",
  authDomain: "rohitprofile-34f42.firebaseapp.com",
  projectId: "rohitprofile-34f42",
  storageBucket: "rohitprofile-34f42.appspot.com",
  messagingSenderId: "897696917327",
  appId: "1:897696917327:web:90aab2e087697f59e1473a",
  measurementId: "G-WGK0KTFPG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
