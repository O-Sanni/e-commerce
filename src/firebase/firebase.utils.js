import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config={
    apiKey: "AIzaSyC2hpwian3JPc5zXA3oOAqSZNFNr74dgKo",
    authDomain: "e-commerce-aba8f.firebaseapp.com",
    databaseURL: "https://e-commerce-aba8f.firebaseio.com",
    projectId: "e-commerce-aba8f",
    storageBucket: "e-commerce-aba8f.appspot.com",
    messagingSenderId: "624874355747",
    appId: "1:624874355747:web:36da65b5457ea1f5dfc596",
    measurementId: "G-DX0920ZJFD"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get();
    

    if(!snapShot.exists){
      const{displayName, email}=userAuth;
      const createdAt=new Date();

      try{
          await userRef.set({
            displayName, email,createdAt, ...additionalData
          })
      }
      catch(error){
        console.log("error creating user", error.message)
      }
    }

    return userRef;
  }
  
 

  export const auth= firebase.auth();
  export const firestore=firebase.firestore();


  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;