import React, { useEffect, useReducer } from 'react'
import { Button, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { CartContextProvider } from './src/context'
import RootNavigator from "./src/navigations/RootNavigator"

const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])
  const reducer = (state, action) => {
    switch(action.type) {
      case 'increase':
      return  state + 1;
      case "decrease" :
       return state - 1
    default :
    return state
    }
  }

  const[count, dispatch] = useReducer(reducer, 1)


  

  const Practice = ({}) => (
    <View style={{
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    }} >
      <Button title='-' onPress={()=>{
        dispatch({
          type:"decrease"
        })
      }} />
      <Text>{count}</Text>
      <Button onPress={()=> dispatch({type:"increase"})} title='+' />
    </View>
  )

  return (
   <CartContextProvider>
     <RootNavigator/>
   </CartContextProvider>
  // <Practice/>
  )
}

export default App


