import react, { Component } from 'react';
import './App.css';
import Die from './Die';
import RollDice from './RollDice';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Die /> */}
        <RollDice />
      </div>
    );
  }
}

export default App;
