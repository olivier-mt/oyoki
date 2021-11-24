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
  TouchableOpacity,
} from 'react-native';

const BrandDetails = ({route, navigation}) => {
  const [finalBrand, setFinalBrand] = useState();
  const [reading, setReading] = useState(false);

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
          <TouchableOpacity>
            <Text>{finalBrand.insta_name}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imgView}>{displayPictures()}</View>
      </ScrollView>
      <TouchableOpacity style={styles.webSiteBtn}>
        <Text>Aller sur le site</Text>
      </TouchableOpacity>
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
});

export default BrandDetails;
