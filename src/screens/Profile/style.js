import { StyleSheet } from "react-native";
import { color } from "../../color";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  card: {
    borderRadius: 8,
    height: 190,
    backgroundColor: "#ffffff",
    width: 150,
    gap: 8,
    marginRight: 10,
  },
  image: {
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: "65%",
    backgroundColor: color.gray,
  },
  textContainer: {
    paddingHorizontal: 5,
    display: "flex",
    gap: 6,
  },
  first: {
    display: "flex",
    flexDirection: "row",
  },
});
