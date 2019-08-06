import React from 'react';
import HomeContainer from './../containers/HomeContainer';
import withAuth from './../utils/withAuth';

const HomePage = props => {
  return <HomeContainer {...props} />;
};

export default withAuth(HomePage);
