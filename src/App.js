import React, { Component } from 'react';
import styled from 'styled-components';
import {Home} from './components/Home';
import {About} from './components/About';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.className}>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default styled(App)`
  color: ${props => props.theme.primaryFontColor};
  background-color: ${props => props.theme.backgroundColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  text-align: center;

  header {
    padding: 0 30px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
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