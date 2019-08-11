import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Loading from "components/common/Loading";
import { actCheckAuth } from "redux/actions/authActions";
import { getToken } from "./localStorage";

export default Component => {
  class WithAuth extends React.Component {
    state = {
      isLoading: true
    };

    componentDidMount() {
      const { checkAuth } = this.props;
      const token = getToken();
      checkAuth(token).then(() => {
        this.setState({ isLoading: false });
      });
    }

    render() {
      const { isLoading } = this.state;
      const { props } = this;
      if (isLoading) {
        return <Loading />;
      }

      if (props.auth) {
        return <Component {...props} />; // eslint-disable-line
      }
      return (
        <Redirect
          to={{
            pathname: "/auth/login",
            state: { from: props.location }
          }}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    auth: state.authReducer.authenticated
  });

  const mapDispatchToProps = dispatch => ({
    checkAuth: token => dispatch(actCheckAuth(token))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithAuth);
};
