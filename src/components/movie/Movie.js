// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './Movie.css'

// Component: Movie
function Movie ({ movie}) {
	return (
		<div data-component="movie">
			<img
				className='mla-movie-poster'
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title} />
			<div className='mla-movie-details'>
				<h3 className='mla-movie-title'>{movie.title}</h3>
				<h4 className='mla-movie-release-date'>{movie.release_date}</h4>
			</div>
		</div>
	)
}

// Properties
Movie.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		poster_path: PropTypes.string.isRequired,
		release_date: PropTypes.string.isRequired
	}).isRequired
}

// Export
export default Movie