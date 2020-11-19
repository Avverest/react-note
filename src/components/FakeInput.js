import React from 'react';
import './styles/FakeInput.scss';

export const FakeInput = (props) => {
  return (
    <label className="FakeInput">
      <span className="FakeInput__label">{props.label}</span>
      <span className="FakeInput__input">
        {props.children}
      </span>
    </label>
  )
}
