import React, {useState, useEffect, Component, Modal} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import Article from '../components/Article';

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

const BrandDetails = ({route, navigation}) => {
  const [finalBrand, setFinalBrand] = useState();
  const [reading, setReading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {internal_name} = route.params;

  useEffect(() => {
    const getBrand = async () => {
      const brand = await firestore()
        .collection('BRANDS')
        .doc(`${internal_name}`)
        .get();

      setFinalBrand(brand._data);

      //console.log('THE BRAND', brand._data.articles);
    };

    getBrand();
  }, []);

  const displayArticles = () => {
    const arr = [];

    // console.log('final brand articles ', finalBrand.articles);

    for (let i = 0; i < finalBrand.articles.length; i++) {
      const article = finalBrand.articles[i];

      arr.push(<Article i={i} article={article} />);
    }

    console.log('arr', arr);

    return arr;
  };

  return finalBrand ? (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image style={styles.img} source={{uri: finalBrand.main_picture}} />
        <View style={styles.greyView}>
          {/*<Text
            style={{
              color: 'rgba(95, 93, 93, 1)',

              fontFamily: 'Ruda-SemiBold',
            }}>
            7 jours restants
          </Text>*/}
        </View>
        <Text style={styles.title}>{`${finalBrand.name}`}</Text>
        {finalBrand.discount ? (
          <Text style={styles.offer}>
            {`${finalBrand.discount}`}
            <Text style={styles.code}> {`${finalBrand.discount_code}`}</Text>
          </Text>
        ) : (
          <View></View>
        )}

        <TouchableOpacity
          style={styles.description}
          onPress={() => {
            setReading(!reading);
          }}>
          {reading ? (
            finalBrand.description.map((elem, i) => {
              return (
                <Text
                  key={i}
                  style={{
                    color: 'black',
                    marginBottom: 5,
                  }}>
                  {elem}
                </Text>
              );
            })
          ) : (
            <Text
              style={{
                color: 'black',
              }}
              numberOfLines={reading ? 100 : 2}
              ellipsizeMode="tail">
              {`${finalBrand.description[0]}`}
            </Text>
          )}
          <Text
            style={{
              color: 'rgba(33, 205, 205, 1)',
              fontFamily: 'Ruda-SemiBold',
            }}>
            {reading ? 'Replier' : 'Lire plus'}
          </Text>
        </TouchableOpacity>
        <View style={styles.instaView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                url: `${finalBrand.insta_url}`,
              })
            }
            style={styles.instaElems}>
            <FontAwesomeIcon icon={faInstagram} />

            <Text style={styles.instaText}>{finalBrand.insta_name}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centeredView}></View>

        <View style={styles.imgView}>{displayArticles()}</View>
        <View style={{height: 75}}></View>
      </ScrollView>
      {
        <TouchableOpacity
          style={styles.webSiteBtn}
          onPress={() =>
            navigation.navigate('WebViewScreen', {
              url: `${finalBrand.site_url}`,
            })
          }>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              color: 'white',
              fontSize: 15,
            }}>
            Aller sur le site
          </Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  ) : (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Progress.Circle size={40} indeterminate={true} />
      </View>
    </SafeAreaView>
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
    //backgroundColor: 'green',
    height: 20,
    marginTop: 10,
    marginLeft: 10,
    maxWidth: 200,
  },
  instaElems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'grey',
  },
  instaText: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
    marginLeft: 2,
  },
  littlePicture: {
    // height: 150,
    // width: 150,
    height: windowWidth / 2.2,

    // width: windowWidth / 2.2,

    //width: windowWidth / 2.1,
    margin: 1,
    borderRadius: 5,
  },
  imgView: {
    // backgroundColor: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
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

export default BrandDetails;
