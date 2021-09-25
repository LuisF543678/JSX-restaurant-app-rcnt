import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;

/**
 *  @method match with const Title
 *  non-functional code
 *  font-size: ${(props) => props.theme.fontSizes.body};
 * font-family: ${(props) => props.theme.fontSizes.caption};
 */
const Title = styled.Text`
font-size:16px;
  color: ${(props) => props.theme.colors.text.primary};
`;

/**
 *  @method match with const Address
 *  non-functional code
 * font-family: ${(props) => props.theme.fonts.heading},
 * font-family: ${(props) => props.theme.fontSizes.caption};
 */
const Address = styled.Text``;

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
  const {
    name = "Some nice restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg",
    ],
    address = "Some random street",
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporaly,
    stars = ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"],
  } = restaurant;

  /**
   * Change ceil or floor
   */
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  console.log(ratingArray);
  return (
    <RestaurantCard>
      <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <div>
          {ratingArray.map(() => (
            <Star source={{ uri: stars[0] }} />
          ))}
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