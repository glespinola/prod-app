// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, where,orderBy} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA5oa0zEAoEbQv6oYZfA75J8k1RNo1syX0",
authDomain: "nsvalidator-user-db.firebaseapp.com",
projectId: "nsvalidator-user-db",
storageBucket: "nsvalidator-user-db.appspot.com",
messagingSenderId: "181985681199",
appId: "1:181985681199:web:db409e972de5b6b40d4bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export{
    query,
    collection,
    where,
    db,
    orderBy,
    onSnapshot
}