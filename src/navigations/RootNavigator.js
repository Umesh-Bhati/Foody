import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';



const Drawer = createDrawerNavigator();

const RootNavigator = () => {

  return (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerShown:false
        }} >
          <Drawer.Screen name="Home" component={StackNavigator} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
