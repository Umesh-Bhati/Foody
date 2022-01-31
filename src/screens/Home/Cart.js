import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {CartItem} from '../../components/Cart';
import {COLORS} from '../../constants/themes';
import {CartContext} from '../../context';
import UniversalButton from '../../components/home/UniversalButton';

const Cart = ({navigation, route}) => {
  const {cartData, dispatchCart} = useContext(CartContext);


  let row =useRef([])
  let prevOpenedRow;

 function  closeRow(index) {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
		prevOpenedRow.close();
    }
    prevOpenedRow = row.current[index];
}

  
  const RenderRight = ({onPress}) => {
    return (
      <View
        style={{
          //  flex:1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: '#DF2C2C',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            marginHorizontal: 20,
          }}
          onPress={() =>
            Alert.alert(
              'Delete',
              'If you press the delete, then item will be deleted',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {text: 'Delete', onPress},
              ],
            )
          }>
          <Icon name="trash-2" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.darkGray,
      }}>
      {cartData.length ? (
        <>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 5,
              fontFamily: 'SF-Pro-Rounded-Semibold',
              fontSize: 15,
              color: 'black',
            }}>
            swipe left to delete an item
          </Text>

          {cartData.map((item,k) => (
            <Swipeable
            friction={1}
              renderRightActions={progress => (
                <RenderRight
                  onPress={() =>
                    {dispatchCart({
                      type: 'REMOVE_CART',
                      payload: {
                        id: item.id,
                      },
                    }) 
                 }
                  }
                  ref={ref => row.current[k] = ref}
                  key={k}
                  onSwipeableOpen={closeRow(k)}
                />
              )}
              containerStyle={{
                marginVertical: 10,
              }}>
              <CartItem
                title={item.title}
                price={item.price*item.qty}
                img={item.img}
                key={k}
                minusPress={()=>(
                  dispatchCart({
                    type:"DECREAMENT_ITEM",
                    payload: {
                      index: k
                    }
                  })
                )}
                plusPress={()=>dispatchCart({
                  type:"INCREAMENT_ITEM",
                  payload: {
                    index: k
                  }
                })}
                count={item.qty}
                onPress={()=>navigation.navigate("ProductDetails",{img: item.img, title: item.title, price: item.price, id: item.id})}
              />
            </Swipeable>
          ))}
        </ScrollView>
          <UniversalButton title={'Complete order'} onPress={()=>navigation.navigate("Payment")}  /> 
          </>
      ): 
     ( <View style={{
       flex:1,
       justifyContent:"center",
     }} >
        
          <Icon name='shopping-cart' size={150} color={"gray"} />

          <Text style={{
            fontFamily:"SF-Pro-Rounded-Bold",
            fontSize:25,
            color:"black",
            textAlign:"center",
            marginTop:20
          }} > No Orders yet </Text>

      </View>) }
    </View>
  );
};

export default Cart;
