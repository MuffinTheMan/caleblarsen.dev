import React, { PureComponent } from 'react';
import styled from 'styled-components';

class TextInput extends PureComponent {
  render() {
    return (
      <input type='text' {...this.props} className={this.props.className}/>
    );
  }
}

export default styled(TextInput)`
    border: solid #dddddd 1px;
    padding: 10px;
    font-size: 1rem;
    color: ${props => props.theme.primaryFontColor}
`;