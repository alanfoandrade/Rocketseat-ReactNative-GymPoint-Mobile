import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 150px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
`;

export const OrderTitle = styled.View`
  align-self: stretch;

  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
`;

export const StatusIcon = styled(Icon).attrs({
  name: 'check-circle',
  size: 20,
})`
  color: ${props => (props.answered ? '#42cb59' : '#999')};
`;

export const OrderState = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42cb59' : '#999')};

  margin-left: 8px;
`;

export const OrderDate = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const OrderText = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: #666;
  line-height: 25;

  margin-top: 16px;
`;
