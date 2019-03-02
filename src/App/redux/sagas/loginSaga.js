import { takeLatest, put, call } from 'redux-saga/effects'
import { Alert } from 'react-native';
import base64 from 'react-native-base64'

import constants from '../constants'
import { loginRequest } from '../services/loginService';
import { setToken, setValue } from '../../utils/storage';

function* login({ payload: { email, password } }) {

	try {
		yield put({ type: constants.LOADING_CHANGE, payload: true });

		let encode = base64.encode(email + ":" + password);

		const response = yield call(loginRequest, encode);
		switch (response.status) {
			case 200:
				yield put(
					{
						type: constants.AUTH_SUCCESS,
						payload:
						{
							loggedIn: true,
							data: response.data,
							encode: encode
						}
					});
				setToken(encode);
				setValue("data", JSON.stringify(response.data));

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

export default [takeLatest(constants.AUTH_REQUEST, login)]
