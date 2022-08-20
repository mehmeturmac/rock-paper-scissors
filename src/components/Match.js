import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGame } from '../context/gameContext';

export const Match = () => {
  const [counter, setCounter] = useState(3);
  const { game, player, computer } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev > 1 ? counter - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      {counter === 0 ? (
        <div className="flex mt-[50px] justify-between items-center sm:flex-col">
          <div className="flex flex-col m-2">
            <span className="uppercase text-xl font-normal mb-8 text-center text-white">You Picked</span>
            <div
              className={`bg-white bg-no-repeat bg-center w-[250px] h-[250px] sm:w-[170px] sm:h-[170px] rounded-[50%] border-[25px] border-${player} bg-${player} ${
                game === 'player' ? 'shadow-' + player : 'shadow-' + player
              } bg-50 `}
            ></div>
          </div>
          <div className="flex flex-col m-1 text-center">
            <span className="uppercase text-5xl font-bold mb-[15px] text-white">{game === 'player' ? 'You Win' : game === 'computer' ? 'You Lose' : 'Draw'}</span>
            <Link to="/" className="bg-white uppercase py-[10px] px-[20px] rounded-[5px] text-[0.8rem]" onClick={() => navigate('/')}>
              Play Again
            </Link>
          </div>
          <div className="flex flex-col m-2">
            <span className="uppercase text-xl font-normal mb-8 text-center text-white">The Hous Picked</span>
            <div
              className={`bg-white bg-no-repeat bg-center w-[250px] h-[250px] sm:w-[170px] sm:h-[170px] rounded-[50%] border-[25px] border-${computer} bg-${computer} ${
                game === 'computer' ? 'shadow-' + computer : 'shadow-' + computer
              } bg-50 `}
            ></div>
          </div>
        </div>
      ) : (
        <div className="flex mt-[50px] flex-nowrap justify-between items-center sm:flex-col">
          <div className="flex flex-col m-5">
            <span className="uppercase text-xl font-normal mb-8 text-center text-white">You Picked</span>
            <div className={`bg-white bg-no-repeat bg-center w-[250px] h-[250px] sm:w-[170px] sm:h-[170px] rounded-[50%] border-[25px] border-${player} shadow-${player} bg-${player} bg-50`}></div>
          </div>
          <div className="flex flex-col m-5">
            <span className="uppercase text-xl font-normal mb-8 text-center text-white">The Hous Picked</span>
            <div className="bg-[rgba(0,0,0,.3)] w-[250px] h-[250px] sm:w-[170px] sm:h-[170px] rounded-[50%] text-9xl flex items-center justify-center text-white font-bold">{counter}</div>
          </div>
        </div>
      )}
    </>
  );
};
