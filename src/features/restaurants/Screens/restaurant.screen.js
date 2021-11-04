import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList
} from "react-native";
import { Searchbar, TextInput } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";


//console.log(Platform);
//const isAndroid = Platform.OS === "android";
//console.log(Platform.OS === "android");
// console.log(StatusBar.currentHeight);
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight} && 'margin-top: ${StatusBar.currentHeight}px';
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  //console.log(restaurantsContext.restaurants);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurants}
        renderItem={(item) => {
          //console.log(item);
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }} />
    </SafeArea>
  );
};
