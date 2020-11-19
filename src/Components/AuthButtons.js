import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import fire from './Auth/base';
import { AuthContext } from './Auth/Auth';

const AuthButtons = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="authButtons">
			{currentUser && currentUser.displayName && (
				<p className="authButton">
					Welcome{' '}
					<span className="highlight-container">
						{' '}
						<span className="highlight">{currentUser.displayName}</span>
					</span>
				</p>
			)}
			{currentUser && !currentUser.displayName && (
				<p className="authButton">
					Welcome{' '}
					<span className="highlight-container">
						<span className="highlight"> {currentUser.email}</span>
					</span>{' '}
				</p>
			)}

			{!currentUser && (
				<Link to="/login">
					<button className="authButton">Log In</button>
				</Link>
			)}

			{currentUser && (
				<button className="authButton" onClick={() => fire.auth().signOut()}>
					Sign Out
				</button>
			)}
		</div>
	);
};

export default AuthButtons;
