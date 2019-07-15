import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactTitle } from 'react-meta-tags';
import { withTranslation } from 'react-i18next';

import { actLogin } from 'redux/actions/authActions';

import AuthLayout from 'layouts/AuthLayout';
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
    const { t } = this.props;
    return (
      <AuthLayout>
        <ReactTitle title={t('login.title')} />
        <LoginForm onSubmit={this.onLogin} />
      </AuthLayout>
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
)(withTranslation()(LoginPage));
