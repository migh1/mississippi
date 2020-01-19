import React from 'react';
import './styles.css';

function LocalButton({ id, handleClick, lat, lon }) {
  return (
    <button
      type="button"
      id={`btnLocal${id}`}
      onClick={() => handleClick({ lat, lon, id })}
    >
      {`Local ${id}`}
    </button>
  );
};

export default LocalButton;
