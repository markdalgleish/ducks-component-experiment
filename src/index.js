import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired
  };

  render() {
    const { count, handleIncrement, handleDecrement } = this.props;

    return (
      <div>
        <span>Count: { count }</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    );
  }

};
