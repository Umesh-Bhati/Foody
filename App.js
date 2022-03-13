import React, { useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import { CartContextProvider } from './src/context'
import RootNavigator from "./src/navigations/RootNavigator"
import Portfolio from "./src/components/Portfolio"

const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])


  return (
   <CartContextProvider>
     <Portfolio/>
     <RootNavigator/>
   </CartContextProvider>
  )
}

export default App


