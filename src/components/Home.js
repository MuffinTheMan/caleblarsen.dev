import React, { Component } from 'react';
import logo from '../logo.svg';

export class Home extends Component {
  render() {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <p>Welcome to caleb-larsen.com. I've only just begun my migration to React, so there's nothing here at the moment. Check back again soon!</p>
        </header>
    );
  }
}