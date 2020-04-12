import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDYhlPBX8OyAyxLaTmbfT4-jtG0GMtD4Mg',
  authDomain: 'shop-db-189b2.firebaseapp.com',
  databaseURL: 'https://shop-db-189b2.firebaseio.com',
  projectId: 'shop-db-189b2',
  storageBucket: 'shop-db-189b2.appspot.com',
  messagingSenderId: '896754754541',
  appId: '1:896754754541:web:f01560362d98fa51753de4',
  measurementId: 'G-NHBNJQHNV7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
