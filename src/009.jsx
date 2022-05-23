//import logo from './logo.svg';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/Kurmis';
import './App.css';
import Zuikis from './Components/009/Zuikis';
import Hpropt from './Components/009/PropTest';
import Zebrai from './Components/009/Zebrai';
import AnyAnimal from './Components/009/Anyanimal';
import CE from './Components/009/ColorAnimals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <Hpropt text="The entire zoo"></Hpropt>
        <Zebrai colore="1"></Zebrai>
        <Zebrai colore="2"></Zebrai>
        <AnyAnimal text1="Dragon" text2="Platypus"></AnyAnimal>
        <CE text1="Also a dragon" text2="Plural for octopus is octopuses, not octopi. This is because English grammar is an absolute mess" colore="Purple"></CE>
      </header>
    </div>
  );
}

export default App;
