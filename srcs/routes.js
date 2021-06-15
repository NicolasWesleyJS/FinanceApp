import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import main from './pages/main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const StackScreens = () => {
  return (
    <Stack.Navigator 
      initialRouteName='main'
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen name="main" component={main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default Routes;
