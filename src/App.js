import React, { Component } from 'react';
import {defaultTheme} from './constants/themes';
import StyledContainer from './components/StyledContainer';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: defaultTheme
    }
  }

  updateTheme(theme) {
    this.setState({theme});
  }

  render() {
    return (
      <StyledContainer theme={this.state.theme} updateTheme={(theme) => this.updateTheme(theme)}/>
    );
  }
}