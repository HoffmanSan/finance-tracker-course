import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD2LFfG8i9-SjHq7two2QUNsII4NJJaass",
    authDomain: "mymoney-95ae7.firebaseapp.com",
    projectId: "mymoney-95ae7",
    storageBucket: "mymoney-95ae7.appspot.com",
    messagingSenderId: "1018932056814",
    appId: "1:1018932056814:web:89e816a932d07cbb8459ff"
  }

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }