import React, { useCallback } from 'react';
import '../../App.scss';
import fire from './base';
import { withRouter } from 'react-router';
import * as firebase from 'firebase';

const SignUp = ({ history }) => {
	const saveUser = async (name, email, password, uid) => {
		return firebase.firestore().collection('users').doc(uid).set({
			name,
			email,
			password,
			uid,
		});
	};

	const updateProfile = (userCredentials, displayName) => {
		return userCredentials.user.updateProfile({
			displayName,
		});
	};

	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { name, email, password } = event.target.elements;
			try {
				const credentials = await fire.auth().createUserWithEmailAndPassword(email.value, password.value);
				await saveUser(name.value, email.value, password.value, credentials.user.uid);
				updateProfile(credentials, name.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	return (
		<div className="App">
			<h1>New in Town?</h1>
			<form onSubmit={handleSignUp}>
				<label>
					Name
					<input name="name" type="name" placeholder="Name" />
				</label>
				<label>
					Email
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					Password
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
