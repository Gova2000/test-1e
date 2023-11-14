import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../header/head'
import CartContext from '../../JJ'
import './login.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Login extends Component {
  state = {textinput: '', option: topicsList[0].displayText, tog: false}

  input1 = e => {
    this.setState({textinput: e.target.value})
  }

  render() {
    const {tog, textinput, option} = this.state

    return (
      <CartContext.Consumer>
        {value => {
          const {Add} = value

          const get = event => {
            event.preventDefault()

            const {history} = this.props

            if (textinput === '') {
              this.setState({tog: true})
            } else {
              this.setState({tog: false}, Add(textinput, option))

              history.replace('/')
            }
          }

          return (
            <div className="main">
              <Header />
              <div className="row">
                <div className="imgdiv">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </div>

                <form onSubmit={this.get}>
                  <h1>Let us join</h1>
                  <div className="margin">
                    <label htmlFor="input">NAME</label>
                    <div className="input">
                      <input
                        type="text"
                        value={textinput}
                        placeholder="Your name"
                        id="input"
                        onChange={this.input1}
                      />
                    </div>
                  </div>
                  <div className="margin">
                    <label htmlFor="select">TOPICS</label>
                    <div className="input">
                      <select
                        id="select"
                        value={option}
                        onChange={e => {
                          this.setState({option: e.target.value})
                        }}
                      >
                        {topicsList.map(each => (
                          <option key={each.id} value={each.id}>
                            {each.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button type="submit" onClick={get}>
                    Register Now
                  </button>
                  {tog && <p className="p">Please enter your name</p>}
                </form>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Login
