import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Container, ToggleText } from "./style";

const PrimaryInput = ({ placeholder, password, inputName }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [active, setActive] = useState(false);

  return (
    <>
      {!password ? (
        <Container border={active ? "1px solid #9403fc" : "1px solid #c9c9c9"}>
          <TextInput
            onBlur={() => setActive(false)}
            onFocus={() => setActive(true)}
            placeholder={placeholder}
            name={inputName}
          />
        </Container>
      ) : (
        <Container border={active ? "1px solid #9403fc" : "1px solid #c9c9c9"}>
          <TextInput
            onBlur={() => setActive(false)}
            onFocus={() => setActive(true)}
            placeholder={placeholder}
            secureTextEntry={showPassword}
            name={inputName}
          />
          {showPassword ? (
            <ToggleText>Show</ToggleText>
          ) : (
            <ToggleText>Hide</ToggleText>
          )}
        </Container>
      )}
    </>
  );
};

export default PrimaryInput;
