import React, { useContext, useState } from 'react';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AuthContext } from './Auth/Auth';
import shortid from 'shortid';
import * as firebase from 'firebase';
import { withRouter } from 'react-router';

const ScoreResult = ({ game, game_id, score, totalQuestions, level, history }) => {
	const { currentUser } = useContext(AuthContext);
	const [openModal, setOpenModal] = useState(false);
	const store = firebase.firestore();
	const saveScore = async () => {
		const roundId = shortid.generate();
		return store
			.collection('rounds')
			.doc(roundId)
			.set({
				roundId,
				game,
				game_id,
				playerId: currentUser.uid,
				date: Date.now(),
				lastMaxScore: score + level * 10,
			});
	};

	const next = () => {
		if (!currentUser) {
			setOpenModal(true);
			return;
		} else {
			saveScore();
			history.push(`/levels/${game}`);
		}
	};

	return (
		<>
			<div className="score">
				<p className="scoreLine">Right answers: {JSON.stringify(score)}</p>
				<p className="scoreLine">Total questions: {totalQuestions}</p>

				<div className="buttonGroup">
					{score <= 7 ? (
						<Link to={`/levels/${game}`}>
							<Button
								style={{
									margin: '10px 0',
									padding: '15px 25px',
									width: '220px',
								}}
								variant="contained"
							>
								Try Again
							</Button>
						</Link>
					) : (
						<>
							{level === '3' && game !== 'celebrity-match' && <p>You finished all the levels! Hurray!</p>}
							{level !== '3' && game !== 'celebrity-match' && (
								<Button
									onClick={() => next()}
									style={{
										margin: '10px 0',
										padding: '15px 25px',
										width: '220px',
									}}
									variant="contained"
								>
									Unlock Next Level
								</Button>
							)}
						</>
					)}
					{game === 'celebrity-match' &&
					<Button
									onClick={() => next()}
									style={{
										margin: '10px 0',
										padding: '15px 25px',
										width: '220px',
									}}
									variant="contained"
								>
									Unlock Next Level
								</Button>
								}
					<Link to={`/games`}>
						<Button
							style={{
								margin: '10px 0',
								padding: '15px 25px',
								width: '220px',
							}}
							variant="contained"
						>
							Try another game
						</Button>
					</Link>
					{!currentUser && (
						<>
							<p>...</p>
							{openModal && (
								<p className="pls-login">
									To save your progress and play more levels, please{' '}
									<a href="/login">
										<span className="colored">log in</span>
									</a>{' '}
									to your account.
								</p>
							)}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default withRouter(ScoreResult);
