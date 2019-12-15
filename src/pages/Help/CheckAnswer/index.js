import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import HeaderLogo from '../../../components/HeaderLogo';

import {
  Wrapper,
  Container,
  HelpTitle,
  TitleText,
  TitleTime,
  StyledText,
  AnswerTitle,
} from './styles';

export default function CheckAnswer({ navigation }) {
  const helporder = navigation.getParam('helporder');
  return (
    <Wrapper>
      <Container>
        <HelpTitle>
          <TitleText>PERGUNTA</TitleText>
          <TitleTime>{helporder.dateParsed}</TitleTime>
        </HelpTitle>
        <StyledText>{helporder.question}</StyledText>
        <AnswerTitle>RESPOSTA</AnswerTitle>
        <StyledText>{helporder.answer}</StyledText>
      </Container>
    </Wrapper>
  );
}

CheckAnswer.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={25} color="#444" />
    </TouchableOpacity>
  ),
  headerTitle: () => <HeaderLogo />,
});

CheckAnswer.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
