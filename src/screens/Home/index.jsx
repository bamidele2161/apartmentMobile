import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "./style";

const Home = () => {
  let moveAnimation = new Animated.Value(0);

  const moveBrand = () => {
    Animated.timing(moveAnimation, {
      toValue: -10,
      timing: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveBrand();
  }, []);

  const moveAnimationStyle = {
    transform: [{ translateY: moveAnimation }],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={moveAnimationStyle}>
        <Text style={styles.splastText}>BHome</Text>
      </Animated.View>
    </View>
  );
};

export default Home;
