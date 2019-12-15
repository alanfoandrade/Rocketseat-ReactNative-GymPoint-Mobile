import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
  height: 45px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  textAlignVertical: 'top',
})`
  flex: 1;
  font-size: 16px;
  color: #666;
`;
