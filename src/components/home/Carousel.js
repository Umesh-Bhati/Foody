import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PlateData} from '../../constants/dummyData';
import {COLORS} from '../../constants/themes';

const {width} = Dimensions.get('window');
const height = width * 0.6;

export default function Carousel() {
  const [active, setActive] = useState(0);
  const onChange = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <>
      <ScrollView
        horizontal
        onScroll={onChange}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{width, height}}>
        {PlateData.map((item, index) => (
          <View
            key={item.id}
            style={{
              width,
              height,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 170,
                height: 170,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 170 / 2,
                elevation: 3,
                overflow: 'hidden',
              }}>
              <Image
                source={item.img}
                style={{
                  resizeMode: 'contain',
                  width: 170,
                  height: 170,
                  borderRadius: 170 / 2,
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          width,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {PlateData.map((i, index) => (
          <View
            key={i.id}
            style={{
              width: 5,
              height: 5,
              borderRadius: 5/ 2,
              backgroundColor:
                index === active ? COLORS.primary : COLORS.darkGray,
              margin: 5,
              elevation: 5,
            }}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
