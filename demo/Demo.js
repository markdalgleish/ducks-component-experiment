import { root } from './Demo.css';

import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

export default class Demo extends Component {

  render() {
    return (
      <div className={root}>
        <h1>Demo</h1>
        <h2>This is my component:</h2>
        <CounterContainer />
      </div>
    );
  }

};
