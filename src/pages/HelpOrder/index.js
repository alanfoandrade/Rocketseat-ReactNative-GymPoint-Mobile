import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import DefaultLayout from '../__layout/DefaultLayout';

import {
  HelpOrderList,
  HOrder,
  OrderTitle,
  Left,
  StatusIcon,
  OrderState,
  OrderDate,
  OrderText,
} from './styles';

export default function HelpOrder() {
  return (
    <DefaultLayout>
      <Button>Novo pedido de auxilio</Button>
      <HelpOrderList>
        <HOrder>
          <OrderTitle>
            <Left>
              <StatusIcon name="check-circle" size={20} answered={false} />
              <OrderState answered={false}>Sem resposta</OrderState>
            </Left>
            <OrderDate>Ontem às 20h</OrderDate>
          </OrderTitle>
          <OrderText>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as...
          </OrderText>
        </HOrder>

        <HOrder>
          <OrderTitle>
            <Left>
              <StatusIcon name="check-circle" size={20} answered />
              <OrderState answered>Respondido</OrderState>
            </Left>
            <OrderDate>Ontem às 20h</OrderDate>
          </OrderTitle>
          <OrderText>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as...
          </OrderText>
        </HOrder>
      </HelpOrderList>
    </DefaultLayout>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="live-help" size={22} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

HelpOrder.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon,
};
