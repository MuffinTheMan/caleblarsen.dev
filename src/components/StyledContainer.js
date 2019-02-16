import React, { Component } from 'react';
import styled from 'styled-components';
import {Home} from './Home';
import {About} from './About';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavigationBar from './NavigationBar';

class StyledContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {
        backgroundColor: this.props.theme.backgroundColor,
        primaryFontColor: this.props.theme.primaryFontColor,
        lightPrimaryBackgroundColor: this.props.theme.lightPrimaryBackgroundColor
      }
    }
  }
  updateTheme() {
    this.props.updateTheme(this.state.theme);
  }

  setThemeProp(prop, value) {
    this.setState(state => {
      const theme = Object.assign({}, state.theme);
      theme[prop] = value;
      return {
        theme
      };
    })
  }

  render() {
    return (
      <Router>
        <div className={this.props.className}>
          <NavigationBar theme={this.props.theme}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>

          <div className='formContainer'>
          <form onSubmit={e => {
            e.preventDefault();
            this.updateTheme();
          }}>
            <label>
              Background Color:
              <input type='text'
                     value={this.state.theme.backgroundColor}
                     onChange={e => this.setThemeProp('backgroundColor', e.target.value)}
              />
            </label>
            <label>
              Primary Font Color:
              <input type='text'
                     value={this.state.theme.primaryFontColor}
                     onChange={e => this.setThemeProp('primaryFontColor', e.target.value)}
              />
            </label>
            <label>
              Light Primary Background Color:
              <input type='text'
                     value={this.state.theme.lightPrimaryBackgroundColor}
                     onChange={e => this.setThemeProp('lightPrimaryBackgroundColor', e.target.value)}
              />
            </label>
            <input type="submit" value="Update Theme"/>
          </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default styled(StyledContainer)`
  color: ${props => props.theme.primaryFontColor};
  background-color: ${props => props.theme.backgroundColor};

  position: absolute;
  min-height: 100vh;
  width: 100vw;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  text-align: center;

  div.formContainer {
    margin: 30px 0;

    form {
      display: inline-block;
      text-align: left;
      border: solid ${props => props.theme.lightPrimaryBackgroundColor} 2px;
      padding: 25px;

      label {
        display: block;
        margin-bottom: 12px;
      }

      input[type=text] {
        margin-left: 15px;
      }
    }
  }

  // Make links have no style by default
  a {
    text-decoration: none;
    &, &:visited {
      color: ${props => props.theme.primaryFontColor};
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