package org.dual.oauth.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1")
public class OAuthController {

	@GetMapping("user")
	
	public String getUser() {
		return "Respuesta Usuario";
	}
	
	@GetMapping("admin")
	public String getAdmin() {
		return "Respuesta Administrador";
	}
}
