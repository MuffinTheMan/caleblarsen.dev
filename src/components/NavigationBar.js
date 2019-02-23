import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
          <NavLink to='/samples' {...this.sharedProps}><li>Samples</li></NavLink>
          <a href='https://github.com/MuffinTheMan/caleb-larsen.com' target='_blank' rel='noopener noreferrer'><li>Source Code</li></a>
        </ul>
      </nav>
    );
  }
}

export default styled(NavigationBar)`
  position: relative;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${props => props.theme.alternatePrimary};
  box-shadow: 0 1px 6px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    a {
      display: inline-block;
      padding: 15px 50px;
      transition: background-color 300ms;
      transform: skew(-16deg);
      background-color: ${props => props.theme.alternatePrimary};

      &.active, &:hover {
          li {
            color: ${props => props.theme.alternatePrimary};
          }
          background-color: ${props => props.theme.backgroundColor};
      }

      li {
        color: ${props => props.theme.backgroundColor};
        transform: skew(16deg);
      }
    }
  }
`;