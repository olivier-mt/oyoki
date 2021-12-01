import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Contact = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <Text>Contact View</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cell: {
    height: 80,
    // backgroundColor: 'green',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

    //paddingHorizontal: 24,
  },
  seachView: {
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default Contact;
