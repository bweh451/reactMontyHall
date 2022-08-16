//Imported the following components for use below
import Header from "./components/Header"
import GameController from './components/GameController';

//App function
function App() {

  //Returns the following
  return (
    <div className="App">
      <div className="headGridContainer">
        <Header />
      </div>
      <GameController />
    </div>
  );
}

export default App;
