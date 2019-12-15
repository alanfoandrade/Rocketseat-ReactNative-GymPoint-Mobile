import styled from 'styled-components/native';

import Input from '../../../components/Input';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-top: 45px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const HelpInput = styled(Input).attrs({
  numberOfLines: 15,
})`
  height: 300px;
  margin-bottom: 20px;
`;
