import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const connection = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyADsZPdF-ugETTvYPB0iWH57kW_ZlaeqmY',
    authDomain: 'faqrotina-edccd.firebaseapp.com',
    projectId: 'faqrotina-edccd',
    storageBucket: 'faqrotina-edccd.appspot.com',
    messagingSenderId: '937686204246',
    appId: '1:937686204246:web:af01b550e61f81155860f7',
    measurementId: 'G-DZQW8GR17H',
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return db;
};

export default connection;
