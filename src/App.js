import React, { useEffect, useState } from 'react';

import MovieCard from './components/MovieCard/MovieCard';

import './App.css';
import { GoSearch } from 'react-icons/go';

const api_key = process.env.REACT_APP_API_KEY;

const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=fr-FR`;

const URL_STD = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const App = () => {
	const [moviePage, setMoviePage] = useState(1);
	const [movies, setMovies] = useState([]);
	const [inpSearch, setInpSearch] = useState('');

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&query=${title}`);
		const data = await response.json();
		setMovies(data.results);
	};

	const firstCall = async () => {
		const response = await fetch(`${URL_STD}`);
		const data = await response.json();
		setMovies(data.results);
	};

	useEffect(() => {
		inpSearch === '' ? firstCall() : searchMovies(inpSearch);
	}, []);

	return (
		<div className='app'>
			<h1>MovieLand</h1>
			<form className='search'>
				<input
					type='text'
					placeholder='Rechercher un film'
					value={inpSearch}
					onChange={(e) => setInpSearch(e.target.value)}
				/>
				<GoSearch color='#f1f1f1' onClick={() => searchMovies(inpSearch)} />
			</form>
			{movies.length > 0 ? (
				<div className='container'>
					{movies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			) : (
				<div className='empty'>
					<h2>Aucun film trouvé</h2>
				</div>
			)}
		</div>
	);
};

export default App;
