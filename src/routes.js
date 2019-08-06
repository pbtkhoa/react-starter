import { LoginPage, HomePage } from './LazyRouting';

const Routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/auth/login',
    exact: true,
    component: LoginPage
  }
];

export default Routes;
