// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-content">
        {isFlipped ? card.image : '?'}
      </div>
    </div>
  );
};

export default Card;
