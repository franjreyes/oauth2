import * as kc from "./keycloak.js";

export const getToken = (code) => {
    let _body = {
        "grant_type":"authorization_code",
        "code":code,
        "redirect_uri":kc.redirect_uri,
        "client_id":kc.client_id,
        "scope":kc.scope,
        "client_secret":kc.client_secret,
        "code_verifier":kc.code_verifier
    }
    let formBody = [];
    for(let property in _body) {
        let key = encodeURIComponent(property);
        let value = encodeURIComponent(_body[property]);
        formBody.push(key + "=" + value);
    }
    formBody = formBody.join("&");

    fetch(`${kc.url}/realms/${kc.realm}/protocol/openid-connect/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*',
                'Connection': 'keep-alive'
            },
            body: formBody
        }
    )
        .then(response => response.json())
        .then((response) => {
            window.sessionStorage.setItem('access_token', response.access_token);
        })
        .then(() => {
            location.href = "token.html";
        });
}