import React from 'react';
import './styles/Button.scss';

export const Button = (props) => {
  return (
    <button className="Button">
      {props.label}
    </button>
  )
}
