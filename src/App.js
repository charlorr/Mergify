import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MergePage from './Pages/MergePage.js';
import fourohfour from './Pages/404.js'
import './Pages/CSS/MergePage.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MergePage} />
          <Route exact path='*' component={fourohfour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
