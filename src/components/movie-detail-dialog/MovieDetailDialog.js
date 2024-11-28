// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './MovieDetailDialog.css'

// Component: Movie Detail Dialog
function MovieDetailDialog ({ closeDialog, movie }) {
	return (
		<div
			data-component="movie-detail-dialog"
			onClick={closeDialog}>
			<div
				className='mla-movie-detail-dialog-content'
				onClick={(event) => event.stopPropagation()}>
				<div className='mla-movie-detail-dialog-content-header'>
					<h4>{`Movie: ${movie?.title}`}</h4>
					<button
						type='button'
						className='mla-movie-detail-dialog-close-button'
						onClick={closeDialog}>Close</button>
				</div>
				<div className='mla-movie-detail-dialog-content-body'>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
						alt={movie?.title} />
					<div className='mla-movie-detail-dialog-content-body-details'>
						<h4>Overview</h4>
						<p>{movie?.overview}</p>
						<p>{`${movie?.vote_average} / 10`}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

// Properties
MovieDetailDialog.propTypes = {
	closeDialog: PropTypes.func.isRequired,
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		poster_path: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired,
		vote_average: PropTypes.number.isRequired	
	}).isRequired
}

// Export
export default MovieDetailDialog
