import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/themes';

export default function OptionScroll({title, active, index, onPress}) {

  return (
    <TouchableOpacity
      style={[
        styles.container,
       
      ]}
      onPress={onPress}>
      <Text
        style={[styles.title, {color: active === index ? COLORS.primary : "gray"}]}>
        {title}
      </Text>
      {
          active === index ? (
            <View style={{
                width:"100%",
                height:3,
                borderRadius:3,
                backgroundColor:COLORS.primary
            }} />
          ) : null
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
   
    margin: 15,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // height:30
  },
  title: {
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "700"
  },
});
