import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { checkSuccess, checkFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    yield call(api.post, `/students/${id}/checkins`);

    yield put(checkSuccess());

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha no checkin',
      (err.response && err.response.data.error) || 'Tente novamente'
    );

    yield put(checkFailure());
  }
}

export default all([takeLatest('@checkin/CHECK_REQUEST', signIn)]);
