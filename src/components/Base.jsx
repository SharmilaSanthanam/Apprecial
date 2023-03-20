import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBs0-994tF5RJO1qT8Qs4Br6YSJZXpiYRs",
    authDomain: "apprecial-be044.firebaseapp.com",
    projectId: "apprecial-be044",
    storageBucket: "apprecial-be044.appspot.com",
    messagingSenderId: "1015323762692",
    appId: "1:1015323762692:web:e39f5de18020f0724a5551",
    measurementId: "G-8XBXF2TK1E"
};

export const auth = getAuth();
// export const db = getDatabase(app);
const app = initializeApp(firebaseConfig);
export default app;