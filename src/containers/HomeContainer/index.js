import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actLogout } from 'redux/actions/authActions';

class HomeContainer extends Component {
  onLogout = () => {
    const { history, onLogout } = this.props;

    onLogout().then(() => {
      history.push('/auth/login');
    });
  };
  render() {
    return (
      <div>
        Home
        <Link to="/auth/login">Login</Link>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
