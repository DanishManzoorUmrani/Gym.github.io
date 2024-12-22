import React from 'react';
import img from '../assets/react.svg'

function Logos() {
  return (
    <div className="logos-container">
      <h2>As seen in</h2>
      <div className="logos">
        <img src={img}alt="Tatler" className="logo" />
        <img src={img} alt="The Time" className="logo" />
        <img src={img} alt="ES" className="logo black-bg" />
        <img src={img} alt="ES" className="logo" />
      </div>
    </div>
  );
}

export default Logos;
