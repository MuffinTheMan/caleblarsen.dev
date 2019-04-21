import React, { PureComponent } from 'react';
import TextInput from './formComponents/TextInput';
import SubmitInput from './formComponents/SubmitInput';
import CheckboxInput from './formComponents/CheckboxInput';
import logo from '../logo.svg';

export class Home extends PureComponent {
    constructor(props) {
    super(props);

    this.themeUpdateTimeout = null;
    // Track if theme has changed since last calling this.props.updateTheme()
    this.hasThemeChanged = false;

    this.state = {
      theme: {
        backgroundColor: this.props.theme.backgroundColor,
        primary: this.props.theme.primary,
        alternatePrimary: this.props.theme.alternatePrimary,
        roundedBorders: this.props.theme.roundedBorders,
      }
    }
  }

  updateTheme() {
    if (this.hasThemeChanged) {
      this.props.updateTheme(this.state.theme);
      this.hasThemeChanged = false;
    }
  }

  setThemeProp(prop, value) {
    this.hasThemeChanged = true;

    this.setState(state => {
      const theme = Object.assign({}, state.theme);
      theme[prop] = value;
      return {
        theme
      };
    });

    // Update theme automatically after 2 seconds of inactivity following a state.theme change
    clearTimeout(this.themeUpdateTimeout);
    this.themeUpdateTimeout = setTimeout(() => {
      this.updateTheme();
    }, 2000,);

  }

  render() {
    return (
        <div>
            <img src={logo} className="logo" alt="logo" />
            <p>Welcome to my playground. I've only recently begun my migration to React, so there's not much here at the moment (except for this amazing theme editor below). Check back again soon!</p>
            <p>For the record, I'm no designer...so I'm sorry that this site isn't exactly pleasing to the eye :(</p>

            <div className='formContainer'>
              <form onSubmit={e => {
                e.preventDefault();
                this.updateTheme();
              }}>
                <h3>Real-time Theme Editor</h3>
                <p>Enter any valid CSS color (hex, rbg, etc) and hit enter or click 'Update Theme' (or just wait a couple seconds) to see the theme update in real-time!</p>
                <label>
                  Background Color:
                  <TextInput value={this.state.theme.backgroundColor}
                            onChange={e => this.setThemeProp('backgroundColor', e.target.value)}
                            theme={this.props.theme}
                  />
                </label>
                <label>
                  Primary Color:
                  <TextInput value={this.state.theme.primary}
                            onChange={e => this.setThemeProp('primary', e.target.value)}
                            theme={this.props.theme}
                  />
                </label>
                <label>
                  Alternate Primary Color:
                  <TextInput value={this.state.theme.alternatePrimary}
                            onChange={e => this.setThemeProp('alternatePrimary', e.target.value)}
                            theme={this.props.theme}
                  />
                </label>
                  <CheckboxInput checked={this.state.theme.roundedBorders}
                                onChange={e => this.setThemeProp('roundedBorders', e.target.checked)}
                                theme={this.props.theme}
                                label='Rounded Borders?'
                  />
                <SubmitInput value='Update Theme'
                            theme={this.props.theme}
                />
              </form>
            </div>
        </div>
    );
  }
}