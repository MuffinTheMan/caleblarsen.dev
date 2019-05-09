import React, { Component } from 'react';
import {defaultTheme} from './constants/themes';
import StyledContainer from './components/StyledContainer';
import * as Sentry from '@sentry/browser';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: defaultTheme,
      error: null,
      eventId: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({eventId})
    });
  }

  updateTheme(theme) {
    this.setState({theme});
  }

  render() {
    if (this.state.error) {
      return (
        <a onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</a>
      );
    } else {
      return <StyledContainer theme={this.state.theme} updateTheme={(theme) => this.updateTheme(theme)}/>;
    }
  }
}