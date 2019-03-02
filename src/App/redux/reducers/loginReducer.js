import constants from '../constants';

const initialState = {
	data:
	{
		loggedIn: false,
		data: {},
		encode:""
	}	
};

console.log("initialState");
console.log(initialState);

const loginReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case constants.AUTH_SUCCESS: {
			return { ...state, data: payload };
		}
		case constants.AUTH_OFF: {
			return { ...state, data: payload };
		}
		default:
			return state;
	}
};

export default loginReducer;