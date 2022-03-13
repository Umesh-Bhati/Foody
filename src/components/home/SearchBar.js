import React, { useEffect, useRef } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { COLORS } from '../../constants/themes'

const SearchBar = ({onPress, onChangeText, value}) => {

    const ref = useRef()

    useEffect(()=>{
        ref.current.focus()
    },[])

    return (
        <View style={{
            width:"100%",
            height:50,
            flexDirection:"row",
            alignItems:"center",
            zIndex:12,
            backgroundColor:COLORS.gray
        }} >
          <TouchableOpacity onPress={onPress} style={{
              marginLeft:20,
              justifyContent:"center",
              alignItems:"center",
          }} >
          <Icon name='arrow-back' size={25}  color={"black"} />
          </TouchableOpacity>
           <TextInput style={{
               paddingLeft:30,
               color: "black"
           }} placeholder='Search Products' onSubmitEditing={onChangeText} placeholderTextColor="gray" ref={ref} value={value} />
        </View>
    )
}

export default SearchBar
