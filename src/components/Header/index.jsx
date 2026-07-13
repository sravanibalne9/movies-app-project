import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <nav className="header">
      <h1 className="logo">Movies App</h1>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/popular" className="nav-link">
            Popular
          </Link>
        </li>

        <li>
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>

        <li>
          <Link to="/account" className="nav-link">
            Account
          </Link>
        </li>
      </ul>

      <button
        type="button"
        className="logout-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default Header