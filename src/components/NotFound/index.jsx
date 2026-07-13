import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1>404</h1>

    <h2>Page Not Found</h2>

    <Link to="/">
      <button type="button" className="home-button">
        Go Home
      </button>
    </Link>
  </div>
)

export default NotFound