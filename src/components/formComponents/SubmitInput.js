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
  border: solid ${props => props.theme.alternatePrimary} 1px;
  ${props => props.theme.roundedBorders ? 'border-radius: 5px' : null};
  padding: 10px;
  font-size: 1rem;
  color: ${props => props.theme.backgroundColor};
  background-color: ${props => props.theme.alternatePrimary};

  &:hover {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
    cursor: pointer;
  }
`;