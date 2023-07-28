import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9TNYe15BVx4DfzjbuXgTLKwVVdjwZBfw",
  authDomain: "project-react-native-ab54e.firebaseapp.com",
  projectId: "project-react-native-ab54e",
  storageBucket: "project-react-native-ab54e.appspot.com",
  messagingSenderId: "728663332523",
  appId: "1:728663332523:web:9236faa07b621209cb49ee",
  measurementId: "G-H5WQ2NRZMW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);