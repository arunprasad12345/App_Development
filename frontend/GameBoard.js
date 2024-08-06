// // src/GameBoard.js
// import React, { useState, useEffect } from 'react';
// import './GameBoard.css';
// import Card from './Card';
// import Navbar from './layouts/navbar/Navbar';

// const initialCards = [
//   { id: 1, image: '🍎', matched: false },
//   { id: 2, image: '🍌', matched: false },
//   { id: 3, image: '🍇', matched: false },
//   { id: 4, image: '🍉', matched: false },
//   { id: 5, image: '🍎', matched: false },
//   { id: 6, image: '🍌', matched: false },
//   { id: 7, image: '🍇', matched: false },
//   { id: 8, image: '🍉', matched: false },
//   { id: 9, image: '🍓', matched: false },
// ];

// const GameBoard = () => {
//   const [cards, setCards] = useState([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     // Shuffle cards
//     const shuffledCards = initialCards
//       .map(card => ({ ...card, id: Math.random() }))
//       .sort(() => 0.5 - Math.random());
//     setCards(shuffledCards);
//   }, []);

//   const handleCardClick = (card) => {
//     if (flippedCards.length < 2 && !flippedCards.includes(card)) {
//       setFlippedCards([...flippedCards, card]);
//     }
//   };

//   useEffect(() => {
//     if (flippedCards.length === 2) {
//       const [firstCard, secondCard] = flippedCards;
//       if (firstCard.image === secondCard.image) {
//         setMatchedCards([...matchedCards, firstCard.image]);
//         setScore(score + 1);
//         setFlippedCards([]);
//       } else {
//         setTimeout(() => setFlippedCards([]), 1000);
//       }
//     }
//   }, [flippedCards]);
//   return (
//     <div>
//       <Navbar darkTheme={true} darkText={true} /> {/* Add Navbar here */}
//       <div className="game-board">
//         <br></br>
//         <div className="score">Score: {score}</div>
//         {score >= 4 ? (
//           <div className="win-message">You Won!</div>
//         ) : (
//           cards.map((card) => (
//             <Card
//               key={card.id}
//               card={card}
//               isFlipped={flippedCards.includes(card) || matchedCards.includes(card.image)}
//               onClick={() => handleCardClick(card)}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
// export default GameBoard;
import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import Card from './Card';
import Navbar from './layouts/navbar/Navbar';

const initialCards = [
  { id: 1, image: '🍎', matched: false },
  { id: 2, image: '🍌', matched: false },
  { id: 3, image: '🍇', matched: false },
  { id: 4, image: '🍉', matched: false },
  { id: 5, image: '🍎', matched: false },
  { id: 6, image: '🍌', matched: false },
  { id: 7, image: '🍇', matched: false },
  { id: 8, image: '🍉', matched: false },
  { id: 9, image: '🍓', matched: false },
];

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Set initial time in seconds

  useEffect(() => {
    // Shuffle cards
    const shuffledCards = initialCards
      .map(card => ({ ...card, id: Math.random() }))
      .sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    // Timer countdown logic
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      setFlippedCards([...flippedCards, card]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.image === secondCard.image) {
        setMatchedCards([...matchedCards, firstCard.image]);
        setScore(score + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  }, [flippedCards]);

  return (
    <div>
      <Navbar darkTheme={true} darkText={true} /> {/* Add Navbar here */}
      <div className="game-board">
        <div className="score">Score: {score}</div>
        {score >= 4 ? (
          <div className="win-message">You Won!</div>
        ) : (
          timeLeft > 0 ? (
            cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                isFlipped={flippedCards.includes(card) || matchedCards.includes(card.image)}
                onClick={() => handleCardClick(card)}
              />
            ))
          ) : (
            <div className="lose-message">Time's Up! You Lost!</div>
          )
        )}
        <div className="timer">Time Left: {timeLeft} seconds</div>
      </div>
    </div>
  );
};

export default GameBoard;

