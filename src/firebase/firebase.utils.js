import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZB-0K_SeVAsPS-CGYR_0wqyWmWWAcUvg",
    authDomain: "rina-clothing-ecommerce.firebaseapp.com",
    projectId: "rina-clothing-ecommerce",
    storageBucket: "rina-clothing-ecommerce.appspot.com",
    messagingSenderId: "918268834175",
    appId: "1:918268834175:web:10e516f61fd1e143af2a4a",
    measurementId: "G-RKN4Q6LWR3"
};

// initializing firebase with the config above
firebase.initializeApp(firebaseConfig);

// accessing auth and firestore db
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up Google Auth with firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// exporting the whole firebase library to be accesible
export default firebase;