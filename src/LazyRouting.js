import LoadableProgress from './containers/Common/LoadableProgressContainer';

export const LoginPage = LoadableProgress({
  loader: () => import('./pages/Auth/LoginPage')
});

export const HomePage = LoadableProgress({
  loader: () => import('./pages/HomePage')
});
