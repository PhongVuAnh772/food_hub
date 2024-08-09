import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from './hooks/useTheme';
import MainNavigator from 'navigators/MainNavigation';

const Root = () => {
  const {navigationTheme} = useTheme();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  const setNavigationReady = useCallback(() => {
    setIsNavigationReady(true);
  }, []);
  return (
    <NavigationContainer
       theme={navigationTheme}  
      onReady={setNavigationReady}>
      {/* <AuthProvider> */}
      <MainNavigator />
      {/* </AuthProvider> */}
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
