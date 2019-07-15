import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    loadingBar: loadingBarReducer,
    form: formReducer,
    authReducer
  });
