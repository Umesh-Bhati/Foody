import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {PlateData} from '../../constants/dummyData';
import {COLORS} from '../../constants/themes';

const {width} = Dimensions.get("window")

const CartItem = ({img, title, price, count, minusPress, plusPress, onPress}) => {
  return (
    <View
      style={{
        width: width-30,
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
      }} 
      onPress={onPress} >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={img}
          style={{
            resizeMode: 'contain',
            height: '100%',
            width: '100%',
            borderRadius: 100,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          paddingLeft: 20,
        }}>
        <Text
          style={{
            fontFamily: 'SF-Pro-Rounded-Bold',
            fontSize: 20,
            color: 'black',
            marginBottom: 5,
          }}
          numberOfLines={1}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'SF-Pro-Rounded-Semibold',
            color: COLORS.primary,
            fontSize: 16,
            fontWeight: 'bold',
          }}
          numberOfLines={1}>
         ₹ {price}/-
        </Text>
      </View>
      <View
        style={{
          height: 25,
          width: 70,
          borderRadius: 10,
          backgroundColor: COLORS.primary,
          flexDirection: 'row',
          position: 'absolute',
          bottom: 20,
          right: 30,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} 
          onPress={minusPress} >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textAlignVertical: 'center',
              fontWeight: 'bold',
            }}>
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlignVertical: 'center',
            marginHorizontal: 5,
          }}
          numberOfLines={1}>
          {count}
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} 
          onPress={plusPress} >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default CartItem;
