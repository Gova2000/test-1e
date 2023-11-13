/* eslint-disable import/no-named-as-default-member */

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
  state = {input: '', option: topicsList[0].displayText, tog: false}

  get = event => {
    event.preventDefault()
    const {input} = this.state
    const {history} = this.props

    if (input !== '') {
      this.setState({tog: false})
      history.replace('/')
    } else {
      this.setState({tog: true})
    }
  }

  

  render() {
    const {tog, input, option} = this.state

    
      <CartContext.Consumer>
  {value =>{

    const { Add, input } = value;
    

          const input1 = e => {
         const newInput = e.target.value;
            this.setState({ input: newInput });
            Add(newInput);
                }

          return (<div className="main">
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
                        placeholder="Your name"
                        id="input"
                        onChange={input1}
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
                  <button type="submit" onClick={this.get}>
                    Register Now
                  </button>
                  {tog && <p className="p">Please enter your name</p>}
                </form>
              </div>
            </div>
          )

          }
          }
        
      </CartContext.Consumer>
    
  }
}

export default Login
