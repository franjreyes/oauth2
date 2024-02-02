import * as token from "./token.js";

export const getUser = () => {
	return fetch("http://localhost/v1/user", {
		method: "GET",
		headers: {
			"Authorization": "Bearer " + token.token().loadToken()
		}
	})
	.then(response => {
		let span = document.getElementsByClassName("response")[0]
		span.innerText = response.status + " - "
		if(response.status === 401) {
			span.append("Unauthorized")
		}
		return response.text()
	})
	.then(res => {
		let span = document.getElementsByClassName("response")[0];
		span.append(res);
	});
}

export const getAdmin = () => {
	return fetch("http://localhost/v1/admin", {
		method: "GET",
		headers: {
			"Authorization": "Bearer " + token.token().loadToken()
		}
	})
	.then(response => {
		let span = document.getElementsByClassName("response")[0]
		span.innerText = response.status + " - "
		if(response.status === 401) {
			span.append("Unauthorized")
		}
		return response.text()
	})
	.then(res => {
		let span = document.getElementsByClassName("response")[0];
		span.append(res);
	});
}

