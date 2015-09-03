import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired
  };

  render() {
    const { count } = this.props;

    return <div>Count: { count }</div>;
  }

};
