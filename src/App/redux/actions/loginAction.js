
import constants from '../constants';

export const authorize = (email, password) => (
	{
		type: constants.AUTH_REQUEST,
		payload: { email, password }
	});

export const succesLogin = (loggedIn,data,encode) =>(
		{
			type: constants.AUTH_SUCCESS,
			payload:
			{
				loggedIn: loggedIn,
				data: data,
				encode: encode
			}
		});

export const logOut = () => (
	{
		type: constants.AUTH_OFF,
		payload: {
			loggedIn: false,
			data: {}
		}
	});
