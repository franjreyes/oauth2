import * as kc from "./keycloak.js";

export function nav(selected) {
	let nav = document.getElementsByClassName("nav")[0];
	let h1 = document.createElement("h1");
	h1.innerText = "OAuth 2.0 - Authorization Code PKCE";
	let button = document.createElement("button");
	button.addEventListener("click", () => {
		location.href = kc.url + "/realms/" + kc.realm + "/protocol/openid-connect/logout";
	})
	button.innerText = "Logout";
	nav.append(createDiv(h1, button, "flex-row", "justify"));
	let div = createDiv(createLink("index.html", "Get authorization code", selected), undefined, "flex-row", "justify");
	div.append(createLink("code.html","Get token", selected));
	div.append(createLink("api.html","Get resources", selected));
	nav.append(div);
}

export function properties() {
	let div = document.getElementsByClassName("properties")[0];
	div.append(createDiv(createLabel("url"), createInput("url", kc.url), "flex-row","justify"));
	div.append(createDiv(createLabel("realm"), createInput("realm", kc.realm),"flex-row","justify"));
	div.append(createDiv(createLabel("client_id"), createInput("client_id", kc.client_id),"flex-row","justify"));
	div.append(createDiv(createLabel("scope"), createInput("scope", kc.scope),"flex-row","justify"));
	div.append(createDiv(createLabel("redirect_uri"), createInput("redirect_uri", kc.redirect_uri),"flex-row","justify"));
	div.append(createDiv(createLabel("state"), createInput("state", kc.state),"flex-row","justify"));
	div.append(createDiv(createLabel("code_challenge"), createInput("code_challenge", kc.code_challenge), "flex-row","justify"));
}

export function propertiesToken() {
	let div = document.getElementsByClassName("properties")[0];
	div.append(createDiv(createLabel("grant_type"), createInput("authorization_code", "authorization_code"), "flex-row","justify"));
	div.append(createDiv(createLabel("client_id"), createInput("client_id", kc.client_id),"flex-row","justify"));
	div.append(createDiv(createLabel("scope"), createInput("scope", kc.scope),"flex-row","justify"));
	div.append(createDiv(createLabel("redirect_uri"), createInput("redirect_uri", kc.redirect_uri),"flex-row","justify"));
	div.append(createDiv(createLabel("client_secret"), createInput("client_secret", kc.client_secret), "flex-row","justify"));
	div.append(createDiv(createLabel("code_verifier"), createInput("code_verifier", kc.code_verifier), "flex-row","justify"));
}

export function code() {
	let param = getCode();
	let button;
	if(param === null || param === undefined) {
		param = "No hay Authorization Code o no es válido";
	} else {
		button = document.createElement("button");
		button.setAttribute("onclick", "code.getToken('" + param +"')");
		button.innerText = "Obtener TOKEN";
	}
	let code = document.getElementsByClassName("action")[0];
	let h2 = document.createElement("h2");
	h2.innerText = "code";
	let span = document.createElement("span");
	span.innerText = param;
	let div = createDiv(h2, span, "flex-column", "center", "dark");
	if(button !== undefined && button !== null) {
		div.append(createDiv(button, undefined, "flex-row", "center"));
	}
	code.append(div);
}

function getCode() {
	const params = new URLSearchParams(document.location.search);
	return params.get("code");
}

function createLabel(text) {
	let label = document.createElement("label");
	label.setAttribute("for", text);
	label.innerText = text;
	return label;
}

function createInput(text, value) {
	let input = document.createElement("input");
	input.setAttribute("id", text);
	input.setAttribute("name", text);
	input.setAttribute("type", "text");
	input.setAttribute("disabled", "true");
	input.setAttribute("placeholder", text);
	input.defaultValue = value;
	return input;
}

function createDiv(element, element2, ...classes) {
	let div = document.createElement("div");
	if(element2 === undefined) {
		div.append(element);
	} else {
		div.append(element, element2);
	}
	if(classes !== undefined) {
		classes.forEach(c => div.classList.add(c));
	}
	return  div;
}

function createLink(href, text, selected) {
	let a = document.createElement("a");
	a.setAttribute("href", href);
	if(href.includes(selected)) {
		a.classList.add("selected");
	}
	a.innerText = text;
	return a;
}