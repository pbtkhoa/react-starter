import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import withAuth from "utils/withAuth";
import { actLogout } from "redux/actions/authActions";
import Home from "components/Home";

class HomeContainer extends Component {
  onLogout = () => {
    const { history, onLogout } = this.props;

    onLogout().then(() => {
      history.push("/auth/login");
    });
  };
  render() {
    return <Home onLogout={this.onLogout} />;
  }
}

HomeContainer.propTypes = {
  history: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actLogout())
});

export default compose(
  withAuth,
  connect(
    null,
    mapDispatchToProps
  )
)(HomeContainer);
