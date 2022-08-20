import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

const data = ['rock', 'paper', 'scissors'];

const randomPick = () => {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
};

const checkMatch = (player, computer) => {
  if (player === computer) {
    return 'draw';
  }
  if (player === 'rock') {
    return computer === 'scissors' ? 'player' : 'computer';
  }
  if (player === 'paper') {
    return computer === 'rock' ? 'player' : 'computer';
  }
  if (player === 'scissors') {
    return computer === 'paper' ? 'player' : 'computer';
  }
};

export const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [game, setGame] = useState([]);
  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    setPlayer(e);
    setComputer(randomPick());
  };

  useEffect(() => {
    if (player && computer) {
      const result = checkMatch(player, computer);
      if (result === 'computer') setScore((prev) => prev - 1);
      if (result === 'player') setScore((prev) => prev + 1);
      setGame(result);
    }
  }, [player, computer]);

  const values = { game, player, computer, score, handleClick };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
