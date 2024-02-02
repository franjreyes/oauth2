import * as util from "./util.js";

class Token {
	constructor(){
		this.header = this.#getTokenPart(0);
		this.payload = this.#getTokenPart(1);
		this.payloadDecoded = this.#parseJwt();
		this.signature = this.#getTokenPart(2);
	}
	loadToken() {
		return window.sessionStorage.getItem('access_token');
	}
	#getTokenPart(position) {
		let token = this.loadToken();
		return token !== undefined && token !== null ? token.split(".")[position] : "";
	}
	#parseJwt() {
		let token = this.loadToken();
		console.debug(token);
		if(token !== null && token !== undefined) {
			let base64Url = token.split('.')[1];
			let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
			let payload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			}).join(''));
			return JSON.stringify(JSON.parse(payload), undefined, 2);
		} else {
			return "";	
		}	
	}
}

export function token() {
	return new Token();
}


export function tokenYPayload() {
	let div = document.getElementsByClassName("properties")[0];
	let token = new Token();
	if(token !== null && token.payload.length > 0) {
		let span = document.createElement("span");
		span.append(token.payload);
		span.classList.add("red");
		let divToken = util.createDiv(token.header + ".", span);
		divToken.append("." + token.signature);
		let pre = document.createElement("pre");
		pre.append(token.payloadDecoded);
		div.append(util.createDiv(divToken, util.createDiv(pre, undefined, "flex-row", "justify"), "flex-column", "justify"));
	}
}