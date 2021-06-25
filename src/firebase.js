import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-xwJe109FDqICiVVBBi2AGd63NdmEgjQ",
    authDomain: "shikilia-e-commerce.firebaseapp.com",
    projectId: "shikilia-e-commerce",
    storageBucket: "shikilia-e-commerce.appspot.com",
    messagingSenderId: "792280871913",
    appId: "1:792280871913:web:672d8a3fbc96edfbf95178",
    measurementId: "G-RLTN8KEDSM"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/** To sign up using google
* Link for developer documentation (https://firebase.google.com/docs/auth/web/google-signin)
*/
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account",
    
});
export const createUserProfileDocument = async (userAuth: any) => {
    if (!userAuth) return;

    const userReference = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userReference.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userReference.set({
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userReference;
}
export const signInWithGoogle = () => auth.signInWithPopup(provider);