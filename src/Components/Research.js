import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '22%',
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

const content = [
	{
		title: 'The rehabilitation of face recognition impairments: a critical review',
		preview:
			'While much research has investigated face recognition impairments, much less work has examined their rehabilitation...',
		link: 'https://www.frontiersin.org/articles/10.3389/fnhum.2014.00491/full',
	},
	{
		title: 'Holistic face training enhances face processing in developmental prosopagnosia',
		preview:
			'Prosopagnosia has largely been regarded as an untreatable disorder. However, recent case studies using cognitive training have shown...',
		link: 'https://pubmed.ncbi.nlm.nih.gov/24691394/',
	},
	{
		title: 'Face processing improvements in prosopagnosia: successes and...',
		preview:
			'Clinicians and researchers have widely believed that face processing cannot be improved in prosopagnosia. Though more than a dozen reported studies ',
		link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4122168/',
	},
	{
		title:
			'Training of familiar face recognition and visual scan paths for faces in a child with ...',
		preview:
			'In the current report we describe a successful training study aimed at improving recognition of a set of familiar face...',
		link: 'https://www.tandfonline.com/doi/abs/10.1080/02643290802299350',
	},
	{
		title: 'Training face perception in developmental prosopagnosia through perceptual learning',
		preview:
			'Recent work has shown that perceptual learning can improve face discrimination in subjects with acquired prosopagnosia.			',
		link: 'https://www.sciencedirect.com/science/article/abs/pii/S0028393219302386',
	},
	{
		title: 'Learning faces: Plasticity and the rehabilitation of congenital prosopagnosia',
		preview:
			'...suggests that, with the right type and amount of training, be able to support improvements in face identification.',
		link: 'https://jov.arvojournals.org/article.aspx?articleid=2136853',
	},
	{
		title: 'Rehabilitation of face-processing skills in an adolescent with prosopagnosia',
		preview:
			'In this paper we describe the case of EM, a female adolescent who acquired prosopagnosia at the age of eight...',
		link: 'https://www.tandfonline.com/doi/abs/10.1080/09602011.2014.973886',
	},
	{
		title: 'Perceptual learning of faces: A rehabilitative study of acquired prosopagnosia',
		preview:
			'Despite many studies of acquired prosopagnosia, there have been only a few attempts at its rehabilitation, all in single cases...',
		link: 'https://dl.acm.org/doi/abs/10.1162/jocn_a_01063',
	},
	{
		title:
			'Training with Own-Race Faces Can Improve Processing of Other-Race Faces',
		preview:
			'Faces of one"s own race are discriminated and recognized more accurately than faces of an other race. Studies have employed several methods to...',
		link: 'https://eric.ed.gov/?id=EJ934243',
	},
];

export default function Research() {
	const classes = useStyles();
	return (
		<>
			<div style={{ width: '100%' }}>
				<h3 className="research-title">
					A collection of studies done around face blindness, face training and super recognisers.
				</h3>
				<Box
					whiteSpace="normal"
					display="flex"
					flexWrap="wrap"
					p={1}
					m={1}
					bgcolor="background.paper"
					justifyContent="center"
				>
					{content.map((study) => {
						return (
							<Card className={classes.root}>
								<a href={study.link} target="_blank">
									<CardActionArea>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												className="study-title"
											>
												{study.title}
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												{study.preview}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Learn More
										</Button>
									</CardActions>
								</a>
							</Card>
						);
					})}
				</Box>
			</div>
		</>
	);
}
