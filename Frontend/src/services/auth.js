import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth"

import { auth } from "./firebase"

// Email Signup
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// Email Login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

// Google Login
const provider = new GoogleAuthProvider()
export const googleLogin = () => {
  return signInWithPopup(auth, provider)
}

// Logout
export const logout = () => {
  return signOut(auth)
}
