import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../src';

const selectState = state => ({
  count: state.count
});

export default connect(selectState)(Counter);
