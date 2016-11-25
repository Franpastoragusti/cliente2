var usuario = prompt("elije una opcion entre piedra, papel o tijeras");
var numUser;
var ia = Math.floor((Math.random() * 3) + 1);
var eleccionIa;
var victoria = 0;
var volverAjugar = true;
while (volverAjugar) {
        volverAjugar= false;
        switch (usuario) {
          case 'tijeras':
            numUser=1;
            break;
          case 'papel':
            numUser=2
            break;
          case 'piedra':
            numUser=3;
            break;
          default:
            alert("no has elegido una opcion correcta");
        }

        switch (ia) {
          case 1:
            eleccionIa="tijeras";
            break;
          case 2:
            eleccionIa="papel";
            break;
          case 3:
            eleccionIa="piedra";
            break;
          default:
        }

        document.write("<h4>La eleccion del jugador ha sido "+usuario);
        document.write("<h4>La eleccion del ordenador ha sido "+eleccionIa);

        if (numUser != ia) {
          if (ia==2 && numUser == 1) {
            victoria = 1;
          }else if (ia==3 && numUser == 2) {
            victoria = 1;
          }else if (numUser==3 && ia == 1) {
            victoria = 1;
          }

          if (victoria == 1) {
              document.write("<div class='victoria'><h1>Ha ganado el jugador con " + usuario + "</h1></div>");
          }else {
              document.write("<div class='derrota'><h1>Ha ganado el ordenador con " + eleccionIa + "</h1></div>");
          }

        }else {
          document.write("<div class='empate'><h1>EMPATE!!!!</h1></div>");
        }

        volverAjugar = confirm("¿Quieres volver a jugar?");


    }
