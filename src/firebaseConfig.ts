import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCClQOdo091cbnV4wSFFQuz2frCnbTqNXU",
    authDomain: "rovobox.firebaseapp.com",
    projectId: "rovobox",
    storageBucket: "rovobox.appspot.com",
    messagingSenderId: "655717337393",
    appId: "1:655717337393:web:e14fb82e1f855f49d0c810"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
