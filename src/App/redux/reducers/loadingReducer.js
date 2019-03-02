import constants from '../constants';

const initialState = {
	isLoading: false,
};

const loadingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case constants.LOADING_CHANGE: {
			return { ...state, isLoading: payload };
		}
		default:
			return state;
	}
};

export default loadingReducer;