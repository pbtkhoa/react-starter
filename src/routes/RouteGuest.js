import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteGuest = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !auth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

RouteGuest.propTypes = {
  auth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer.authenticated
});

export default connect(mapStateToProps)(RouteGuest);
