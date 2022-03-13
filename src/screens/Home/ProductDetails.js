import React, {useContext, useState} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from '../../components/home/Carousel';
import UniversalButton from '../../components/home/UniversalButton';
import {COLORS} from '../../constants/themes';
import {CartContext} from '../../context';

export default function ProductDetails({navigation, route}) {
  const {img, title, price, id} = route.params;
  const {cartData, dispatchCart} = useContext(CartContext);
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: COLORS.gray,
        }}
        showsVerticalScrollIndicator={false}>
        <Carousel />
        <Text
          style={{
            fontFamily: 'SF-Pro-Rounded',
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 28,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: COLORS.primary,
            textAlign: 'center',
            fontSize: 22,
          }}>
          ₹ {price}/-
        </Text>
        <View
          style={{
            width: '100%',
            padding: 15,
          }}>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Semibold',
              fontSize: 17,
              fontWeight: '600',
              color: 'black',
              lineHeight: 20,
            }}>
            Delivary info
          </Text>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Regular',
              color: "black"
            }}>
            Sunt enim eu aute laborum amet ut aliqua amet esse velit. Elit sint
            aliquip dolore enim fugiat veniam labore laboris incididunt eiusmod
            ad. Irure reprehenderit ex sint Lorem sunt duis. Ullamco cillum
            tempor minim incididunt exercitation cupidatat ea veniam proident
            qui esse. Incididunt id magna reprehenderit elit reprehenderit Lorem
            incididunt esse culpa deserunt sint velit. Duis et nostrud id id
            labore sit. Ex eiusmod in velit consequat fugiat cillum eu ipsum
            voluptate.
          </Text>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Semibold',
              fontSize: 17,
              fontWeight: '600',
              color: 'black',
              lineHeight: 20,
              textTransform: 'capitalize',
            }}>
            return policy
          </Text>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Regular',
              color: "black"
            }}>
            Sunt enim eu aute laborum amet ut aliqua amet esse velit. Elit sint
            aliquip dolore enim fugiat veniam labore laboris incididunt eiusmod
            ad. Irure reprehenderit ex sint Lorem sunt duis. Ullamco cillum
            tempor minim incididunt exercitation cupidatat ea veniam proident
            qui esse. Incididunt id magna reprehenderit elit reprehenderit Lorem
            incididunt esse culpa deserunt sint velit. Duis et nostrud id id
            labore sit. Ex eiusmod in velit consequat fugiat cillum eu ipsum
            voluptate.
          </Text>
        </View>
      </ScrollView>
      {cartData.some(i => i.title === title) ? (
        <UniversalButton
          title={'Remove to Cart'}
          onPress={() => {
            dispatchCart({
              type: 'REMOVE_CART',
              payload: {
               id
              },
            });
          }}
        />
      ) : (
        <UniversalButton
          title={'Add to Cart'}
          onPress={() => {
            dispatchCart({
              type: 'ADD_CART',
              payload: {
                id,
                title,
                img,
                price,
                qty:1
              },
            });
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
