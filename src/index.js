import firebase from 'firebase'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';


firebase.initializeApp({
	apiKey: "AIzaSyAFvAqd3RdWVxdDkDOVAD_N8z_i7VdMmlM",
	authDomain: "cagt-faf8c.firebaseapp.com",
	projectId: "cagt-faf8c",
	storageBucket: "cagt-faf8c.appspot.com",
	messagingSenderId: "244474532899",
	appId: "1:244474532899:web:230aa1b6b7ea3030ae0d96"
});
export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
	<Context.Provider value={{
		firebase,
		auth,
		firestore
	}}>
		<App />
	</Context.Provider>,

	document.getElementById('root'))