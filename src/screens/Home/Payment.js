import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Radio from 'react-native-vector-icons/MaterialIcons';
import {UniversalButton} from '../../components/home';
import {COLORS} from '../../constants/themes';
import {CartContext} from '../../context';

const Payment = () => {
  const [active, setActive] = useState({b1: true, b2: false});
  const [activeDel, setActiveDel] = useState({b1: true, b2: false});
  const [modalVisible, setModalVisible] = useState(false);
  const {cartData} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartData.forEach(element => {
      sum += element.qty * element.price;
    });
    setTotal(sum);
    return () => setTotal(0);
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Semibold',
              fontSize: 20,
              marginVertical: 10,
              color: 'black',
            }}>
            Payment method
          </Text>
          <View
            style={{
              width: '100%',
              height: 200,
              backgroundColor: 'white',
              borderRadius: 15,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <RadioButton
                active={active.b1}
                size={25}
                onPress={() => setActive({b1: true, b2: false})}
              />
              <RadioButton
                active={active.b2}
                size={25}
                onPress={() => setActive({b1: false, b2: true})}
              />
            </View>

            <View
              style={{
                flex: 3,
                justifyContent: 'center',
              }}>
              <PayItem
                name="credit-card-alt"
                color={COLORS.primary}
                title="Card"
                onPress={() => setActive({b1: true, b2: false})}
              />
              <View
                style={{
                  backgroundColor: 'gray',
                  height: 2,
                  width: '90%',
                  opacity: 0.7,
                }}
              />
              <PayItem
                name="bank"
                color={'#EB4796'}
                title="Bank account"
                onPress={() => setActive({b1: false, b2: true})}
              />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Semibold',
              fontSize: 20,
              marginVertical: 10,
              color: 'black',
            }}>
            Delivery method
          </Text>
          <View
            style={{
              width: '100%',
              height: 200,
              backgroundColor: 'white',
              borderRadius: 15,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <RadioButton
                active={activeDel.b1}
                size={25}
                onPress={() => setActiveDel({b1: true, b2: false})}
              />
              <RadioButton
                active={activeDel.b2}
                size={25}
                onPress={() => setActiveDel({b1: false, b2: true})}
              />
            </View>
            <View
              style={{
                flex: 3,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }} 
                onPress={() => setActiveDel({b1: true, b2: false})} >
                <Text
                  style={{
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    fontSize: 20,
                    color: 'black',
                  }}>
                  Door delivery
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'gray',
                  height: 2,
                  width: '90%',
                  opacity: 0.7,
                }}
              />
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }} 
                onPress={() => setActiveDel({b1: false, b2: true})} >
                <Text
                  style={{
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    fontSize: 20,
                    color: 'black',
                  }}>
                  Pick-up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Regular',
              fontSize: 22,
              color: 'black',
            }}>
            Total
          </Text>
          <Text
            style={{
              position: 'absolute',
              right: 0,
              fontFamily: 'SF-Pro-Rounded-SemiBold',
              fontSize: 22,
              color: 'black',
              fontWeight: '600',
            }}
            numberOfLines={1}>
            ₹ {total}/-
          </Text>
        </View>
        <UniversalButton
          title={'Proceed to payment'}
          style={{position: 'relative', width: '100%'}}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
       {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          onPress={() => setModalVisible(false)}>
          <View
            style={{
              height: '50%',
              width: '80%',
              backgroundColor: 'white',
              borderRadius: 20,
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontFamily: 'SF-Pro-Rounded-Bold',
                fontSize: 30,
                textAlign: 'center',
                color: 'black',
              }}>
              Thanks For Your Order
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'SF-Pro-Rounded-Semibold',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Keep continue to Order & Be Safe & Happy
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Payment;

// Creating PayItem

const PayItem = ({name, title, color, onPress}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
    }}
    onPress={onPress}>
    <View
      style={{
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={name} size={25} color={'white'} />
    </View>
    <View>
      <Text
        style={{
          fontFamily: 'SF-Pro-Rounded-Regular',
          fontSize: 20,
          fontWeight: '400',
          color: 'black',
          paddingLeft: 20,
        }}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

//Creating RadioButton

const RadioButton = ({active, size, onPress}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {active ? (
      <Radio
        name="radio-button-on"
        color={COLORS.primary}
        size={size}
        onPress={onPress}
      />
    ) : (
      <Radio
        name="radio-button-off"
        color={'gray'}
        size={size}
        onPress={onPress}
      />
    )}
  </View>
);
