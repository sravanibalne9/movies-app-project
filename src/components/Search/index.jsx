import {useState} from 'react'
import Header from '../Header'
import MovieItem from '../MovieItem'
import './index.css'

const moviesList = [
  {
    id: 1,
    title: 'Avatar',
    posterPath:
      'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
  },
  {
    id: 2,
    title: 'Spider-Man',
    posterPath:
      'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  },
  {
    id: 3,
    title: 'The Batman',
    posterPath:
      'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
]

const Search = () => {
  const [searchInput, setSearchInput] = useState('')

  const filteredMovies = moviesList.filter(eachMovie =>
    eachMovie.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <>
      <Header />

      <div className="search-container">
        <input
          type="search"
          placeholder="Search Movies"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          className="search-input"
        />

        <ul className="search-movies-list">
          {filteredMovies.map(eachMovie => (
            <MovieItem
              key={eachMovie.id}
              movieDetails={eachMovie}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Search