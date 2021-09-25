//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
//import { RestaurantInfoCArd } from './src/features/restaurants/components/restaurant-info-card.components';
import { RestaurantScreen } from './src/features/restaurants/Screens/restaurant.screen';
import { theme } from './src/infraestructure/theme';

/*
 *  non-functional code import font no aviable on the web  
 *  import {   useFonts as useOswald, Oswald_400Regular, } from "@expo-google-fonts/oswald";
 *  import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
*/

export default function App() {

  // let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  // let [latoLoaded] = useLato({ Lato_400Regular });
  // if(!oswaldLoaded || !latoLoaded) { return null; }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
