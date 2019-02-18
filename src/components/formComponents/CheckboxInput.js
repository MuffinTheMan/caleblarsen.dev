import React, { PureComponent } from 'react';
import styled from 'styled-components';

class CheckboxInput extends PureComponent {
  render() {
    return (
      <input type='checkbox' {...this.props} className={this.props.className}/>
    );
  }
}

export default styled(CheckboxInput)`
`;