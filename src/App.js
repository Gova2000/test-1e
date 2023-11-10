import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/home'
import Login from './components/login/login'

import NotFound from './components/Notfound/notfound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Login} />

    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App

/* <Route path="/" component={Register} />
    <Route exact path="/" component={Home} /> */
