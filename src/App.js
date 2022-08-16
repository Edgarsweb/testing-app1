
import './App.css';
import Loader from './components/Loader/Loader';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import TournamentItem from './components/TournamentItem/TournamentItem';

function App() {
  return (
    <div className="App">
      <h1>Poker</h1>
      <Loader />
      <PlayerInfo 
        userName = {"LogoUserName"}
      />
      <TournamentItem />
      
    </div>
  );
}

export default App;
