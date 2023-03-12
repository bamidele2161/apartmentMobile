import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import PrimaryInput from "../../../components/Input";
import PrimaryButton from "../../../components/button";
import AuthButtomText from "../../../components/text/authButtomText";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.formContainer}>
        <PrimaryInput placeholder={"First Name"} />
        <PrimaryInput placeholder={"Last Name"} />
        <PrimaryInput placeholder={"Email Address"} />
        <PrimaryInput placeholder={"Phone Number"} />
        <PrimaryInput placeholder={"Password"} password />
        <PrimaryButton title="Sign Up" />
        <AuthButtomText
          question="Already have an account?"
          bottomLink="Sign In"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default Register;
