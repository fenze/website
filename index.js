import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAp6YZgLiO_dvuJUXxzVaXcIU2DPii_Hc",
  authDomain: "fenze-1fbb5.firebaseapp.com",
  projectId: "fenze-1fbb5",
  storageBucket: "fenze-1fbb5.appspot.com",
  messagingSenderId: "591403113300",
  appId: "1:591403113300:web:8b4ae733f28397fd75c6c1",
  measurementId: "G-C9VZL31MVV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
