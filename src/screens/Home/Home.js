import React, { useState } from 'react';
import {FlatList, StyleSheet, Text, ScrollView, View} from 'react-native';
import {Search, PlateCard, OptionScroll} from '../../components/home';
import {optionData,PlateData } from '../../constants/dummyData';

export default function Home({navigation}) {

const [active,  setActive] = useState(0)

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container]}>
      <Text style={styles.h1} numberOfLines={2}>
        DeliCious food for you
      </Text>

      <Search onFocus={()=>navigation.navigate("Search")} />
     <ScrollView 
     horizontal
     showsHorizontalScrollIndicator={false}
      >
     {optionData.map((i, k) => 
      <OptionScroll title={i.title} key={i.id} index={k} active={active} onPress={() => setActive(k)} />
      )}
     </ScrollView>
      {
        active === 0 ? (
          <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={PlateData}
        contentContainerStyle={{
          marginVertical:20,
        }}
        renderItem={({item}) => (
          <PlateCard
            img={item.img}
            title={item.title}
            price={item.price}
            onPress={() => navigation.navigate('ProductDetails',{ id: item.id,img: item.img, title: item.title, price: item.price })}
          />
        )}
        keyExtractor={i => i.id}
      />
        ): (
        
            <Text style={{
            fontFamily: "SF-Pro-Rounded-Bold",
            textAlign:"center",
            textAlignVertical: "center",
            fontSize: 25,
            marginTop: 100
          }} >No Item Yet...</Text>
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
  },
  h1: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 15,
    lineHeight: 40,
    width: '60%',
    //padding:20
  },
  h1Container: {
    paddingLeft: 15,
  },
});
