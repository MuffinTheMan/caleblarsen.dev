import React, { PureComponent } from 'react';
import styled from 'styled-components';

class SubmitInput extends PureComponent {
  render() {
    return (
      <input type='submit' {...this.props} className={this.props.className}/>
    );
  }
}

export default styled(SubmitInput)`
  border: solid ${props => props.theme.lightPrimaryBackgroundColor} 1px;
  padding: 10px;
  font-size: 1rem;
  color: ${props => props.theme.backgroundColor};
  background-color: ${props => props.theme.lightPrimaryBackgroundColor};

  &:hover {
    color: ${props => props.theme.primaryFontColor};
    background-color: ${props => props.theme.backgroundColor};
    cursor: pointer;
  }
`;