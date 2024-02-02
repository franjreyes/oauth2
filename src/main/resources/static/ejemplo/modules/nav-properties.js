import * as kc from "./keycloak.js";
import * as util from "./util.js";

export function nav(selected) {
	let nav = document.getElementsByClassName("nav")[0];
	let h1 = document.createElement("h1");
	h1.innerText = "OAuth 2.0 - Authorization Code PKCE";
	let a = document.createElement("a");
	a.addEventListener("click", (e) => {
		e.preventDefault();
		location.href = kc.url + "/realms/" + kc.realm + "/protocol/openid-connect/logout";
	})
	a.href = "";
	a.innerText = "Logout";
	nav.append(util.createDiv(h1, a, "flex-row", "justify", "mb-50"));
	let div = util.createDiv(util.createLink("index.html", "OAuth 2.0 properties", selected), undefined, "flex-row", "justify");
	div.append(util.createLink("code.html","Authorization code", selected));
	div.append(util.createLink("token.html","Token - payload", selected));
	div.append(util.createLink("resource.html","Resources", selected));
	nav.append(div);
}

export function properties() {
	let div = document.getElementsByClassName("properties")[0];
	div.append(util.createDiv(util.createLabel("url"), util.createInput("url", kc.url), "flex-row","justify"));
	div.append(util.createDiv(util.createLabel("realm"), util.createInput("realm", kc.realm),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("client_id"), util.createInput("client_id", kc.client_id),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("scope"), util.createInput("scope", kc.scope),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("redirect_uri"), util.createInput("redirect_uri", kc.redirect_uri),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("state"), util.createInput("state", kc.state),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("code_challenge"), util.createInput("code_challenge", kc.code_challenge), "flex-row","justify"));
}

export function tokenProperties() {
	let div = document.getElementsByClassName("properties")[0];
	div.append(util.createDiv(util.createLabel("grant_type"), util.createInput("authorization_code", "authorization_code"), "flex-row","justify"));
	div.append(util.createDiv(util.createLabel("client_id"),util.createInput("client_id", kc.client_id),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("scope"), util.createInput("scope", kc.scope),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("redirect_uri"), util.createInput("redirect_uri", kc.redirect_uri),"flex-row","justify"));
	div.append(util.createDiv(util.createLabel("code_verifier"), util.createInput("code_verifier", kc.code_verifier), "flex-row","justify"));
	//div.append(createDiv(createLabel("client_secret"), createInput("client_secret", kc.client_secret), "flex-row","justify"));
}

export function resources() {
	let properties = document.getElementsByClassName("properties")[0];
	let div = util.createDiv(util.createButton("Recurso para USER", "resource.getUser()"), util.createButton("Recurso para ADMIN", "resource.getAdmin()"),"flex-row", "center");
	properties.append(div);
	let span = document.createElement("span");
	span.classList.add("response");
	properties.append(span);
}

export function code() {
	let param = util.getCode();
	let button;
	if(param === null || param === undefined) {
		param = "No hay Authorization Code o no es válido";
	} else {
		button = util.createButton("Obtener TOKEN", "code.getToken('" + param +"')");
	}
	let code = document.getElementsByClassName("action")[0];
	let span = document.createElement("span");
	span.innerHTML = "<label><b>CODE</b></label>" + param;
	let div = util.createDiv(span, undefined, "flex-column", "center");
	if(button !== undefined && button !== null) {
		div.append(util.createDiv(button, undefined, "flex-row", "center"));
	}
	code.append(div);
}