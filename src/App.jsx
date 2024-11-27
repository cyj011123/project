import { useState } from 'react';

import Player from './conponents/Player';
import GameBoard from './conponents/GameBoard';
import Log from './conponents/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curGameBoard) => (curGameBoard === 'X' ? 'O' : 'X'));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName="player1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initName="player2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
