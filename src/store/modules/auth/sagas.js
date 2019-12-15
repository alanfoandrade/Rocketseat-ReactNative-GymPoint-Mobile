import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, '/auth/student', { id });

    const { student } = response.data;

    yield put(signInSuccess(student));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      (err.response && err.response.data.error) ||
        'Verifique os dados, tente novamente'
    );

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
