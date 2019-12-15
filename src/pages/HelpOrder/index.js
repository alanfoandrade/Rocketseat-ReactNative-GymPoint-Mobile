import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Button from '../../components/Button';

import DefaultLayout from '../__layout/DefaultLayout';

import { HelpOrderList, UHelp } from './styles';

export default function HelpOrder() {
  const [helporders, setHelpOrders] = useState([]);

  const { id } = useSelector(state => state.student.profile);

  useEffect(() => {
    async function loadHelpOrders() {
      try {
        const response = await api.get(`/students/${id}/help-orders`);

        const helpFormatted = response.data.map(help => ({
          ...help,
          dateParsed: formatRelative(parseISO(help.createdAt), new Date(), {
            locale: pt,
            addSuffix: true,
          }),
        }));

        setHelpOrders(helpFormatted);
      } catch (err) {
        Alert.alert(
          'Falha ao carregar pedidos de ajuda',
          (err.response && err.response.data.error) || 'Tente novamente'
        );
      }
    }
    loadHelpOrders();
  }, [id]);

  return (
    <DefaultLayout>
      <Button loading={false} onPress={() => {}}>
        Novo pedido de auxilio
      </Button>
      <HelpOrderList
        data={helporders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <UHelp data={item} />}
      />
      <HelpOrderList />
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
