/* eslint-disable import/no-named-as-default-member */
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/home'
import Login from './components/login/login'

import NotFound from './components/Notfound/notfound'
import CartContext from './JJ'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {input: ''}

  Add = put => {
    this.setState({input: put})
  }

  render() {
    const {input} = this.state

    return (
      <CartContext.Provider value={{input, Add: this.Add}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Login} />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
