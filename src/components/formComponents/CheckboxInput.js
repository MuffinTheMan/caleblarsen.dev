import React, { PureComponent } from 'react';
import styled from 'styled-components';

class CheckboxInput extends PureComponent {
  render() {
    const label = this.props.label;
    const props = {...this.props};
    delete props.label;

    return (
      <label className={`${props.className} container`}>
        {label}
        <input type='checkbox' {...props}/>
        <span className='checkmark'></span>
      </label>
    );
  }
}

export default styled(CheckboxInput)`
  /* The container */
  &.container {
    display: block;
    position: relative;
    padding-right: 5px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  &.container input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: -3px;
    height: 25px;
    width: 25px;
    background-color: white;
    border: solid #dddddd 1px;
    ${props => props.theme.roundedBorders ? 'border-radius: 5px' : null};
  }

  /* On mouse-over, add a grey background color */
  &.container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  &.container input:checked ~ .checkmark {
    background-color: ${props => props.theme.alternatePrimary};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  &.container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  &.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;