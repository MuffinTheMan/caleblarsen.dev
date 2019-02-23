import React, { Component } from 'react';
import styled from 'styled-components';
import {Home} from './Home';
import {About} from './About';
import {Samples} from './Samples';
import NavigationBar from './NavigationBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class StyledContainer extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.className}>
          <div className='main-content'>
            <NavigationBar theme={this.props.theme}/>
            <Route exact
                   path='/'
                   render={() => <Home theme={this.props.theme}
                                       setThemeProp={(prop, value) => this.setThemeProp(prop, value)}
                                       updateTheme={(theme) => this.props.updateTheme(theme)}
                                  />}
            />
            <Route exact path="/about" component={About}/>
            <Route exact path="/samples" component={Samples}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default styled(StyledContainer)`
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundColor};

  position: absolute;
  min-height: 100vh;
  width: 100vw;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  text-align: center;

  div.main-content {
    margin: 80px 10vw 0 10vw;

    img.logo {
      animation: App-logo-spin infinite 20s linear;
      height: 40vmin;
    }

    div.formContainer {
      margin: 30px 0;

      form {
        display: inline-block;
        text-align: left;
        border: solid ${props => props.theme.alternatePrimary} 2px;
        ${props => props.theme.roundedBorders ? 'border-radius: 5px' : null};
        padding: 25px;
        max-width: 500px;

        h3 {
          margin-top: 0;
        }

        label {
          display: block;
          margin-bottom: 12px;
        }

        input[type=text] {
          margin-left: 15px;
        }
      }
    }
  }

  // Make links have no style by default
  a {
    text-decoration: none;
    &, &:visited {
      color: ${props => props.theme.primary};
    }
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