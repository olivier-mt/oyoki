import React, {useState, useEffect, Component, Modal} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';
import {WebView} from 'react-native-webview';

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
} from 'react-native';

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

      console.log('THE BRAND', brand);
    };

    getBrand();
  }, []);

  const displayPictures = () => {
    const arr = [];

    for (let i = 0; i < finalBrand.pictures.length; i++) {
      arr.push(
        <Image
          style={styles.littlePicture}
          source={{uri: finalBrand.pictures[i]}}
          key={i}
        />,
      );
    }

    return arr;
  };

  return finalBrand ? (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image style={styles.img} source={{uri: finalBrand.main_picture}} />
        <View style={styles.greyView}>
          <Text>7 jours restants</Text>
        </View>
        <Text style={styles.title}>{`${finalBrand.name}`}</Text>
        <Text>
          20% de réduction sur le site avec le code:
          {`${finalBrand.discount_code}`}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setReading(!reading);
          }}>
          <Text numberOfLines={reading ? 100 : 2} ellipsizeMode="tail">
            {`${finalBrand.desciption}`}
          </Text>
          <Text>{reading ? 'Replier' : 'Lire plus'}</Text>
        </TouchableOpacity>
        <View style={styles.instaView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                url: `${finalBrand.insta_url}`,
              })
            }>
            <Text>{finalBrand.insta_name}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centeredView}></View>

        <View style={styles.imgView}>{displayPictures()}</View>
      </ScrollView>
      <TouchableOpacity
        style={styles.webSiteBtn}
        onPress={() =>
          navigation.navigate('WebViewScreen', {url: `${finalBrand.site_url}`})
        }>
        <Text>Aller sur le site</Text>
      </TouchableOpacity>

      {/*<View style={{height: '90%', width: '90%'}}>
          <WebView
            source={{uri: 'https://www.google.com/'}}
            style={{marginTop: 20}}
            onLoad={() => {
              console.log('webview loading');
            }}
          />
        </View>*/}
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Brand Details non</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  img: {
    height: 300,
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
    backgroundColor: 'green',
    height: 20,
  },
  littlePicture: {
    height: 150,
    width: 150,
    margin: 1,
  },
  imgView: {
    backgroundColor: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  webSiteBtn: {
    position: 'absolute',
    backgroundColor: 'green',
    bottom: 25,
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
  },
});

export default BrandDetails;
