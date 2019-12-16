import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert, TouchableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

import api from '../../../services/api';

import Button from '../../../components/Button';

import DefaultLayout from '../../__layout/DefaultLayout';

import { HelpOrderList, UHelp } from './styles';

function HelpOrders({ navigation, isFocused }) {
  const [helporders, setHelpOrders] = useState([]);

  const { id } = useSelector(state => state.student.profile);

  const loadHelpOrders = useCallback(async () => {
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
  }, [id]);

  useEffect(() => {
    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused, loadHelpOrders]);

  return (
    <DefaultLayout>
      <Button onPress={() => navigation.navigate('AddHelpOrder')}>
        Novo pedido de auxilio
      </Button>

      <HelpOrderList
        data={helporders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: helporder }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckAnswer', { helporder })}
          >
            <UHelp data={helporder} />
          </TouchableOpacity>
        )}
      />
    </DefaultLayout>
  );
}

HelpOrders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(HelpOrders);
