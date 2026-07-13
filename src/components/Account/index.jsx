import Header from '../Header'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Account = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <>
      <Header />

      <div className="account-container">
        <h1 className="account-heading">Account</h1>

        <p className="account-text">
          Welcome to Movies App
        </p>

        <button
          type="button"
          className="logout-button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default Account