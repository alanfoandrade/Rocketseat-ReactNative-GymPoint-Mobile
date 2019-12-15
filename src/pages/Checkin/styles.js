import styled from 'styled-components/native';

import Check from '../../components/Check';

export const CheckInList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const UCheck = styled(Check)`
  margin-bottom: 10px;
`;
