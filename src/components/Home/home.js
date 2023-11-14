import Header from '../header/head'
import Register from '../registred'
import CartContext from '../../JJ'
import './home.css'

const Home = () => (
  <CartContext.Consumer>
    {value => {
      const {input, optionName} = value

      return (
        <>
          {input !== '' ? (
            <div>
              <Header />

              <div className="homebg">
                <h1 className="h1">Hello {input}</h1>
                <p>Welcome to {optionName}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            </div>
          ) : (
            <>
              <Register />
            </>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Home
