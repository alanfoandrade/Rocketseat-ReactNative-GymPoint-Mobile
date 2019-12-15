import styled from 'styled-components/native';

import Help from '../../components/Help';

export const HelpOrderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const UHelp = styled(Help)`
  margin-bottom: 10px;
`;
