import React, { Component } from 'react';
import styled from 'styled-components';
import {Home} from './Home';
import {About} from './About';
import {Samples} from './Samples';
import NavigationBar from './NavigationBar';
import TextInput from './formComponents/TextInput';
import SubmitInput from './formComponents/SubmitInput';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
          <Route exact path="/samples" component={Samples}/>

          <div className='formContainer'>
          <form onSubmit={e => {
            e.preventDefault();
            this.updateTheme();
          }}>
            <h3>Real-time Theme Editor</h3>
            <p>Enter any valid CSS color (hex, rbg, etc) and hit enter or click 'Update Theme' to see the theme update in real-time!</p>
            <label>
              Background Color:
              <TextInput value={this.state.theme.backgroundColor}
                         onChange={e => this.setThemeProp('backgroundColor', e.target.value)}
                         theme={this.props.theme}
              />
            </label>
            <label>
              Primary Font Color:
              <TextInput value={this.state.theme.primaryFontColor}
                         onChange={e => this.setThemeProp('primaryFontColor', e.target.value)}
                         theme={this.props.theme}
              />
            </label>
            <label>
              Light Primary Background Color:
              <TextInput value={this.state.theme.lightPrimaryBackgroundColor}
                         onChange={e => this.setThemeProp('lightPrimaryBackgroundColor', e.target.value)}
                         theme={this.props.theme}
              />
            </label>
            <SubmitInput value='Update Theme'
                         theme={this.props.theme}
            />
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
  padding: 0 10vw;

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