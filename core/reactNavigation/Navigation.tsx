import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationServices';
import AppNavigator from './stacks/AppStack';

const ApplicationNavigator = () => {

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} />
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default ApplicationNavigator;
