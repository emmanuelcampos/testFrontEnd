import { AsyncStorage } from 'react-native';

export let setToken = (data) => {
	AsyncStorage.setItem("TOKEN", data);
}

export let clearToken = () => {
	AsyncStorage.removeItem("TOKEN");
}

export let clearValue = (key) => {
	AsyncStorage.removeItem(key);
}

export let setValue = (key, data) => {
	AsyncStorage.setItem(key, data);
}

export let getValue = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return value;
		}
		return null;
	} catch (error) {
		return null;
	}
}

export let getToken = async () => {
	try {
		const value = await AsyncStorage.getItem("TOKEN");
		if (value !== null) {
			return value;
		}
		return null;
	} catch (error) {
		return null;
	}
}


