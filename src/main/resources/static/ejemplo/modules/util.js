export function getCode() {
	const params = new URLSearchParams(document.location.search);
	return params.get("code");
}

export function createLabel(text) {
	let label = document.createElement("label");
	label.setAttribute("for", text);
	label.innerText = text;
	return label;
}

export function createInput(text, value) {
	let input = document.createElement("input");
	input.setAttribute("id", text);
	input.setAttribute("name", text);
	input.setAttribute("type", "text");
	input.setAttribute("disabled", "true");
	input.setAttribute("placeholder", text);
	input.defaultValue = value;
	return input;
}

export function createDiv(element, element2, ...classes) {
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

export function createLink(href, text, selected) {
	let a = document.createElement("a");
	a.setAttribute("href", href);
	if(href.includes(selected)) {
		a.classList.add("selected");
	}
	a.innerText = text;
	return a;
}

export function createButton(nombre, fn) {
	let button = document.createElement("button");
	button.setAttribute("onclick", fn);
	button.innerText = nombre;
	return button;
}