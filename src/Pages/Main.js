import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookie';

import './CSS/Main.css';

const qs = require('query-string');

class Main extends Component {

  state = {
    response: ''
  }

  // callApi = async () => {
  //   const response = await fetch('/login');
  //   if (response.ok)
  //     window.location.href = "login";
  //   const body = await response.json();

  //   if(response.status !== 200) throw Error(body.message);

  //   return body;
  // }

  constructor() {
      super();

      this.login = this.login.bind(this);
  }

  login() {
    console.log("button pressed");

    let client_id = '68c158c3267444b997830028880efcbe'; // Your client id
    let client_secret = 'f5b3980f08cc4ce4a74136086d6c40d1'; // Your secret
    let redirect_uri = 'http://localhost:3000'; // Your redirect uri
    let scope = 'user-read-private user-read-email';
    let state = Math.random().toString(32).substr(2);
    let yoooo = `https://accounts.spotify.com/authorize?response_type=code&` +
                           `client_id=${client_id}&scope=${scope}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${state}`;
    this.setState({id: client_id, secret: client_secret, scope: scope, uri: encodeURIComponent(redirect_uri) });
    console.log(yoooo);
    window.location.href = yoooo;

  }

  render() {

    console.log(this.props);
    if(this.props.location.search != "")
    {
      var code = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code;
      var state = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).state;

      let yoooo = 'https://accounts.spotify.com/api/token';
      fetch(yoooo, {
        method: 'post',
        headers: {'Authorization': 'Basic ' + (new Buffer(this.state.id + ':' + this.state.secret).toString('base64')) },
        body: {
          code: code,
          redirect_uri: this.state.uri,
          grant_type: 'authorization_code'
        }
      })
      //window.location.href = yoooo;
    }
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
            <button className='button' style={{background:'#ff9507'}} onClick={this.login}>
              Login With Spotify
            </button>
        </div>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default Main;
