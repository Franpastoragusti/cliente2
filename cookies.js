
  var libros=[
    {
      'titulo':'Introduccion a JavaScript',
      'nombre':'libro1'
    },
    {
      'titulo':'Introduccion a lenguaje PHP',
      'nombre':'libro2'
    },
    {
      'titulo':'Introduccion a jQuery',
      'nombre':'libro3'
    },
    {
      'titulo':'Introduccion a AJAX',
      'nombre':'libro4'
    }
  ]

  function almacenarCookie(nombre, valor, caducidad, dominio, ruta, segura){
    if (arguments.length < 2) {
      return;
    }

    if (document.cookie.indexOf(nombre)!= -1) {
      console.log(nombre, valor)
      var valorActualCookie = parseInt(recuperarCookie(nombre));
      if (valor == -1) {
        valorActualCookie -= 1;
      }else{
        valorActualCookie += 1;
      }
      cookie = encodeURIComponent(nombre) +"="+ encodeURIComponent(valorActualCookie);

    }else{
      cookie = encodeURIComponent(nombre) +"="+ encodeURIComponent(valor);
      if (arguments[2] != undefined) {
        cookie += ";max-age="+caducidad;
      }
      if (arguments[3] != undefined) {
        cookie += ";domain="+dominio;
      }
      if (arguments[4] != undefined) {
        cookie += ";path="+ruta;
      }
      if (arguments[5] != undefined) {
        cookie += ";secure=";
      }
    }
    document.cookie=cookie;
    verCesta();
  }

  function recuperarCookie(nombreCookie){

      if (document.cookie.length > 0){
          campoNombre=nombreCookie+"=";
          posicionCookie=document.cookie.indexOf(campoNombre);
          if (posicionCookie!=-1) {
              posicionInicio=posicionCookie+campoNombre.length;
              puntoYComa = document.cookie.indexOf(";",posicionCookie);
              if (puntoYComa == -1) {
                posicionFinal = document.cookie.length;
              }else {
                posicionFinal = puntoYComa;
              }
              valorCookie = document.cookie.substring(posicionInicio,posicionFinal);
          }
          return decodeURIComponent(valorCookie);

      }
  }

  function borrarCesta() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
      	var cookie = cookies[i];
      	var posicionCookie = cookie.indexOf("=");
        if (posicionCookie > -1) {
          var name =cookie.substr(0, posicionCookie)
        }else{
          var name = cookie;
        }
      	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }
  function verCesta() {
    console.log(document.cookie)

    var cesta = document.getElementById('cesta');
    cesta.innerHTML = "";
    console.log(cesta);
    libros.forEach((libro)=>{
      console.log("hola")
      if (document.cookie.indexOf(libro.nombre)!= -1) {
        cesta.innerHTML+="<li><button type='button' name='button' onclick=almacenarCookie('"+libro.nombre+"',-1,1200)>-</button>"+libro.titulo+"("+recuperarCookie(libro.nombre)+")</li>";

      }

    })

  }
