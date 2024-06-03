import * as React from 'react';
import {isLoggedIn} from './source/boot';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationStack} from './screens/Authentication';

const app = () => {
  return isLoggedIn() ? (
    <NavigationContainer></NavigationContainer>
  ) : (
    <AuthenticationStack />
  );
};

export default app;
