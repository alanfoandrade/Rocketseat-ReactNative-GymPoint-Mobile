import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CheckNumber = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const CheckDate = styled.Text`
  font-size: 14px;
  color: #666;
`;
