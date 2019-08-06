import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default Component => {
  class WithAuth extends React.Component {
    render() {
      if (this.props.auth) {
        return <Component {...this.props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: this.props.location }
            }}
          />
        );
      }
    }
  }

  const mapStateToProps = state => ({
    auth: state.authReducer.authenticated
  });

  return connect(
    mapStateToProps,
    null
  )(WithAuth);
};
