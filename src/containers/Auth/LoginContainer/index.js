import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { actLogin } from "redux/actions/authActions";
import AuthLogin from "components/Auth/Login";
import withGuest from "utils/withGuest";

class LoginPage extends Component {
  onLogin = values => {
    const { history, onLogin } = this.props;

    onLogin(values).then(() => {
      history.push("/");
    });
  };
  render() {
    return <AuthLogin onLogin={this.onLogin} />;
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: values => dispatch(actLogin(values))
});

export default compose(
  withGuest,
  connect(
    null,
    mapDispatchToProps
  )
)(LoginPage);
