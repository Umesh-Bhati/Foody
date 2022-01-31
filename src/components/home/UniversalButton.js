import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants/themes'

export default function UniversalButton({title, onPress, style}) {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[{
            width:"90%",
            height:60,
            borderRadius:25,
            backgroundColor:COLORS.primary,
            justifyContent:"center",
            alignItems:"center",
            position:"absolute",
            bottom:5,
            alignSelf:"center"
        }, style]} >
            <Text style={{
                fontFamily:"SF-Pro-Rounded-Regular",
                fontWeight:"600",
                 fontSize:17,
                 color:"white"
            }} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
