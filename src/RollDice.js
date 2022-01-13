import React, { Component } from 'react';
import Die from './Die';
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Die1: 'one',
      Die2: 'two',
    };
    this.roll = this.roll.bind(this);
  }
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  roll() {
    let newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    let newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({ Die1: newDice1, Die2: newDice2 });
  }

  render() {
    return (
      <div>
        <Die face={this.state.Die1} />
        <Die face={this.state.Die2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
