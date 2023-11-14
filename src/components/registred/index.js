import {Link, withRouter} from 'react-router-dom'
import Header from '../header/head'
import './index.css'

const Register = () => (
  <div>
    <Header />
    <div className="homebg">
      <h1 className="h1">Welcome to Meetup</h1>
      <p>Please register for the topic</p>
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
          
      />
    </div>
  </div>
)

export default withRouter(Register)
