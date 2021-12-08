import React from 'react';
import './Button.css';

const Button = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className="btn-animate" onClick={onClick}>
        Buscar
      </button>
    </>
  );
};

export default Button;
