import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Pages/Main.js';
import fourohfour from './Pages/404.js'
import './Pages/CSS/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='*' component={fourohfour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
