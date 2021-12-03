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

const SearchBarBtn = ({category, setCategory, data, text}) => {
  return (
    <TouchableOpacity
      style={category === data ? styles.buttonActivated : styles.button}
      onPress={() => {
        setCategory(data);
      }}>
      <Text style={category === data ? styles.textActivated : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchView: {
    //  backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
  },
  button: {
    // borderColor: 'black',
    marginRight: 15,
    height: 40,
    justifyContent: 'center',
  },
  buttonActivated: {
    marginRight: 15,
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    //backgroundColor: 'yellow',
  },
  text: {
    fontFamily: 'Ruda-Bold',
    color: 'rgba(155, 155, 155, 1)',
    fontSize: 16,
  },
  textActivated: {
    fontFamily: 'Ruda-Bold',
    color: 'black',
    fontSize: 16,
  },
});

export default SearchBarBtn;
