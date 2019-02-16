import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {defaultTheme} from '../constants/themes'

// activeClassName will not properly update if this is a PureComponent
class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.sharedProps = {
      activeClassName: 'active',
      exact: true
    };
  }
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <NavLink to='/' {...this.sharedProps}><li>Home</li></NavLink>
          <NavLink to='/about' {...this.sharedProps}><li>About</li></NavLink>
        </ul>
      </nav>
    );
  }
}

export default styled(NavigationBar)`
  position: relative;
  z-index: 2;

  ul {
    padding: 0;
    list-style-type: none;

    a {
      display: inline-block;
      padding: 10px 30px;
      transition: background-color 300ms;

      &.active, &:hover {
          background-color: ${defaultTheme.lightPrimaryBackgroundColor};
      }
    }
  }
`;