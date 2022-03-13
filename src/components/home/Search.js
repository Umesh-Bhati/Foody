import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import {icons} from "../../constants"
export default function Search({onFocus, onChangeText}) {
    return (
        <View style={
            styles.container
        } >
            <Image source={icons.search} />
            <TextInput style={styles.text} placeholderTextColor="gray" placeholder='Search' numberOfLines={1} onFocus={onFocus} onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flexDirection:"row",
    width:"80%",
    height:60,
    backgroundColor:"#EFEEEE",
    borderRadius:30,
    alignItems:"center",
    alignSelf:"center",
    paddingHorizontal:15,
    marginVertical:15
},
text:{
     fontFamily: "SF-Pro-Rounded-Semibold",
    paddingLeft:10,
    
}
})
