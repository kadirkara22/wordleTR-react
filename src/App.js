import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import KeyBoard from './components/keyBoard/KeyBoard';
import Messages from './components/messages/Messages';
import Tile from './components/tile/Tile';
import { chooseWord } from './redux/lettersSlice';
import Words from './api/word.json'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1300) - 41;
    dispatch(chooseWord(Words.words[randomNumber]))
  }, [])
  return (
    <div className="game-container">
      <Header />
      <Messages />
      <Tile />
      <KeyBoard />
    </div>
  );
}

export default App;
