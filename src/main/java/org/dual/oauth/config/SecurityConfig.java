package org.dual.oauth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	@Bean
    SecurityFilterChain  filterChain(HttpSecurity http) throws Exception {
    	http.authorizeHttpRequests(
    			authorize -> authorize
    			.requestMatchers("/ejemplo/**").permitAll()
                .anyRequest().authenticated()
        ).oauth2ResourceServer((oauth2) -> oauth2
        		.jwt(jwt ->
                jwt.jwtAuthenticationConverter(customJwtAuthenticationConverter())
        ));

    	return http.build();
    }

    @Bean
    JwtAuthenticationConverter customJwtAuthenticationConverter() {
	    JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
	    converter.setJwtGrantedAuthoritiesConverter(new CustomJwtGrantedAuthoritiesConverter());
	    return converter;
	}
}