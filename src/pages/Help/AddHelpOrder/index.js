import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import HeaderLogo from '../../../components/HeaderLogo';

import api from '../../../services/api';

import { Wrapper, HelpInput } from './styles';

export default function AddHelpOrder({ navigation }) {
  const [question, setQuestion] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useSelector(state => state.student.profile);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);

      await api.post(`/students/${id}/help-orders`, { question });

      setLoading(false);

      navigation.navigate('HelpOrders');
    } catch (err) {
      Alert.alert(
        'Falha ao pedir ajuda',
        (err.response && err.response.data.error) || 'Tente novamente'
      );
      setLoading(false);
    }
  }, [id, navigation, question]);

  return (
    <Wrapper>
      <HelpInput
        autoCorrect={false}
        placeholder="Inclua seu pedido de auxílio"
        multiline
        value={question}
        onChangeText={setQuestion}
      />

      <Button loading={loading} onPress={handleSubmit}>
        Enviar pedido
      </Button>
    </Wrapper>
  );
}

AddHelpOrder.navigationOptions = ({ navigation }) => ({
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

AddHelpOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
