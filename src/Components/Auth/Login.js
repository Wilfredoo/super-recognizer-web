import React, { useCallback, useContext } from 'react';
import '../../App.scss';
import fire from './base';
import { Redirect, withRouter } from 'react-router';
import { AuthContext } from './Auth';

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await fire.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<div className="componentContainer">
			<h1>Welcome Buddy</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					Password
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};

export default withRouter(Login);
