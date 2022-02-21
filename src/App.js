import './App.css';
import Header from './components/header/Header';
import KeyBoard from './components/keyBoard/KeyBoard';
import Messages from './components/messages/Messages';
import Tile from './components/tile/Tile';

function App() {
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
