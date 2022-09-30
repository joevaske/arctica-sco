import React from 'react';
import './Button.scss';

const Button = ({ bgColor, text }) => {
  return <button style={{ backgroundColor: bgColor }}>{text}</button>;
};

export default Button;
