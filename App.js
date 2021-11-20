/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './containers/HomeScreen';
import BrandDetails from './containers/BrandDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Brands() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={BrandDetails} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
        <Tab.Screen
          name="Brands"
          component={Brands}
          options={{headerShown: false}}
        />
        {/*<Tab.Screen name="Profile" component={BrandDetails} />*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
