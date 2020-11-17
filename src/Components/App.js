import LevelsIndex from './LevelsIndex';
import RememberTheFace from './Games/RememberTheFace/RememberTheFace';
import CelebrityMatch from './Games/CelebrityMatch/CelebrityMatch';
import WorldOfAverages from './Games/WorldOfAverages/WorldOfAverages';
import RecogniseYourFriends from './Games/RecogniseYourFriends/RecogniseYourFriends';
import firebaseConfigDEV from '../config/FirebaseConfigDEV';
import * as firebase from 'firebase';
import React from 'react';
import GamesIndex from './GamesIndex';
import Home from './Home';
import Sponsors from './Sponsors';
import Feedback from './Feedback';
import Header from './Header';
import Footer from './Footer';
import Research from './Research';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { AuthProvider } from './Auth/Auth';
import AuthButtons from './AuthButtons';

export default function App() {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfigDEV);
	}

	return (
		<HttpsRedirect>
			<AuthProvider>
				<Router>
					<div class="appParent">
						<Header />
						<AuthButtons />
						<div className="app">
							<Switch>
								<Route exact from="/games" render={(props) => <GamesIndex {...props} />} />
								<Route exact from="/" render={(props) => <Home {...props} />} />
								<Route exact path="/sponsors" render={(props) => <Sponsors {...props} />} />
								<Route exact path="/feedback" render={(props) => <Feedback {...props} />} />
								<Route
									exact
									path="/recognise-your-friends"
									render={(props) => <RecogniseYourFriends {...props} />}
								/>
								<Route path="/research" component={Research} exact={true} />
								<Route path="/levels/:game" component={LevelsIndex} exact={true} />
								<Route
									path="/game/celebrity-match/:celebrity/:level"
									component={CelebrityMatch}
									exact={true}
								/>
								<Route path="/game/remember-the-face/:level" component={RememberTheFace} exact={true} />
								<Route path="/game/world-of-averages/:level" component={WorldOfAverages} exact={true} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/signup" component={SignUp} />
							</Switch>
						</div>
						<Footer />
					</div>
				</Router>
			</AuthProvider>
		</HttpsRedirect>
	);
}
