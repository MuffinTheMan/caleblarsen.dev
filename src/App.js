import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className={`${this.props.className} App`}>
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>Welcome to caleb-larsen.com. I've only just begun my migration to React, so there's nothing here at the moment. Check back again soon!</p>
        </header>
      </div>
    );
  }
}

export default styled(App)`
  text-align: center;

  header {
    padding: 0 30px;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  img.logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;