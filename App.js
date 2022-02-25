import React, { useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import { CartContextProvider } from './src/context'
import RootNavigator from "./src/navigations/RootNavigator"

const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])


  return (
   <CartContextProvider>
     <RootNavigator/>
   </CartContextProvider>
  )
}

export default App


