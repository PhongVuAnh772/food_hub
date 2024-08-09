// src/navigation/MainNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigation from './TabsNavigation';
import SocialAuthScreen from 'features/auth/screens/SocialAuthScreen';
import CreatingPIN from 'features/auth/screens/CreatingPIN';
import { RootStackParamList } from 'types/navigation';
import ReEnteringPIN from 'features/auth/screens/ReEnteringPIN';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SocialAuth"}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SocialAuth" component={SocialAuthScreen} />
      <Stack.Screen name="CreatingPIN" component={CreatingPIN} options={{ presentation: 'modal' }}/>
      <Stack.Screen name="ReEnteringPIN" component={ReEnteringPIN} />
      <Stack.Screen name="Main" component={MainTabNavigation} />
    </Stack.Navigator>
  );
};



export default MainNavigator;
