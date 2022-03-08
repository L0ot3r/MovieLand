import React from 'react';
import styles from './MovieCard.module.css';
import { Rating } from '@mui/material';

const MovieCard = ({ movie }) => {
	return (
		<div className={styles.movie}>
			<div>
				<h3>{movie.title}</h3>
				<p>{movie.release_date}</p>
				<span>{movie.overview}</span>
			</div>
			<div>
				<img
					src={
						movie.poster_path !== null
							? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
							: 'https://via.placeholder.com/400'
					}
					alt={movie.title}
				/>
			</div>
			<div>
				<span>
					<p>{movie.vote_average}</p>
					<Rating name='rating' value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
				</span>
				<h3>{movie.title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
