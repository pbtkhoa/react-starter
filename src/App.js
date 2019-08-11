import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import LoadingBar from 'react-redux-loading-bar';

import Loading from "./components/common/Loading";

import routes from "./routes";

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LoadingBar style={{ zIndex: "9999" }} />
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default App;
