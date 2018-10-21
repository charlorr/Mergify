import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookie';
import axios from 'axios';

import './CSS/Main.css';

let qs = require('query-string');


class Main extends Component {

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

      this.state= {};
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
                `client_id=${client_id}&scope=${scope}&redirect_uri=`
                + `${encodeURIComponent(redirect_uri)}&state=${state}`;

    let info = {
      'client_id': client_id,
      'client_secret': client_secret,
      'redirect_uri': encodeURIComponent(redirect_uri),
    }

    localStorage.setItem('data', JSON.stringify(info));
    console.log(yoooo);
    window.location.href = yoooo;

  }

  render() {

    console.log(this.props.location.search);
    console.log(this.state.id);
    if(this.props.location.search != "") {
      let data = JSON.parse(localStorage.getItem('data'));
      let code = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code;
      let state = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).state;
      console.log(encodeURIComponent(code));

      let yoooo = 'https://accounts.spotify.com/api/token';
      // fetch(yoooo)
      //   .then(results => {
      //     this.setState({id: this.state.client_id, secret: this.state.client_secret,
      //       scope: this.state.scope, uri: this.state.uri, results: results})
      //   })
      //   .then(console.log(this.state.results));
      console.log("code: " + code + "\nredirect_uri: " + data.redirect_uri + "\nAuth: " + new Buffer(data.client_id + ':' + data.client_secret).toString('base64'));
      let authval = new Buffer(data.client_id + ':' + data.client_secret).toString('base64');
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        params: {
          code: encodeURIComponent(code),
          redirect_uri: data.redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'Content-Type': "application/x-www-form-urlencoded",
          'Accept': "application/json"
        },
        auth: {
          username: data.client_id,
          password: data.client_secret
        }
      };
      let yooo = 'https://accounts.spotify.com/api/token?grant_type=authorization_code&code=' + code + "&redirect_uri=" + data.redirect_uri;

      fetch(yooo, {
        method: 'post',
        headers: {
          'Authorization': 'Basic ' + authval,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          'grant_type': 'authorization_code',
          'code': code,
          'redirect_uri': data.redirect_uri
        }
      }).then(response => response.text())
  .then((body) => {
    //.console.log(body);
    localStorage.setItem('access_token', JSON.stringify(JSON.parse(body).access_token))
    localStorage.setItem('refresh_token', JSON.stringify(JSON.parse(body).refresh_token))
    window.location.href = '/merge'
  });
      // axios(authOptions)
      //       .then(token => {
      //         console.log(token);
      //       })
      //console.log(data);
      //console.log(new Buffer(data.client_id + ':' + data.client_secret).toString('base64'));

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
      </div>
    );
  }
}

export default Main;
