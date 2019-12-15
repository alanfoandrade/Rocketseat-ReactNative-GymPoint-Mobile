import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  margin-top: 45px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Container = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 40px;
`;

export const HelpTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const TitleTime = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const StyledText = styled.Text`
  font-size: 14px;
  color: #666;
  line-height: 25;

  margin-top: 10px;
`;

export const AnswerTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;

  margin-top: 20px;
`;
