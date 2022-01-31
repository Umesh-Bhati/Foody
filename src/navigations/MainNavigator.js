import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

//Local
import {COLORS} from '../constants/themes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History, Home, Like, Profile } from '../screens';
import { icons } from '../constants';


const Tab = createBottomTabNavigator();


const MainNavigator = () => {
  return (

    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard:true,
      tabBarShowLabel:false,
      tabBarStyle:{
          backgroundColor:COLORS.darkGray,
          borderTopWidth:0,
          elevation:0
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
          tabBarIcon: ({focused})=>
              <Image source={icons.home}  style={{
                  tintColor: focused ? COLORS.primary : null,
                  width : focused ? 30 : 25,
                  height: focused ? 30 : 25,
                  resizeMode:"contain"
              }} />
      }}
     
    />
    <Tab.Screen name="Like" component={Like}   options={{
          tabBarIcon: ({focused})=>
              <Image source={icons.heart}  style={{
                  tintColor: focused ? COLORS.primary : null,
                  width : focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  resizeMode:"contain"
              }} />
          
      }} />
    <Tab.Screen name="Profile" component={Profile}    options={{
          tabBarIcon: ({focused})=>(
              <Image source={icons.user}  style={{
                  tintColor: focused ? COLORS.primary : null,
                  width : focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  resizeMode:"contain"
              }} />),
         
          
      }} />
    <Tab.Screen name="History" component={History}  options={{
          tabBarIcon: ({focused})=>
              <Image source={icons.watch}  style={{
                  tintColor: focused ? COLORS.primary : null,
                  width : focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  resizeMode:"contain"
              }} />
          
      }} />
  </Tab.Navigator>



   
  );
};

export default MainNavigator;
