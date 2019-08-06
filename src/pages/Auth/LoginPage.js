import React from 'react';
import ReactTitle from 'react-meta-tags';
import { withTranslation } from 'react-i18next';
import AuthLayout from './../../components/Layouts/AuthLayout';
import LoginContainer from './../../containers/Auth/LoginContainer';
import withGuest from './../../utils/withGuest';

const LoginPage = ({ t, ...props }) => {
  return (
    <AuthLayout>
      <ReactTitle title={t('login.title')} />
      <LoginContainer {...props} />
    </AuthLayout>
  );
};

export default withGuest(withTranslation()(LoginPage));
