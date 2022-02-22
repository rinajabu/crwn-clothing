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

// storing data in firestore db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // (queryReference) query object, represents current place/path in db we are querying
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef);

    // (documentReference) actually making the query to firestore
    const snapShot = await userRef.get();
    // console.log(snapShot.data());

    // checking using the userRef and snapShot.exists to see if the userAuth.uid already exists in the db
    // if the user logging in doesn't exist in firestore db, create new user (makes sure no duplicates are created)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

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