import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import fire from './Auth/base';
import { AuthContext } from './Auth/Auth';

const AuthButtons = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="authButtons">
			{!currentUser && (
				<Link to="/signup">
					<button className="authButton">Sign Up</button>
				</Link>
			)}
			{!currentUser && (
				<Link to="/login">
					<button className="authButton">Log In</button>
				</Link>
			)}
			{currentUser && (
				<p className="authButton">
					Welcome{' '}
					<span className="highlight-container">
						{' '}
						<span className="highlight">
							{' '}
							{'   '}
							{currentUser.displayName}
							{'   '}
						</span>
					</span>
				</p>
			)}

			{currentUser && (
				<button className="authButton" onClick={() => fire.auth().signOut()}>
					Sign Out
				</button>
			)}
		</div>
	);
};

export default AuthButtons