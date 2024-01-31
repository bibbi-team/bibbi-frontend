import {FirebaseApp, getApps, initializeApp} from "firebase/app";
import {Analytics, getAnalytics, isSupported} from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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
