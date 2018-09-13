import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1DmA2CrIxinXQTC9uskl0z9bo9IB8AZ0",
    authDomain: "catchoftheday-7d272.firebaseapp.com",
    databaseURL: "https://catchoftheday-7d272.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;