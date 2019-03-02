import constants from '../constants';

const initialState = {
	items: []
};

const searchReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case constants.SEARCH_SUCCESS: {
			return { ...state, items: state.items.concat(payload) };
		}
		case constants.SEARCH_SUCCESSRESET: {
			return { ...state, items: payload };
		}
		case constants.SEARCH_CLEAR: {
			return { ...state, items: payload };
		}
		default:
			return state;
	}
};

export default searchReducer;