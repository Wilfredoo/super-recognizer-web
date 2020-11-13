import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import fire from './Auth/base';
import { AuthContext } from './Auth/Auth';

const Home = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="componentContainer">
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
				{currentUser && <p className="authButton"> Welcome {currentUser.displayName}</p>}

				{currentUser && (
					<button className="authButton" onClick={() => fire.auth().signOut()}>
						Sign Out
					</button>
				)}
			</div>
			<div className="textContainer">
				<h1 className="train">TRAIN YOUR FACE RECOGNITION SKILLS</h1>
				<p className="homeText">
					Super Recognizer is a collection of games based on scientific research that will help you improve
					your face recognitions skills.
				</p>
				<p className="homeText">
					{' '}
					If you have{' '}
					<a href="https://en.wikipedia.org/wiki/Prosopagnosia" target="_blank">
						<span className="link"> prosopagnosia</span>
					</a>
					, you are a{' '}
					<a href="https://en.wikipedia.org/wiki/Super_recogniser" target="_blank">
						<span className="link">super recogniser</span>
					</a>{' '}
					or you are simply interested in getting better at faces, this site is for you.
				</p>
				<Link to="/games">
					<button className="btn playing">START PLAYING!</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
