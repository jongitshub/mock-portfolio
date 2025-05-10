// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZZh1SV1fDVIQzz86xAhIFCql_0d3VXPE",
  authDomain: "mock-portfolio-af20d.firebaseapp.com",
  projectId: "mock-portfolio-af20d",
  storageBucket: "mock-portfolio-af20d.appspot.com", // fixed typo here
  messagingSenderId: "981540780704",
  appId: "1:981540780704:web:9e7b7e6791ed621b6667c5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
