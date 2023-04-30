import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  title,
  price,
  imgUrl,
  rating,
  genre,
  description,
}) => {
  const navigation = useNavigation();

  const addToCart = async (id) => {};

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Food", {
          id,
          title,
          price,
          imgUrl,
          rating,
          genre,
          description,
        })
      }
    >
      {/* <Image source={imgUrl} /> */}
      <View>
        <View>
          <Text>{title}</Text>
          <Text>#{price}</Text>
        </View>
        <View>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text>
            <Text>{rating}</Text> . {genre}
          </Text>
        </View>
        <View>
          <LocationMarkerIcon color="gray" size={20} opacity={0.4} />
          <Text>North Gate, Futa</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
