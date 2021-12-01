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

const SearchBar = ({setCategory}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.searchView}
      contentContainerStyle={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setCategory('');
        }}>
        <Text>Toutes les marques </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setCategory('mode');
        }}>
        <Text>Mode </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCategory('beauty');
        }}>
        <Text>Beauty </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCategory('houseItem');
        }}>
        <Text>Maison </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCategory('accessories');
        }}>
        <Text>Bijoux et accessoires </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
  },
  button: {},
});

export default SearchBar;
