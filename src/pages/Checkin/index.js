import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Button from '../../components/Button';

import DefaultLayout from '../__layout/DefaultLayout';

import { CheckInList, UCheck } from './styles';

export default function CheckIn() {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useSelector(state => state.student.profile);

  const loadCheckins = useCallback(async () => {
    try {
      const response = await api.get(`/students/${id}/checkins`);

      const checkFormatted = response.data.map(check => ({
        ...check,
        index: response.data.findIndex(c => c._id === check._id) + 1,
        dateParsed: formatRelative(parseISO(check.createdAt), new Date(), {
          locale: pt,
          addSuffix: true,
        }),
      }));

      const ordenedCheckins = checkFormatted.sort(function compare(a, b) {
        if (a.createdAt < b.createdAt) return 1;
        if (a.createdAt > b.createdAt) return -1;
        return 0;
      });

      setCheckins(ordenedCheckins);
    } catch (err) {
      Alert.alert(
        'Falha ao carregar checkins',
        (err.response && err.response.data.error) || 'Tente novamente'
      );
    }
  }, [id]);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await api.post(`/students/${id}/checkins`);
      setLoading(false);
    } catch (err) {
      Alert.alert(
        'Falha no checkin',
        (err.response && err.response.data.error) || 'Tente novamente'
      );
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadCheckins();
  }, [id, loadCheckins, loading]);

  return (
    <DefaultLayout>
      <Button loading={loading} onPress={handleSubmit}>
        Novo check-in
      </Button>
      <CheckInList
        data={checkins}
        keyExtractor={item => String(item._id)}
        renderItem={({ item }) => <UCheck data={item} />}
      />
    </DefaultLayout>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="edit-location" size={22} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon,
};
