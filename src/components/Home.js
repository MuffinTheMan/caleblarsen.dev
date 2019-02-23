import React, { PureComponent } from 'react';
import TextInput from './formComponents/TextInput';
import SubmitInput from './formComponents/SubmitInput';
import CheckboxInput from './formComponents/CheckboxInput';
import logo from '../logo.svg';

export class Home extends PureComponent {
    constructor(props) {
    super(props);

    this.state = {
      theme: {
        backgroundColor: this.props.theme.backgroundColor,
        primary: this.props.theme.primary,
        alternatePrimary: this.props.theme.alternatePrimary,
        roundedBorders: this.props.theme.roundedBorders,
      }
    }
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
        <div>
            <img src={logo} className="logo" alt="logo" />
            <p>Welcome to caleb-larsen.com. I've only just begun my migration to React, so there's not much here at the moment (except for this amazing theme editor below). Check back again soon!</p>

            <div className='formContainer'>
              <form onSubmit={e => {
                e.preventDefault();
                this.props.updateTheme(this.state.theme);
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