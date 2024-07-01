import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDL4SxLCGLo-tsYvE6BeMXlRQM0c-HROcs",
  authDomain: "netflix-e2390.firebaseapp.com",
  projectId: "netflix-e2390",
  storageBucket: "netflix-e2390.appspot.com",
  messagingSenderId: "598791843779",
  appId: "1:598791843779:web:4bdf9f02f5e259090d5776"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password) => {
  try{
     const res = await createUserWithEmailAndPassword(auth, email, password);
     const user = res.user;
     await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
     })
  }catch(error){
   console.log(error);
   toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const login = async (email, password) => {
    try{
       await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
      console.log(error);
      toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const logout = ()=>{
    signOut(auth)
}

export { auth, db, signup, login, logout };