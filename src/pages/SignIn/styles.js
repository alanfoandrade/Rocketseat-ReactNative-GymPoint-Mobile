import { Platform } from 'react-native';

import styled from 'styled-components/native';
import Button from '../../components/Button';

import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 0 25px;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
`;
export const LoginInput = styled(Input)`
  margin-top: 20px;
`;
export const LoginButton = styled(Button)`
  margin-top: 15px;
`;
