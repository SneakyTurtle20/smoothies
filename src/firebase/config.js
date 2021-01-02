import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVdTer_-r6ojpmM0VTXR-CHsJGrCATthw",
  authDomain: "smoothies-169be.firebaseapp.com",
  projectId: "smoothies-169be",
  storageBucket: "smoothies-169be.appspot.com",
  messagingSenderId: "853589737801",
  appId: "1:853589737801:web:e761197cebb5f9151d5a98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()