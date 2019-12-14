import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../components/Button';

import DefaultLayout from '../__layout/DefaultLayout';

import { CheckInList, CheckIn, CheckNumber, CheckDate } from './styles';

export default function Checkin() {
  return (
    <DefaultLayout>
      <Button>Novo check-in</Button>
      <CheckInList>
        <CheckIn>
          <CheckNumber>Check-in #8</CheckNumber>
          <CheckDate>Ontem às 20h</CheckDate>
        </CheckIn>
        <CheckIn>
          <CheckNumber>Check-in #8</CheckNumber>
          <CheckDate>Ontem às 20h</CheckDate>
        </CheckIn>
        <CheckIn>
          <CheckNumber>Check-in #8</CheckNumber>
          <CheckDate>Ontem às 20h</CheckDate>
        </CheckIn>
      </CheckInList>
    </DefaultLayout>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="edit-location" size={22} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon,
};
