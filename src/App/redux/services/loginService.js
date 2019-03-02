import { create } from 'apisauce'

const urlToken = "https://api.github.com";


const api = create({
	baseURL: urlToken,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Accept": "application/json"
	}
})

export let loginRequest = (data) => {
	api.setHeaders({
		Authorization: 'Basic ' + data,
	})
	return api.get("/user");
} 