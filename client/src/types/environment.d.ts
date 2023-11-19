declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_URL: string;
      VITE_APIKEY: string;
      VITE_FIREBASE_APIKEY: string;
      VITE_FIREBASE_AUTHDOMAIN: string;
      VITE_FIREBASE_PROJECTID: string;
      VITE_FIREBASE_STORAGEBUCKET: string;
      VITE_FIREBASE_MESSAGINGSENDERID: string;
      VITE_FIREBASE_APPID: string;
      VITE_FIREBASE_MEASUREMENTID: string;
      VITE_RECAPTCHA_SITEKEY: string;
    }
  }
}

export {};
