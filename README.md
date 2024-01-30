# OAUTH

## ¿Qué es OAuth? 

Open Authorization  es un estándar de autorización para compartir recursos de un usuario entre distintas aplicaciones sin necesidad de tener acceso a las credenciales del mismo. 

La finalidad de OAuth es que un usuario pueda dar permisos a una aplicación para que acceda a sus datos o parte de ellos. Su uso está ampliamente extendido como en el caso de Google, X (Twitter) , GitHub, Instagram, Amazon, Microsoft (Account, Azure Active Directory), etc. 

Por ejemplo, si queremos publicar una foto en Facebook de nuestro móvil, esta última no tiene que conocer nuestras credenciales de Google para acceder a nuestras fotos. Hemos dado permiso a Facebook para que acceda a este recurso y así poder publicar nuestras fotos pero no tendría acceso a nuestro correo u otra información no autorizada. 

OAuth comenzó a gestarse en noviembre de 2006, publicando un primer borrador en octubre de 2007 y su primera versión en abril de 2010. 

La versión actual OAuth 2.0, más simple y flexible, no es compatible con OAuth 1.0 que ha sido reemplazada en casi su totalidad por la nueva versión. Los nuevos desarrollos e implementaciones se basan en OAuth2. 

OAuth define cuatro roles: 

Resource Owner: El usuario propietario de los datos. 

Resource Server: El servicio que almacena los datos del usuario. Requiere un token para acceder a estos datos. 

Client: El servicio o aplicación que quiere acceder a uno o varios datos del usuario. 

Authorization Server: La aplicación donde el usuario se autentica y proporciona el consentimiento al cliente para acceder a sus datos. Esta aplicación también proporciona tokens al cliente para el acceso a los datos a los que ha sido autorizado. 

Tipos de cliente OAuth2: 

Confidential client: puede almacenar claves secretas de forma segura. 

Public client: los que no pueden. 

 

Flujos de autorización (Grant types) más comunes: 

Authorization Code 

PKCE (leído como pixie) 

Client Credentials 

Device Code 

Refresh Token 

 

 

Flujo abstracto de protocolo: 

 

 

 