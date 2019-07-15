import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { actCheckAuth } from './redux/actions/authActions';
import RouteGuest from './routes/RouteGuest';
import RouteAuth from './routes/RouteAuth';

import { LoginPage, HomePage } from './LazyRouting';

import { getToken } from './utils/localStorage';

export default class App extends Component {
  constructor(props) {
    super(props);
    const token = getToken();
    if (token) {
      this.state = {
        isTransitionLoading: true
      };
      props.store.dispatch(actCheckAuth(token)).then(() => {
        this.setState({
          isTransitionLoading: false
        });
      });
    } else {
      this.state = {
        isTransitionLoading: false
      };
    }
  }

  render() {
    const { store, history } = this.props;
    const { isTransitionLoading } = this.state;
    if (isTransitionLoading) {
      return null;
    } else {
      return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <RouteGuest path="/auth/login" component={LoginPage} exact />
              <RouteAuth path="/" component={HomePage} exact/>
            </Switch>
          </ConnectedRouter>
        </Provider>
      );
    }
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
