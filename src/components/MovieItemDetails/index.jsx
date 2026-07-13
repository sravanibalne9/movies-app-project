import {useParams} from 'react-router-dom'
import Header from '../Header'
import SimilarMovieDetails from '../SimilarMovieDetails'
import './index.css'

const movies = [
  {
    id: 1,
    title: 'Avatar',
    posterPath:
      'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
    overview:
      'Avatar is an epic science fiction film directed by James Cameron.',
    releaseDate: '2009-12-18',
    runtime: '162',
    voteAverage: '7.9',
  },
  {
    id: 2,
    title: 'Spider-Man',
    posterPath:
      'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    overview:
      'Spider-Man is a superhero movie based on Marvel Comics.',
    releaseDate: '2021-12-17',
    runtime: '148',
    voteAverage: '8.4',
  },
]

const MovieItemDetails = () => {
  const {id} = useParams()

  const movie = movies.find(each => each.id === Number(id))

  if (!movie) {
    return <h1>Movie Not Found</h1>
  }

  return (
    <>
      <Header />

      <div className="movie-details-container">
        <img
          src={movie.posterPath}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="movie-content">
          <h1>{movie.title}</h1>

          <p>⭐ {movie.voteAverage}</p>

          <p>{movie.runtime} mins</p>

          <p>Release Date: {movie.releaseDate}</p>

          <h3>Overview</h3>

          <p>{movie.overview}</p>
        </div>
      </div>

      <SimilarMovieDetails />
    </>
  )
}

export default MovieItemDetails