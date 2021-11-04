import React, { Fragment } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
  margin-button:16;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;

/**
 *  @method match with const Title
 * non-functional code
 * font-size: ${(props) => props.theme.fontSizes.body};
 * font-family: ${(props) => props.theme.fontSizes.caption};
 */
const Title = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.primary};
`;

const Warning = styled.Text`
  font-size: 16px;
  color: #ff7058;
  text-transform: uppercase;
  font-weight: bold;
  white-space: nowrap;
  font-size: 10px;
`;

/**
 * @method match with const Address
 * non-functional code
 * font-family: ${(props) => props.theme.fonts.heading},
 * font-family: ${(props) => props.theme.fontSizes.caption};
 */
const Address = styled.Text``;
const Status = styled(Card.Cover)`
  float: right;
  with: 5px;
  height: auto;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Star = styled(Card.Cover)`
  height: auto;
  background-color: rgb(255 255 255);
  overflow: inherit;
  display: inline-block;
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  console.log(restaurant.name);
  const {
    name = "The best restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg",
    ],
    address = "Some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporaly = true,
    stars = require("../../../../assets/star.ico"),
  } = restaurant;

  /**
   * Change ceil or floor
   */
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  //console.log(ratingArray);<span role="img" aria-label="sheep"></span>
  console.log("hola")
  return (
    <RestaurantCard>
      <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <div>
          {ratingArray.map((str, i) => (
            <Star key={i} source={{ uri: stars }} />
          ))}

          {isOpenNow && (
            <Status source={{ uri: require("../../../../assets/open.png") }} />
          )}
          {isClosedTemporaly && (
            <Warning>CLOSED TEMPORALY</Warning>

          )}
        </div>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white", padding: 16 },
  cover: { backgroundColor: "white" },
  title: { padding: 16 },
});
