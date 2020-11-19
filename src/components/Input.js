import React from 'react';
import './styles/Input.scss';

export const Input = (props) => {
  return (
    <label className="Input">
      <span className="Input__label">{props.label}</span>
      <span className="Input__input">
        {props.children}
      </span>
    </label>
  )
}
