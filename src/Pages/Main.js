import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './CSS/Main.css';

class Main extends Component {
  constructor() {
      super();

      this.login = this.login.bind(this);
  }

  login() {
    console.log("button pressed");
  }

  render() {
    return (
      <div>
        <h1 style={{color: '#ff9507'}} className='Title'>
          Mergify
        </h1>
        <body style={{color: 'white'}} className='text'>
          Welcome!<br />
          To get started, click <br />
          the button below to sign in <br />
          to Spotify!
          <br /><br /><br /><br />
        </body>
        <div className='buttonArea'>
          <Link to='/login'>
            <button className='button' style={{background:'#ff9507'}} onClick={this.login}>
              Login With Spotify
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
