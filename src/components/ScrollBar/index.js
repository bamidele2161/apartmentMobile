import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import {
  MediumText,
  MediumTitleText,
  ParagraphText,
  SmallText,
} from "../text/texts";
import { MapPinIcon } from "react-native-heroicons/outline";
import { color } from "../../color";
// import {
//   ArrowRightIcon,
//   LocationMarkerIcon,
// } from "react-native-heroicons/outline";

// import { color } from "../color";

const FeaturedRow = ({ list, scrollTitle, scrollParagraph }) => {
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ marginBottom: 20 }}>
      <MediumTitleText>{scrollTitle}</MediumTitleText>
      <SmallText>{scrollParagraph}</SmallText>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          display: "flex",
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {list.map((item) => (
          <TouchableOpacity
            style={styles.card}
            // onPress={() =>
            //   navigation.navigate("Food", {
            //     id,
            //     title,
            //     price,
            //     imgUrl,
            //     rating,
            //     genre,
            //     description,
            //   })
            // }
          >
            <View style={styles.image}></View>
            {/* <Image source={imgUrl} /> */}
            <View style={styles.textContainer}>
              <View style={styles.first}>
                <MediumText>{item.name}</MediumText>
              </View>
              <View style={styles.first}>
                <MapPinIcon
                  color={color.primaryColor}
                  opacity={0.5}
                  size={16}
                />
                <ParagraphText>{item.address}</ParagraphText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
