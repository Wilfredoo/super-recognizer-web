import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import { AuthContext } from './Auth/Auth';

function LevelsIndex({
	match: {
		params: { game },
	},
}) {
	const { currentUser } = useContext(AuthContext);
	const levelsArray = ['I', 'II', 'III'];
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
	return (
		<div className="componentContainer">
			{console.log('current user in levels', currentUser)}
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
								<Link to={!currentUser && level !== 'I' ? `#` : `/game/${game}/${level}`}>
									<p className={!currentUser && level !== 'I' ? `levels disabled` : `levels`}>Level {level}</p>
								</Link>
							</div>
						);
				  })
				: celebrities.map((celebrity) => {
						return (
							<div>
								<Link to={`/game/${game}/${celebrity}`}>
									<p className="celebrity-levels">{celebrity}</p>
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
