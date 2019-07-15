import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  render() {
    return <div>Home</div>;
  }
}

export default connect(
  null,
  null
)(HomeContainer);
