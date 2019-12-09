import React, {useState} from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar'
import GameComponent from './components/Game/Game'

function App() {
  const handleClick = () => {
    setGame(true)
    document.getElementById("start-game-button").style.display = "none"
  }
  const [game, setGame] = useState(false);
  return (
    <div className="App">
      <SideNavBar />
      <div className="game-start">
        <p>Here you can benefit our new mini-game. The ideea is to press buttons that appears, as fast as you can. You need to hit 200 times. Good Luck</p>
        <button id="start-game-button" onClick={handleClick}>START</button>
        {game ? <GameComponent />: null}
      </div>
    </div>
  );
}

export default App;
