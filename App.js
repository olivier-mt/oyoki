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
import messaging from '@react-native-firebase/messaging';
import {Image, Platform, Text} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './containers/HomeScreen';
import BrandDetails from './containers/BrandDetails';
import WebViewScreen from './containers/WebViewScreen';
import Options from './containers/Options';
import Contact from './containers/Contact';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faBars, faUser} from '@fortawesome/free-solid-svg-icons';

import Logo from './assets/img/logo.png';

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
      <Stack.Screen
        name="Details"
        component={BrandDetails}
        options={{
          headerBackTitle: '',
          headerTitle: () => {
            return Platform.OS === 'ios' ? (
              <Image
                style={{width: 35, height: 35}}
                source={Logo}
                //resizeMode="contain"
              />
            ) : (
              <Text></Text>
            );
          },
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        }}
      />
      <Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          headerBackTitle: '',
          animation: 'fade_from_bottom',

          headerTitle: () => {
            return Platform.OS === 'ios' ? (
              <Image
                style={{width: 35, height: 35}}
                source={Logo}
                //resizeMode="contain"
              />
            ) : (
              <Text></Text>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Settings() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Options"
        component={Options}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={WebViewScreen}
        options={{
          tabBarVisible: false,

          headerBackTitle: '',

          headerTitle: () => {
            return Platform.OS === 'ios' ? (
              <Image
                style={{width: 35, height: 35}}
                source={Logo}
                //resizeMode="contain"
              />
            ) : (
              <Text></Text>
            );
          },
        }}
      />
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
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <FontAwesomeIcon
                focused={focused}
                icon={faHome}
                size={23}
                color={color}
              />
            ),
            tabBarOptions: {
              activeTintColor: 'black',
              inactiveTintColor: 'gray',
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <FontAwesomeIcon
                focused={focused}
                icon={faUser}
                size={23}
                color={color}
              />
            ),
            tabBarOptions: {
              activeTintColor: 'black',
              //inactiveTintColor: 'gray',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
