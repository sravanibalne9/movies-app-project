import Header from '../Header'
import MovieItem from '../MovieItem'
import './index.css'

const moviesList = [
  {
    id: 1,
    title: 'Avatar',
    posterPath: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
  },
  {
    id: 2,
    title: 'Spider-Man',
    posterPath: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  },
  {
    id: 3,
    title: 'The Batman',
    posterPath: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 4,
    title: 'Joker',
    posterPath: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  },
]

const Popular = () => (
  <>
    <Header />
    <div className="popular-container">
      <h1 className="popular-heading">Popular Movies</h1>

      <ul className="movies-list">
        {moviesList.map(eachMovie => (
          <MovieItem
            key={eachMovie.id}
            movieDetails={eachMovie}
          />
        ))}
      </ul>
    </div>
  </>
)

export default Popular