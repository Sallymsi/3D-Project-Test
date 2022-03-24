import React from 'react';
import '../styles/sass/main.scss';

const Button = ({label, onClick, className}) => {
  return (
    <div>
        <button className={className} onClick={onClick}>{label}</button>
    </div>
  );
}

export default Button;