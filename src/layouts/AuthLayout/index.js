import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthLayout extends Component {
  render() {
    let { children } = this.props;
    return (
      <div className="auth-page">
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
