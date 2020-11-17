import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import { AuthContext } from './Auth/Auth';
import * as firebase from 'firebase';

function LevelsIndex({
	match: {
		params: { game },
	},
}) {
	const { currentUser } = useContext(AuthContext);
	const levelsArray = [1, 2, 3];
	const celebrities = [
		'Trump',
		'Shakira',
		'Bruno Mars',
		'Ed Sheeran',
		'Taylor Swift',
		'Tom Cruise',
		'Keanu Reeves',
		'Kit Harrington',
		'Lili Reinhart',
		'Michelle Obama',
	];

	const [lastMaxScore, setLastMaxScore] = useState(null);
	const store = firebase.firestore();

	useEffect(() => {
		currentUser && getLastMaxScore();
	});

	const roundsRef = store.collection('rounds');
	const getLastMaxScore = async () => {
		const roundsSnapshot = await roundsRef
			.where('playerId', '==', currentUser.uid)
			.where('game', '==', game)
			.orderBy('lastMaxScore', 'desc')
			.limit(1)
			.get();

		await roundsSnapshot.docs.forEach((docSnapshot) => {
			console.log('gimme that last max score: ', docSnapshot.data().lastMaxScore);
			setLastMaxScore(docSnapshot.data().lastMaxScore);
		});
	};

	return (
		<div className="componentContainer">
			{game === 'celebrity-match' && (
				<>
					<h3>Celebrity Match</h3>
					<p>Can you differentiate between the real celebrity and the imposter?</p>
				</>
			)}
			{game === 'remember-the-face' && (
				<>
					<h3>Remember the Face</h3>
					<p>You'll be shown faces of strangers. Can you remember them correctly?</p>
				</>
			)}
			{game === 'world-of-averages' && (
				<>
					<h3>World of Averages</h3>
					<p>How good are you at differentiating facial features from different ethnicities?</p>
				</>
			)}
			<h3>Levels</h3>
			{game !== 'celebrity-match'
				? levelsArray.map((level) => {
						return (
							<div>
								{console.log('true or false', lastMaxScore > 10 * level - 3)}
								<Link
									to={
										level === 1 || (currentUser && lastMaxScore > 10 * level - 3)
											? `/game/${game}/${level}`
											: `#`
									}
								>
									<p
										className={
											level === 1 || (currentUser && lastMaxScore > 10 * level - 3)
												? `levels`
												: `levels disabled`
										}
									>
										Level {level}
									</p>
								</Link>
							</div>
						);
				  })
				: celebrities.map((celebrity) => {
						return (
							<div>
								<Link to={celebrity === 'Trump' || currentUser ? `/game/${game}/${celebrity}` : `#`}>
									<p
										className={
											celebrity === 'Trump' || currentUser
												? `celebrity-levels`
												: `celebrity-levels disabled`
										}
									>
										{celebrity}
									</p>
								</Link>
							</div>
						);
				  })}
			{game === 'world-of-averages' && (
				<>
					<p>...</p>
					<p className="disclaimer">
						{' '}
						DISCLAIMER: this game does not intend to offend anyone or promote any kind of discrimination (I
						am part of a minority group myself). The photos are just averages from a relatively small sample
						of people of each country and the sole purpose of this game is training. I take personal
						responsability for anyone that I may offend with this game.
					</p>
					<p>...</p>
				</>
			)}
		</div>
	);
}

export default LevelsIndex;
