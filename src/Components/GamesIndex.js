import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

function GamesIndex() {
	const games = [
		{ url: 'remember-the-face', title: 'Remember the Face' },
		{ url: 'celebrity-match', title: 'Celebrity Match' },
		{ url: 'world-of-averages', title: 'World of Averages' },
		{ url: 'recognise-your-friends', title: 'Recognize your Friends' },
	];

	return (
		<div className="componentContainer">
			<h2>Games</h2>
			{games &&
				games.map((data) => {
					return (
						<div>
							{data.url !== 'recognise-your-friends' ?
							<Link to={`/levels/${data.url}`}>
								<p className="games">{data.title}</p>
								
							</Link>
							: <Link to={`/${data.url}`}>
							<p className="games">{data.title}</p>
								<p className="coming-soon">** Coming Soon **</p>
						</Link>}
						</div>
					);
				})}
		</div>
	);
}

export default GamesIndex;
