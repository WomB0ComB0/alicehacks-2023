import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'firebase/analytics'; // Import isSupported from firebase/analytics
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID as string,
  appId: import.meta.env.VITE_FIREBASE_APPID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID as string,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

try {
  if (await isAnalyticsSupported()) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const analytics = getAnalytics(app);
    console.log('Firebase Analytics is supported in this environment.');
  }
} catch (error) {
  console.warn('Firebase Analytics is not supported in this environment.');
}

export { app, auth, db };
