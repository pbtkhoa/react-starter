import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactTitle from "react-meta-tags";
import { withTranslation } from "react-i18next";

import AuthLayout from "layouts/AuthLayout";
import Form from "./Form";

const AuthLogin = ({ t, onLogin }) => (
  <AuthLayout>
    <ReactTitle title={t("login.title")} />
    <Form onSubmit={onLogin} />
    <Link to="/">Home</Link>
  </AuthLayout>
);

AuthLogin.propTypes = {
  t: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default withTranslation()(AuthLogin);
