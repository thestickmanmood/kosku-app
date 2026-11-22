
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBK32Jj6kf-_mqFxC3_sW5QZejYvxH0PyY",
  authDomain: "kosku-zona-prodig.firebaseapp.com",
  projectId: "kosku-zona-prodig",
  storageBucket: "kosku-zona-prodig.firebasestorage.app",
  messagingSenderId: "168436730896",
  appId: "1:168436730896:web:ad037f7b2110a480c48e95"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
