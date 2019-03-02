
import constants from '../constants';

export const search = (text, page) => (
	{
		type: constants.SEARCH_REQUEST,
		payload: { text, page }
	});


export const searchClear = () => (
	{
		type: constants.SEARCH_CLEAR,
		payload: []
	});	