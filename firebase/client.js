import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAyW6zak79bN60RM4aNJdvWIUeknHk59vw",
  authDomain: "engineering-app-3b28f.firebaseapp.com",
  projectId: "engineering-app-3b28f",
  storageBucket: "engineering-app-3b28f.appspot.com",
  messagingSenderId: "931513374421",
  appId: "1:931513374421:web:f87902ee28abb37eb8b45c",
  measurementId: "G-TDP7KEBLNS",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, email } = user
  return { avatar: photoURL, username: displayName, email }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    const normalizedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser)
  })
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}
