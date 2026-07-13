import SimilarMovies from '../SimilarMovies'
import './index.css'

const similarMoviesList = [
  {
    id: 3,
    title: 'The Batman',
    posterPath:
      'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 4,
    title: 'Joker',
    posterPath:
      'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  },
  {
    id: 5,
    title: 'Avengers',
    posterPath:
      'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
  },
]

const SimilarMovieDetails = () => (
  <div className="similar-container">
    <h2 className="similar-heading">More Like This</h2>

    <div className="similar-list">
      {similarMoviesList.map(eachMovie => (
        <SimilarMovies
          key={eachMovie.id}
          movieDetails={eachMovie}
        />
      ))}
    </div>
  </div>
)

export default SimilarMovieDetails