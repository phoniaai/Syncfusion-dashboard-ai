import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjBB968jXaDXLLjrrI_1bQ-YI6EXDSvcY",
  authDomain: "syncfusion-dashboard-ai.firebaseapp.com",
  projectId: "syncfusion-dashboard-ai",
  storageBucket: "syncfusion-dashboard-ai.appspot.com",
  messagingSenderId: "560774285034",
  appId: "1:560774285034:web:4314b441bd1e990c8c3993",
  measurementId: "G-NNWBZ7NDSH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);