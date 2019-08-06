import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';

class AuthLayout extends Component {
  render() {
    let { children } = this.props;
    return (
      <div className="auth-page">
        <LoadingBar style={{ zIndex: '9999' }} />
        {children}
      </div>
    );
  }
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AuthLayout;
