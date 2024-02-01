import * as kc from "./keycloak.js";

const login = () => {
	location.href = kc.url + "/realms/" + kc.realm + "/protocol/openid-connect/auth"
	+ "?client_id=" + kc.client_id
	+ "&response_type=code"
	+ "&scope=" + kc.scope
	+ "&redirect_uri=" + kc.redirect_uri;
	+ "&state=" + kc.state
	+ "&code_challenge=" + kc.code_challenge
	+ "&code_challenge_method=S256";
}

export {login};