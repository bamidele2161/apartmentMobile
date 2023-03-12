import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
