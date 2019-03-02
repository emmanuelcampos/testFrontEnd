import { create } from 'apisauce'

const urlToken = "https://api.github.com/search";


const api = create({
	baseURL: urlToken,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Accept": "application/json"
	}
})

export let searchRequest = (data, text, page) => {
	api.setHeaders({
		Authorization: 'Basic ' + data,
		Accept: 'application/vnd.github.mercy-preview+json'
	})
	return api.get("/topics?q=" + text + "&page=" + page + "&per_page=5");
} 