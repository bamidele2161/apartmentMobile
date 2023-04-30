import { StyleSheet } from "react-native";
import { color } from "../../color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageView: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: color.primaryColor,
    width: 45,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    marginTop: 24,
  },
});

// export const InputWrapper = styled.View`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;
