import { takeLatest, put, call } from 'redux-saga/effects'
import { Alert } from 'react-native';
import base64 from 'react-native-base64'

import constants from '../constants'
import { searchRequest } from '../services/searchService';

import { saveToken,getToken } from '../../utils/storage'

function* search({ payload: { text, page } }) {

	try {
		yield put({ type: constants.LOADING_CHANGE, payload: true });		

		let encode=""
		getToken().then((token) => {
			encode = token;
		});

		const response = yield call(searchRequest, encode, text, page);
		switch (response.status) {
			case 200:
				yield put({ type: constants.SEARCH_SUCCESS, payload: response.data.items });
				break;
			default:
				Alert.alert('', response.data.message, [{ text: 'OK', onPress: () => console.log('OK Pressed') },], { cancelable: false });
		}
	} catch (error) {		
		Alert.alert('', error.toString(), [{ text: 'OK', onPress: () => console.log('OK Pressed') },], { cancelable: false });
	} finally {
		yield put({ type: constants.LOADING_CHANGE, payload: false });
	}

}

export default [takeLatest(constants.SEARCH_REQUEST, search)]
