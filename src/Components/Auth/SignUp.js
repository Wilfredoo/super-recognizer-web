import React, { useCallback, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect, withRouter } from 'react-router';
import * as firebase from 'firebase';
import { AuthContext } from './Auth';
import fire from './base';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Super Recogniser
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = ({ history }) => {
	const classes = useStyles();

	const saveUser = async (name, email, password, uid) => {
		return firebase.firestore().collection('users').doc(uid).set({
			name,
			email,
			password,
			uid,
		});
	};

	const { currentUser } = useContext(AuthContext);

	const updateProfile = (userCredentials, displayName) => {
		return userCredentials.user.updateProfile({
			displayName,
		});
	};

	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { name, email, password } = event.target.elements;
			try {
				const credentials = await fire.auth().createUserWithEmailAndPassword(email.value, password.value);
				await updateProfile(credentials, name.value);
				await saveUser(name.value, email.value, password.value, credentials.user.uid);
				history.push({
					pathname: '/',
				});
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSignUp}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="fname"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						{/* <Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid> */}
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default SignUp;
