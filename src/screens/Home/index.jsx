import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "./style";

const Home = ({ navigation }) => {
  let moveAnimation = new Animated.Value(0);

  const moveBrand = () => {
    Animated.timing(moveAnimation, {
      toValue: -10,
      timing: 4000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveBrand();
  }, []);

  const moveAnimationStyle = {
    transform: [{ translateY: moveAnimation }],
    width: "100%",
    paddingHorizontal: 50,
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.splastText}>BHome</Text>
        <Animated.View style={moveAnimationStyle}>
          <View style={styles.smallWrapper}>
            <Text style={styles.paragraphText}>comfortable homes...</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Home;
