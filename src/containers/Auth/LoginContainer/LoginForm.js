import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{t('login.label.email')}</label>
        <div>
          <Field name="email" component="input" type="email" />
        </div>
      </div>
      <div>
        <label>{t('login.label.password')}</label>
        <div>
          <Field name="password" component="input" type="password" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          {t('login.btn.login')}
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login'
})(LoginForm);
