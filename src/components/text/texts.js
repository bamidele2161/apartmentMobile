import styled from "styled-components/native";

export const LargeText = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: #0f0f0f;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb}px;
`;
export const MediumText = styled.Text`
  font-weight: 500;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb}px;
`;
export const MediumTitleText = styled.Text`
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb}px;
  font-size: 20px;
`;
export const SmallText = styled.Text`
  font-weight: 500;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb}px;
  font-size: 16px;
  color: #c9c9c9;
`;
export const ParagraphText = styled.Text`
  font-weight: 400;
  color: #1c1b1c;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb}px;
  font-size: 12;
`;
