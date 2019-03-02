import { combineReducers } from "redux";

import loginReducer from './loginReducer';
import loadingReducer from './loadingReducer';
import searchReducer from './searchReducer';

export const reducers = combineReducers({
	loading: loadingReducer,
	login: loginReducer,
	search: searchReducer
});



