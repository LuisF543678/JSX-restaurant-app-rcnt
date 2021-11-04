//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
//import { RestaurantInfoCArd } from './src/features/restaurants/components/restaurant-info-card.components';
import { RestaurantScreen } from "./src/features/restaurants/Screens/restaurant.screen";
import { theme } from "./src/infraestructure/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//import { restaurantsRequest } from "./src/services/restaurants/restaurant.services";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";

/*
 *  non-functional code import font no aviable on the web
 *  import {   useFonts as useOswald, Oswald_400Regular, } from "@expo-google-fonts/oswald";
 *  import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
 */
const Settings = () => <Text>Settins</Text>;

const Maps = () => <Text>Maps</Text>;

const Tab = createBottomTabNavigator();

export default function App() {
  // let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  // let [latoLoaded] = useLato({ Lato_400Regular });
  // if(!oswaldLoaded || !latoLoaded) { return null; }

  /**
   * DELETE component from <RestaurantScreen />
   */
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = focused ? "ios-fast-food" : "ios-fast-food";
                  } else if (route.name === "Maps") {
                    iconName = focused ? "ios-map" : "ios-map";
                  } else if (route.name === "Settings") {
                    iconName = focused ? "ios-settings" : "ios-settings";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "green",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Maps" component={Maps} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
