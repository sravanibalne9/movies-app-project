import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />

      <div className="home-container">
        <h1 className="home-heading">Welcome to Movies App</h1>

        <p className="home-description">
          Discover the latest trending and popular movies.
        </p>

        <button type="button" className="play-button">
          Play
        </button>
      </div>
    </>
  )
}

export default Home