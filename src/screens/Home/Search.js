import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';
import {PlateCard, SearchBar} from '../../components/home';
import Icon from 'react-native-vector-icons/Octicons';
import {PlateData} from '../../constants/dummyData';

const Search = ({navigation}) => {
  const [filtered, setFiltered] = useState([]);

  const searchProduct = text => {

    setFiltered(
      PlateData.filter(item =>
        item.title.toLowerCase().includes(text?.toLowerCase()),
      ),
    );
  };
  

  const Befor = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="search" size={100} />
        <Text
          style={{
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: 'black',
            fontSize: 25,
            marginVertical: 10,
          }}>
          Item not found
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 15,
            textAlign: 'center',
            marginHorizontal: 50,
          }}>
          Try searching the item with a different keyword.
        </Text>
      </View>
    );
  };

  const After = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        
          <Text
            style={{
              fontFamily: 'SF-Pro-Rounded-Bold',
              fontSize: 20,
              color: 'black',
              top: 0,
              marginVertical: 10,
            }}>
            Found {filtered.length} results
          </Text>
        
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {filtered.map(item => (
            <PlateCard
              title={item.title}
              img={item.img}
              price={item.price}
              key={item.id}
              style={{width: '40%', marginVertical: 10}}
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  img: item.img,
                  id: item.id,
                  price: item.price,
                  title: item.title,
                })
              }
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <>
      <SearchBar
        onChangeText={({nativeEvent}) => searchProduct(nativeEvent.text)}
        onPress={() => navigation.goBack()}
      />
      {
        filtered.length ? (
          <ScrollView showsVerticalScrollIndicator={false} > 
            <After/>
          </ScrollView>
        ) : (
          <Befor/>
        )
      }
      
    </>
  );
};

export default Search;
