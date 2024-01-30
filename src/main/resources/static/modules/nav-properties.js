import * as kc from "./keycloak.js";

export function nav(selected) {
	let nav = document.getElementsByClassName("nav")[0];
	let h1 = document.createElement("h1");
	h1.innerText = "Flujo de autorización";
	nav.append(createDiv(h1, undefined, "flex-row", "center"));
	let div = createDiv(createLink("index.html", "Solicitud de code", selected), undefined, "flex-row", "center");
	div.append(createLink("code.html","Solicitud de token", selected));
	div.append(createLink("logout.html","Logout", selected));
	nav.append(div);
}

export function properties() {
	let div = document.getElementsByClassName("properties")[0];
	div.append(createDiv(createLabel("url"), createInput("url", kc.url), "flex-row","center"));
	div.append(createDiv(createLabel("realm"), createInput("realm", kc.realm),"flex-row","center"));
	div.append(createDiv(createLabel("client_id"), createInput("client_id", kc.client_id),"flex-row","center"));
	div.append(createDiv(createLabel("scope"), createInput("scope", kc.scope),"flex-row","center"));
	div.append(createDiv(createLabel("redirect_uri"), createInput("redirect_uri", kc.redirect_uri),"flex-row","center"));
	div.append(createDiv(createLabel("state"), createInput("state", kc.state),"flex-row","center"));
	div.append(createDiv(createLabel("code_challenge"), createInput("code_challenge", kc.code_challenge), "flex-row","center"));
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