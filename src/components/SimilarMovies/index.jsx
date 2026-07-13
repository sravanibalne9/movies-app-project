import {Link} from 'react-router-dom'
import './index.css'

const SimilarMovies = props => {
  const {movieDetails} = props
  const {id, posterPath, title} = movieDetails

  return (
    <Link to={`/movies/${id}`} className="similar-link">
      <img
        src={posterPath}
        alt={title}
        className="similar-movie-image"
      />
    </Link>
  )
}

export default SimilarMovies