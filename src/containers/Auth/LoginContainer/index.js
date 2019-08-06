import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actLogin } from 'redux/actions/authActions';

import LoginForm from './LoginForm';

class LoginPage extends Component {
  state = {
    isSubmitting: false,
    dataResponse: null
  };

  onLogin = values => {
    const { history, onLogin } = this.props;

    onLogin(values).then(() => {
      history.push('/');
    });
  };
  render() {
    return (
      <>
        <LoginForm onSubmit={this.onLogin} />
        <Link to="/">Home</Link>
      </>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: values => dispatch(actLogin(values))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
