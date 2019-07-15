import LoadableProgress from './containers/Common/LoadableProgressContainer';

export const LoginPage = LoadableProgress({
  loader: () => import('./containers/Auth/LoginContainer')
});

export const HomePage = LoadableProgress({
    loader: () => import('./containers/HomeContainer')
  });