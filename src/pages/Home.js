import { useState } from 'react';
import { Game } from '../components/Game';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';

export const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto py-8 px-4">
      <Header />
      <Game />
      <div className="absolute left-0 bottom-4 text-white flex w-full justify-center sm:justify-start sm:left-4">
        <a href="https://github.com/mehmeturmac">Coded by Mehmet Urmaç</a>
      </div>
      <button onClick={() => setOpen(true)} className="hover:bg-[#97a2b4] transition-all absolute bottom-4 right-4 text-white border-4 border-[#97a2b4] px-6 rounded-lg">
        Rules
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};
