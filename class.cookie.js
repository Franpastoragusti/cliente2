"use strict";
class CookiesFran{

  almacenarCookie(nombre, valor, caducidad, dominio, ruta, segura){
    if (arguments.legth < 2) {
        return;
    }
    cookie = encodeURIComponent(nombre) +"="+ encodeURIComponent(valor);

    if (argument[2] != undefined) {
      cookie += ";max-age="+caducidad;
    }
    if (argument[3] != undefined) {
      cookie += ";domain="+dominio;
    }
    document.cookie=cookie;
  }

  pruebaConnect(){
    console.log("hoñaaaaa")
  }

}

module.exports = CookiesFran;
