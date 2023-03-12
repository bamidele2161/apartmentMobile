import { StyleSheet, Text, View } from "react-native";
import { color } from "../../color";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  splastText: {
    fontSize: 40,
    color: color.white,
    fontWeight: "bold",
  },
});
