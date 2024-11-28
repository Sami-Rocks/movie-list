// Modules
import React, { useCallback, useEffect, useState } from 'react'

// Components
import Movie from '../../components/movie/Movie'
import MovieDetailDialog from '../../components/movie-detail-dialog/MovieDetailDialog'

// Styles
import './Movies.css'

// Page: Movies
function Movies () {
	// State
	const [movies, setMovies] = useState([])
	const [isViewingMovieDetail, setIsViewingMovieDetail] = useState(false)
	const [selectedMovie, setSelectedMovie] = useState(null)

	// Functions
	const selectMovie = (movie) => {
		setSelectedMovie(movie)
		setIsViewingMovieDetail(true)
	}

	// Functions (Memoized)
	const getMovies = useCallback(async () => {
		const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
		const data = await response.json()
		setMovies(data.results)
	}, [])

	// Effects
	useEffect(() => {
		getMovies()
	}, [getMovies])

	return (
		<div data-page="movies">
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					movie={movie}
					selectMovie={() => selectMovie(movie)} />
			))}
			{isViewingMovieDetail &&
				<MovieDetailDialog
					closeDialog={() => setIsViewingMovieDetail(false)}
					movie={selectedMovie} />}
		</div>
	)
}

export default Movies