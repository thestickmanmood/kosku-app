
import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

// Fungsi pendaftaran pemilik kos
export async function daftarPemilik(email, password) {
  try {
    const hasil = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return hasil.user;
  } catch (error) {
    throw error;
  }
}

// Fungsi login
export async function loginPemilik(email, password) {
  try {
    const hasil = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return hasil.user;
  } catch (error) {
    throw error;
  }
}

// Fungsi logout
export async function logoutPemilik() {
  await signOut(auth);
}

// Memantau status login
export function pantauLogin(callback) {
  return onAuthStateChanged(auth, callback);
}
