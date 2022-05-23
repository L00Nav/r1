import { useState } from 'react';
import './App.css';
import Bala from './Components/010/Bala';
//import randColor from './Functions/RandColour';

function App() 
{
  //Class stuff
  let cats = ['cat1', 'cat2'];
  
  const [number, setNumber] = useState(0);

  function increase()
  {
    setNumber(number + 1);
  }


  //1
  const [firstShanpe, setFirstShanpe] = useState('50%');

  function changeFirstShanpe()
  {
    setFirstShanpe((oldShanpe) => oldShanpe === '50%' ? '0' : '50%');
  }


  //2
  function rand(min, max) 
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [secondShanpeWidth, setSecondWidth] = useState('150px');

  const [secondShanpeRoundness, setSecondRoundness] = useState('0');

  const [secondRandNumber, setSecondNumber] = useState(rand(5, 25));

  function toggleSecondShanpe()
  {
    setSecondRoundness((oldShanpe) => oldShanpe === '50%' ? '0' : '50%');
    setSecondWidth((oldWidth) => oldWidth === '150px' ? '100px' : '150px');
  }

  function generateSecondNumber()
  {
    setSecondNumber(rand(5, 25));
  }


  //3
  const [thirdNumber, setThirdNumber] = useState(0);

  function changeThird(add)
  {
    if(add)
      setThirdNumber(thirdNumber + 1);
    else
      setThirdNumber(thirdNumber - 3);
  }


  //4
  const [fourthIncrement, setFourthIncrement] = useState([1]);
  const [fourthSquares, setFourthSquare] = useState([]);

  function addFourthSquare()
  {
    setFourthIncrement([...fourthIncrement, 1]);
    setFourthSquare([...fourthSquares, ...fourthIncrement]);
  }

  //5
  const [fifthSquares, setFifthSquares] = useState([]);

  function addFifthSquare(colore)
  {
    if (colore === 1)
      setFifthSquares([...fifthSquares, 'crimson']);
    else if (colore === 2)
      setFifthSquares([...fifthSquares, 'skyblue']);
    else if (!colore)
      setFifthSquares([]);
  }


  //2.1
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  //2.3
  function shanpeEveryOtherDog()
  {
    let dogges = [];
    for (let i = 0; i < dogs.length; i++)
    {
      let n = dogs[i];
      if(i % 2)
        dogges.push( <div key={i} className={"firstShanpe dogShanpe round"}>{n}</div>);
      else
        dogges.push( <div key={i} className={"firstShanpe dogShanpe"}>{n}</div>);
    }
    return dogges;
  }

  //2.4
  function discriminateByCapitalDogs()
  {
    let dogges = [];
    for (let i = 0; i < dogs.length; i++)
    {
      let n = dogs[i];
      if(n[0].toLowerCase() === n[0])
        dogges.push( <div key={i}>{n}</div>);
    }
    return dogges;
  }

  //2.5
  function howLongDaBois()
  {
    let dogges = [];
    for (let i = 0; i < dogs.length; i++)
      dogges.push(<div key={i}>{dogs[i].length}</div>);
    return dogges;
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>{number}</p>
        {cats.map((cat, i) => <div key={i}>{cat}</div>)}

        <h1>React Class State:</h1>
        <h2 className="ExNr">1:</h2>
        <div style={{borderRadius: firstShanpe}} className="firstShanpe"></div>
        <button onClick={changeFirstShanpe}>Change</button>

        <h2 className="ExNr">2:</h2>
        <div className="firstShanpe" style={{borderRadius: secondShanpeRoundness, width: secondShanpeWidth}}>
          {secondRandNumber}
        </div>
        <button onClick={toggleSecondShanpe}>Change</button>
        <button onClick={generateSecondNumber}>Random</button>

        <h2 className="ExNr">3:</h2>
        <h4 className="calmDown">{thirdNumber}</h4>
        <button onClick={() => changeThird(true)}>Plus</button>
        <button onClick={() => changeThird(false)}>Minus</button>

        <h2 className="ExNr">4:</h2>
        <button onClick={addFourthSquare}>Add</button>
        <div className="shanpeContainer">
          {
            fourthSquares.map((v, i) => <div key={i} className="firstShanpe"></div>)
          }
        </div>

        <h2 className="ExNr">5:</h2>
        <button onClick={ () => addFifthSquare(1) }>Add red</button>
        <button onClick={ () => addFifthSquare(2) }>Add blue</button>
        <button onClick={ () => addFifthSquare(0) }>Reset</button>
        <div className="shanpeContainer">
          {
            fifthSquares.map((c, i) => <div key={i} style={{backgroundColor: c}} className="firstShanpe"></div>)
          }
        </div>


        <h1>React Class State:</h1>
        <h2 className="ExNr">1:</h2>
        <div className='shanpeContainer'>
          {
            dogs.map((n, i) => <div key={i} className="firstShanpe dogShanpe">{n}</div>)
          }
        </div>
        
        <h2 className="ExNr">2:</h2>
        <div className='shanpeContainer'>
          {
            dogs.slice().sort(function(a, b){return a.length - b.length}).reverse().map(
              (n, i) => <div key={i}  className={"firstShanpe dogShanpe round"}>{i}. {n}</div>
              )
          }
        </div>
        
        <h2 className="ExNr">3:</h2>
        <div className='shanpeContainer'>
          {shanpeEveryOtherDog()}
        </div>
        
        <h2 className="ExNr">4:</h2>
        <div>
          {discriminateByCapitalDogs()}
        </div>
        
        <h2 className="ExNr">5:</h2>
        <div>
          {howLongDaBois()}
        </div>


        <h1>React List (naval nonsense):</h1>
        <h2 className="ExNr">1:</h2>
        <Bala></Bala>
      </header>
    </div>
  );
}

export default App;
