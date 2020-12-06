import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Test from './components/Test'

class App extends React.Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Test} />
          <Route path="/second" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default App