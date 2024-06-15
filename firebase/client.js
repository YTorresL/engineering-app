import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

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
  if (user) {
    const { displayName, photoURL, email, uid } = user
    return { avatar: photoURL, username: displayName, email, uid }
  } else {
    console.log("no user")
  }
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

const db = firebase.firestore()

export function addPost({
  avatar,
  title,
  content,
  userId,
  username,
  img,
  description,
  categories,
}) {
  return db.collection("posts").add({
    avatar,
    title,
    description,
    content,
    categories,
    userId,
    username,
    likesCount: 0,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    img,
  })
}

export function fetchLatestPosts() {
  return db
    .collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        return { ...data, id, createdAt: +createdAt.toDate() }
      })
    })
}

export function uploadImage(file) {
  const ref = firebase.storage().ref(`/images/${file.name}`)
  const task = ref.put(file)
  return task
}

export function fetchCategories() {
  return db
    .collection("categories")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        return { ...data, id }
      })
    })
}

export async function fetchReferenceCategory(categories) {
  const { id } = categories
  const categoryRef = db.collection("categories").doc(id)
  const doc = await categoryRef.get()
  const data = doc.data()
  return { ...data }
}
