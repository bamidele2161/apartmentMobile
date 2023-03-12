import styled from "styled-components/native";

export const Container = styled.View`
  border: ${(props) => props.border};
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 15px;
`;
export const ToggleText = styled.Text`
  font-size: 12px;
`;
