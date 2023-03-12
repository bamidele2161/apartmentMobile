import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import PrimaryInput from "../../../components/Input";
import PrimaryButton from "../../../components/button";
import AuthButtomText from "../../../components/text/authButtomText";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.formContainer}>
        <PrimaryInput placeholder={"Email Address"} />
        <PrimaryInput placeholder={"Password"} password />
        <PrimaryButton title="Sign In" />
        <AuthButtomText
          question="Don't have an account?"
          bottomLink="Sign Up"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default Login;
