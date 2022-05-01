import React, {useState, useEffect, Component, Modal} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import iconeInsta from '../assets/img/instagram.png';

import * as Progress from 'react-native-progress';

const windowWidth = Dimensions.get('window').width;

const Article = ({article, i}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        //backgroundColor: 'red',
        width: windowWidth / 2,
        paddingHorizontal: 4,
        height: 255,
        marginBottom: 10,
      }}
      key={i}
      onPress={() =>
        navigation.navigate('WebViewScreen', {
          url: `${article.url}`,
        })
      }>
      <Image
        style={styles.littlePicture}
        source={{uri: article.image}}
        key={i}
      />
      <Text
        numberOfLines={2}
        style={{
          fontFamily: 'Ruda',
          fontSize: 14,
          marginTop: 8,
          marginBottom: 3,
        }}>
        {article.name}
      </Text>
      <Text
        style={{
          fontFamily: 'Roboto-Bold',

          fontSize: 15,
        }}>
        {article.price}€
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontFamily: 'Ruda-Bold',
    fontSize: 24,
    color: 'black',
    marginLeft: 10,
  },
  offer: {
    fontFamily: 'Ruda-Regular',
    fontSize: 15,
    color: 'rgba(155, 155, 155, 1)',
    marginLeft: 10,
  },
  code: {
    color: 'black',
    fontFamily: 'Ruda-SemiBold',
  },
  description: {
    marginTop: 10,
    fontFamily: 'Ruda-Thin',
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
  img: {
    height: 250,
  },
  greyView: {
    height: 31,
    backgroundColor: 'rgba(229, 229, 229, 0.24)',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  safeArea: {
    backgroundColor: 'rgb(255, 255, 255)',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
  },

  instaView: {
    height: 20,
    marginTop: 10,
    marginLeft: 10,
    maxWidth: 200,
  },
  instaElems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  instaText: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
    marginLeft: 2,
  },
  littlePicture: {
    height: windowWidth / 2.2,

    margin: 1,
    borderRadius: 5,
  },
  imgView: {
    // backgroundColor: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  webSiteBtn: {
    position: 'absolute',
    backgroundColor: 'rgba(33, 205, 205, 1)',
    height: 42,
    width: 275,
    borderRadius: 15,
    bottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    article: {
      height: 250,
      width: 250,
      backgroundColor: 'rgba(33, 205, 205, 1)',
    },
  },
});

export default Article;
