import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./style";
import { MagnifyingGlassIcon, Bars3Icon } from "react-native-heroicons/outline";
import { color } from "../../color";
import { generalStyles, LargeText } from "../../components/text/texts";
import PrimaryInput from "../../components/Input";
import FeaturedRow from "../../components/ScrollBar";
import { hotel } from "../../utils/database";

let searchIcon = <MagnifyingGlassIcon color={color.gray} />;

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/*Header*/}
      <View style={styles.innerContainer}>
        <View style={styles.top}>
          <Bars3Icon color={color.primaryColor} size={30} />
          <View style={styles.imageView}>
            <Text style={{ color: color.primaryColor, fontSize: 30 }}>A</Text>
          </View>
        </View>
        <LargeText>Best Hotels to Stay In</LargeText>

        <PrimaryInput placeholder="Search for hotels" leftIcon={searchIcon} />

        {/*body */}
        <ScrollView style={styles.scrollContainer}>
          {/* category */}
          <FeaturedRow
            list={hotel}
            scrollTitle="Apartment"
            scrollParagraph="Choose your best home"
          />
          {/* features */}
          <FeaturedRow
            list={hotel}
            scrollTitle="Rooms"
            scrollParagraph="Choose your best room"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
