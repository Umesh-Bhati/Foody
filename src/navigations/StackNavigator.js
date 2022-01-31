import React, {useContext} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import {COLORS} from '../constants/themes';
import {Cart, Payment, ProductDetails, Search} from '../screens/Home';
import Icon from 'react-native-vector-icons/Feather';
import {CartContext} from '../context';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {cartData} = useContext(CartContext);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {backgroundColor: COLORS.darkGray},
      }}>
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={({navigation}) => ({
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={require('../assets/icons/menu.png')} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon size={25} name="shopping-cart" />
              {cartData.length ? (
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: 'orange',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: -5,
                    top: -5,
                  }}>
                  <Text>{cartData.length}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({navigation})=>({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon size={25} name="shopping-cart" />
              {cartData.length ? (
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: 'orange',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: -5,
                    top: -5,
                  }}>
                  <Text>{cartData.length}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          ),
        })}
        
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
