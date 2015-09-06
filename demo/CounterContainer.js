import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../src';
import { increment, decrement } from './flux/ducks/counter';

const provideProps = state => ({
  count: state.count
});

const provideActions = dispatch => ({
  handleIncrement: () => dispatch(increment()),
  handleDecrement: () => dispatch(decrement())
});

export default connect(provideProps, provideActions)(Counter);
