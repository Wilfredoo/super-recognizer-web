import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import ScoreResult from '../../ScoreResult';
import shuffle from '../../../Helpers/shuffle';
import Button from '@material-ui/core/Button';

export default function Page({ correctAnswer, game, currentPage, personToShow, score, answer, level }) {
	const [rightType, setRightType] = useState(null);
	const buttonValues = [];
	let shuffledButtonValues = [];

	useEffect(() => {
		shuffledButtonValues.map((data) => {
			if (data.key === 'rightAnswer') setRightType(data.value);
		});
	}, []);

	if (typeof personToShow !== 'undefined') {
		for (const [key, value] of Object.entries(personToShow.answers)) {
			buttonValues.push({ key, value });
		}
		shuffledButtonValues = shuffle(buttonValues);
	}

	return (
		<>
			<div>
				<div className="instruction-line">
					<img className="eye" src="/eye.png" />
					<p className="instructionText"> What's the ethnicity of this person?</p>
				</div>
				<>
					{currentPage < 10 && (
						<>
							<div className="flex">
								<div>
									<>
										<img className="photo" src={personToShow.photo} />
									</>
								</div>

								<div className="buttonsWorld">
									{shuffledButtonValues &&
										shuffledButtonValues.map((data, index) => {
											let typeAnswer = true;
											if (data.key !== 'rightAnswer') typeAnswer = false;
											return (
												<div key={index}>
													<Button
														style={{
															margin: '7px',
														}}
														variant="contained"
														onClick={() => answer(typeAnswer)}
													>
														{data.value}
													</Button>
												</div>
											);
										})}
								</div>
								{correctAnswer === true && <p className="correct">Correct ✔</p>}
								{correctAnswer === false && (
									<>
										<p className="incorrect">Incorrect X</p>
										<p className="incorrect">Right Answer: {rightType}</p>
									</>
								)}
							</div>
						</>
					)}
					{currentPage === 10 && (
						<>
							<ScoreResult
								game={game}
								score={score}
								game_id={'d9ade898-28f5-11eb-adc1-0242ac120002'}
								totalQuestions={10}
								level={level}
							/>
						</>
					)}
				</>
			</div>
		</>
	);
}
