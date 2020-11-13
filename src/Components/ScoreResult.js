import React, { useContext, useState } from 'react';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AuthContext } from './Auth/Auth';

export default function ScoreResult({ game, score, totalQuestions }) {
	const { currentUser } = useContext(AuthContext);
	const [openModal, setOpenModal] = useState(false);

	// const saveScore = async (name, email, password, uid) => {
	// 	return firebase.firestore().collection('games').doc(uid).set({
	// 		gameId,
	// 		playerId,
	// 		date,
	// 		maxLevel,
	// 	});
	// }

	const next = () => {
		setOpenModal(true);
		// saveScore()
	};

	return (
		<>
			<div className="score">
				<p className="scoreLine">Right answers: {JSON.stringify(score)}</p>
				<p className="scoreLine">Total questions: {totalQuestions}</p>
				<div className="buttonGroup">
					{score < 7 ? (
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
						<Button
							onClick={() => next()}
							style={{
								margin: '10px 0',
								padding: '15px 25px',
								width: '220px',
							}}
							variant="contained"
						>
							Next level
						</Button>
					)}
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
}
