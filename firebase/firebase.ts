import {FirebaseApp, getApps, initializeApp} from "firebase/app";
import {Analytics, getAnalytics, isSupported} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCKPyiGEuvSgwELe3vNyWfyJZrl6zw2s9I",
    authDomain: "bbibbi-webview.firebaseapp.com",
    projectId: "bbibbi-webview",
    appId: "1:505850740732:web:5d8eb8d36523b7c5e3fc79",
    storageBucket: "bbibbi-webview.appspot.com",
    messagingSenderId: "505850740732",
    measurementId: "G-QWXVZND9NW",
};
let app: FirebaseApp;
let analytics: Analytics;
if (typeof window !== 'undefined' && !getApps().length) {
    app = initializeApp(firebaseConfig);
    isSupported().then((yes) => {
        if(yes) {
            analytics = getAnalytics(app);
        }
    });
}

export {app, analytics};
