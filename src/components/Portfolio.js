import {View, Text, TouchableOpacity, Modal, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Portfolio() {

   const [show, setShow] = useState(true)

   useEffect(() => {
       setShow(true)
   }, [])

  return (
    <Modal
      visible={show}
      transparent={true}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}  
       >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onPress={() => setShow(!show)}
        activeOpacity={0.7}
      />
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: '50%',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent:"center",
          position: 'absolute',
          top: '25%',
          left: '5%',

        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            width: '70%',
          }}>
          This App is only for Demo perpose & It is developed by
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10
          }}>
          Umesh Bhati
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            fontWeight: '500',
            textAlign: 'center',
            width: '70%',
            marginTop: 10
          }}>
          Follow or Contact me on :)->
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width:"40%",
            justifyContent: "space-between",
            marginTop: 15
          }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/umesh-bhati-b7b557207/',
              )
            }>
            <Icon name="linkedin-square" size={50} color="#0e76a8" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/Umesh-Bhati')}>
            <Icon name="github" size={50} color="#171515" />
          </TouchableOpacity> 
        </View>
      </View>
    </Modal>
  );
}
