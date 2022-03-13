import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UniversalButton} from '../../components/home';
import {images} from '../../constants';
import {COLORS} from '../../constants/themes';

export default function Profile() {
  const [active, setActive] = useState({
    bt1: true,
    bt2: false,
  });
  return (
    <KeyboardAvoidingView
      contentContainerStyle={{
        height: '100%',
      }}
      behavior="position">
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 20,
          elevation: 5,
        }}>
        <View
          style={{
            alignItems: 'center',
            flex: 2,
          }}>
          <Image source={images.shafe} />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Slider
            title={'Login'}
            backgroundColor={COLORS.primary}
            active={active.bt1}
            onPress={() =>
              setActive({
                bt1: true,
                bt2: false,
              })
            }
          />
          <Slider
            title={'Sign-up'}
            backgroundColor={COLORS.primary}
            active={active.bt2}
            onPress={() =>
              setActive({
                bt1: false,
                bt2: true,
              })
            }
          />
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
        }}>
        {active.bt1 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form title={'Email address'} />
            <Form title={'Password'} />
            <Text
              style={{
                color: COLORS.primary,
                marginLeft: 20,
                fontFamily: 'SF-Pro-Rounded-Regular',
              }}>
              Forget passcode?
            </Text>
            <UniversalButton
              title={'Login'}
              style={{
                position: 'relative',
                marginVertical: 30,
              }}
            />
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form title={'Full Name'} />
            <Form title={'Email address'} />
            <Form title={'Password'} />
            <UniversalButton
              title={'Sign-up'}
              style={{
                position: 'relative',
                marginVertical: 30,
              }}
            />
          </ScrollView>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});

//slidebutton

const Slider = ({title, backgroundColor, active, onPress}) => (
  <TouchableOpacity
    style={{
      borderBottomWidth: 3,
      borderBottomColor: active ? backgroundColor : 'transparent',
      padding: 10,
      width: '40%',
      marginHorizontal: 20,
      bottom: -5,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onPress={onPress}>
    <Text
      style={{
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
      }}>
      {title}
    </Text>
  </TouchableOpacity>
);

// FormContainer

const Form = ({title}) => (
  <View
    style={{
      width: '90%',
      justifyContent: 'center',
      padding: 20,
    }}>
    <Text
      style={{
        fontFamily: 'SF-Pro-Rounded-Semibold',
        fontSize: 20,
        textAlign: 'left',
        color: "gray"
      }}>
      {title}
    </Text>
    <TextInput
      placeholder={title}
      style={{
        borderBottomWidth: 2,
        color: "black",
        borderBottomColor: 'gray',
      }}
      placeholderTextColor="gray"
    />
  </View>
);
