import React, { Component } from 'react';
import styled from 'styled-components';
import {Home} from './components/Home';
import {About} from './components/About';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import {defaultTheme} from './constants/themes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.className}>
          <NavigationBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default styled(App)`
  color: ${defaultTheme.primaryFontColor};
  background-color: ${defaultTheme.backgroundColor};

  position: absolute;
  min-height: 100vh;
  width: 100vw;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  text-align: center;

  // Make links have no style by default
  a {
    text-decoration: none;
    &, &:visited {
      color: ${defaultTheme.primaryFontColor};
    }
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