import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/themes';

export default function PlateCard({img, title, price, onPress, style}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}  >
      <View style={styles.container1} />
      <View style={styles.imgContainer}>
        <Image source={img} style={styles.img} />
      </View>
      <Text style={[styles.h2, {marginTop: 20}]} numberOfLines={2}>
        {title}..
      </Text>
      <Text style={styles.price}>₹ {price}/-</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
    height: 321,
    width: 220,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginHorizontal: 15,
    elevation:10
  },
  container1: {
    width: '100%',
    height: 270,
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'flex-end',
    borderRadius: 20,
    bottom: 0,
  },
  img: {
    resizeMode: 'contain',
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
  },
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  h2: {
    fontFamily: 'SF-Pro-Rounded-Semibold',
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    lineHeight: 22,
    width: '70%',
    textAlign: 'center',
  },
  price: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    marginVertical: 20,
    fontSize: 17,
    color: COLORS.primary,
  },
});
