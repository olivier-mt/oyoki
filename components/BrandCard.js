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
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const screenWidth = Dimensions.get('window').width;

const BrandCard = ({finalBrands, i, navigation}) => {
  const brand = finalBrands[`${i}`]._data;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', brand);
      }}
      style={styles.card}>
      <View>
        <Image style={styles.img} source={{uri: brand.main_picture}} />

        <Text style={styles.title}>{brand.name}</Text>
        <Text style={styles.subtitle}>{brand.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 260,

    //width: 300,
  },
  card: {
    width: screenWidth,
    height: 340,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 10,
    marginLeft: 15,

    fontFamily: 'Ruda-Bold',
    fontSize: 24,
    color: 'black',
  },

  subtitle: {
    marginLeft: 15,
    marginTop: 5,

    color: 'rgba(155, 155, 155, 1)',
    fontFamily: 'Ruda-SemiBold',
    fontSize: 15,
  },
});

export default BrandCard;
