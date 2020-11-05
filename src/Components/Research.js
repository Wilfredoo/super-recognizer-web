import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
        maxWidth: 345,
		margin: '10px',
        
	},
	media: {
		height: 140,
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function Research() {
	const classes = useStyles();

	return (
		<>
			<Grid container spacing={1}>
				<Grid container item xs={12} spacing={3}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									The rehabilitation of face recognition impairments: a...
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									While much research has investigated face recognition impairments, much less work
									has examined their rehabilitation...
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a
								href="https://www.frontiersin.org/articles/10.3389/fnhum.2014.00491/full"
								target="_blank"
							>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</a>
						</CardActions>
					</Card>
				</Grid>

				{/* <Grid container item xs={12} spacing={3}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									The rehabilitation of face recognition impairments: a...
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									While much research has investigated face recognition impairments, much less work
									has examined their rehabilitation...
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a
								href="https://www.frontiersin.org/articles/10.3389/fnhum.2014.00491/full"
								target="_blank"
							>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</a>
						</CardActions>
					</Card>
				</Grid> */}

				{/* <Grid container item xs={12} spacing={3}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									The rehabilitation of face recognition impairments: a...
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									While much research has investigated face recognition impairments, much less work
									has examined their rehabilitation...
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a
								href="https://www.frontiersin.org/articles/10.3389/fnhum.2014.00491/full"
								target="_blank"
							>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</a>
						</CardActions>
					</Card>
				</Grid> */}
			</Grid>
		</>
	);
}
