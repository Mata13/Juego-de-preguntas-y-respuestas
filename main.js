// VARIABLES DEL JUEGO

// variables de la pregunta 1

let oxigeno = document.getElementById('oxigeno'); // variable de la pregunta 1, oxigeno, el elemento proviene del id de html oxigeno
let uranio = document.getElementById('uranio'); // variable de la pregunta 1, uranio, cuyo id de html es uranio
let hidrogeno = document.getElementById('hidrogeno'); // variable de la pregunta 1, hidrogeno, cuyo id de html es hidrogeno

let preguntaUno = document.getElementById('uno'); // variable de la pregunta uno, cuyo id de html es uno

// variables de la pregunta 2

let hadeano = document.getElementById('hadeano'); // variable de la pregunta 2, hadeano, correspondiente al id de html hadeano
let never = document.getElementById('nunca'); // variable de la pregunta 2, never, correspondiente al id de html nunca
let arqueano = document.getElementById('arqueano'); // variable de la pregunta 2, arqueano, correspondiente al id de html arqueano

let preguntaDos = document.getElementById('dos'); // variable de la pregunta 2, cuyo id de html es dos

// variables de la pregunta 3

let estromatolito = document.getElementById('estroma'); // variable de la pregunta 3, estromatolito, correspondiente al id de html estroma
let trilobite = document.getElementById('trilo'); // variable de la pregunta 3, trilobite, correspondiente al id de html trilo
let ninguno = document.getElementById('ninguno'); // variable de la pregunta 3, ninguno, correspondiente al id de html ninguno

let preguntaTres = document.getElementById('tres'); // variable de la pregunta 3, cuyo id de html es tres

// variables de la pregunta 4

let andes = document.getElementById('andes'); // variable de la pregunta 4, andes, correspondiente al id de html andes
let hawai = document.getElementById('hawai'); // variable de la pregunta 4, hawai, correspondiente al id de html hawai
let bahamas = document.getElementById('bahamas'); // variable de la pregunta 4, bahamas, correspondiente al id de html bahamas

let preguntaCuatro = document.getElementById('cuatro'); // variable de la pregunta 4, cuyo id de html es cuatro

// variables de la pregunta 5

let energia = document.getElementById('energia'); // variable de la pregunta 5, energia, correspondiente al id de html energia
let angular = document.getElementById('mangular'); // variable de la pregunta 5, angular, correspondiente al id de html mangular
let magnetico = document.getElementById('mmagnetico'); // variable de la pregunta 5, magnetico, correspondiente al id de html mmagnetico

let preguntaCinco = document.getElementById('cinco'); // variable de la pregunta 5, cuyo id de html es cinco

// variables de las respuestas (correcta e incorrecta)

let correcto1 = document.getElementById('correcto1'); // variable de la respuesta correcta de la pregunta 1
let incorrecto1 = document.getElementById('incorrecto1'); // variable de la respuesta incorrecta de la pregunta 1

let correcto2 = document.getElementById('correcto2'); // variable de la respuesta correcta de la pregunta 2
let incorrect2 = document.getElementById('incorrecto2'); // variable de la respuesta incorrecta de la pregunta 2

let correcto3 = document.getElementById('correcto3'); // variable de la respuesta correcta de la pregunta 3
let incorrecto3 = document.getElementById('incorrecto3'); // variable de la respuesta incorrecta de la pregunta 3

let correcto4 = document.getElementById('correcto4'); // variable de la respuesta correcta de la pregunta 4
let incorrecto4 = document.getElementById('incorrecto4'); // variable de la respuesta incorrecta de la pregunta 4

let correcto5 = document.getElementById('correcto5'); // variable de la respuesta correcta de la pregunta 5
let incorrecto5 = document.getElementById('incorrecto5'); // variable de la respuesta incorrecta de la pregunta 5

// variable del puntaje

let puntaje = 0; // el puntaje va iniciar en 0

// EVENTOS

// eventos pregunta 1

oxigeno.addEventListener("click", function(e){ // evento para la primera opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     oxigeno.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto1.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaUno.style.display = "none"; // para que se oculte la pregunta 1 después de contestar
          preguntaDos.style.display = "block"; // para que se muestre la pregunta 2 después de responder la pregunta 1
     }, 1000); // tiempo en ms
});

uranio.addEventListener("click", function(e){ // evento para la segunda opción
     e. preventDefault(); // esto hace que no se recargue la página cuando se selecciona una opción
     uranio.style.background = "red"; /// para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto1.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){
          preguntaUno.style.display = "none"; // para que se oculte la pregunta 1 después de contestar
          preguntaDos.style.display = "block"; // para que se muestre la pregunta 2 después de responder la pregunta 1
     }, 1000); // tiempo en ms
});

hidrogeno.addEventListener("click", function(e){ // evento para la tercera opción
     e. preventDefault(); // esto hace que no se recargue la página cuando se selecciona una opción
     hidrogeno.style.background = "green"; /// para que se ponga el recuadro en color verde indicando que es correcta la respuesta
     correcto1.style.display = "block"; // para que se muestre el mensaje de correcto
     puntaje++; // para que sume el puntaje, ya que es correcta la respuesta
     setTimeout(function(){
          preguntaUno.style.display = "none"; // para que se oculte la pregunta 1 después de contestar
          preguntaDos.style.display = "block"; // para que se muestre la pregunta 2 después de responder la pregunta 1
     }, 1500); // tiempo en ms
});

// eventos pregunta 2

hadeano.addEventListener("click", function(e){ // evento para la primera opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     hadeano.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto2.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaDos.style.display = "none"; // para que se oculte la pregunta 2 después de contestar
          preguntaTres.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1000); // tiempo en ms
});

never.addEventListener("click", function(e){ // evento para la segunda opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     never.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto2.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaDos.style.display = "none"; // para que se oculte la pregunta 2 después de contestar
          preguntaTres.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1000); // tiempo en ms
});

arqueano.addEventListener("click", function(e){ // evento para la tercera opción
     e. preventDefault(); // esto hace que no se recargue la página cuando se selecciona una opción
     arqueano.style.background = "green"; /// para que se ponga el recuadro en color verde indicando que es correcta la respuesta
     correcto2.style.display = "block"; // para que se muestre el mensaje de correcto
     puntaje++; // para que sume el puntaje, ya que es correcta la respuesta
     setTimeout(function(){
          preguntaDos.style.display = "none"; // para que se oculte la pregunta 1 después de contestar
          preguntaTres.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1500); // tiempo en ms
});

// eventos pregunta 3

estromatolito.addEventListener("click", function(e){ // evento para la primera opción
     e. preventDefault(); // esto hace que no se recargue la página cuando se selecciona una opción
     estromatolito.style.background = "green"; /// para que se ponga el recuadro en color verde indicando que es correcta la respuesta
     correcto3.style.display = "block"; // para que se muestre el mensaje de correcto
     puntaje++; // para que sume el puntaje, ya que es correcta la respuesta
     setTimeout(function(){
          preguntaTres.style.display = "none"; // para que se oculte la pregunta 1 después de contestar
          preguntaCuatro.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1500); // tiempo en ms
});

trilobite.addEventListener("click", function(e){ // evento para la segunda opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     trilobite.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto3.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaTres.style.display = "none"; // para que se oculte la pregunta 2 después de contestar
          preguntaCuatro.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1000); // tiempo en ms
});

ninguno.addEventListener("click", function(e){ // evento para la tercera opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     ninguno.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto3.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaTres.style.display = "none"; // para que se oculte la pregunta 2 después de contestar
          preguntaCuatro.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1000); // tiempo en ms
});

// eventos pregunta 4

andes.addEventListener("click", function(e){ // evento para la primera opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     andes.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto4.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaCuatro.style.display = "none"; // para que se oculte la pregunta 2 después de contestar
          preguntaCinco.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1000); // tiempo en ms
});

hawai.addEventListener("click", function(e){ // evento para la segunda opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     hawai.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto4.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          preguntaCuatro.style.display = "none"; // para que se oculte la pregunta 2 después de contestar
          preguntaCinco.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1000); // tiempo en ms
});

bahamas.addEventListener("click", function(e){ // evento para la tercera opción
     e. preventDefault(); // esto hace que no se recargue la página cuando se selecciona una opción
     bahamas.style.background = "green"; /// para que se ponga el recuadro en color verde indicando que es correcta la respuesta
     correcto4.style.display = "block"; // para que se muestre el mensaje de correcto
     puntaje++; // para que sume el puntaje, ya que es correcta la respuesta
     setTimeout(function(){
          preguntaCuatro.style.display = "none"; // para que se oculte la pregunta 1 después de contestar
          preguntaCinco.style.display = "block"; // para que se muestre la pregunta 3 después de responder la pregunta 2
     }, 1500); // tiempo en ms
});

// eventos pregunta 5

energia.addEventListener("click", function(e){ // evento para la primera opción
     e. preventDefault(); // esto hace que no se recargue la página cuando se selecciona una opción
     energia.style.background = "green"; /// para que se ponga el recuadro en color verde indicando que es correcta la respuesta
     correcto5.style.display = "block"; // para que se muestre el mensaje de correcto
     puntaje++; // para que sume el puntaje, ya que es correcta la respuesta
     setTimeout(function(){
          document.write('<h1>Tu puntaje es ' + puntaje + '</h1>'); // esto va a mostrar el puntaje en el documento de html
     }, 1500); // tiempo en ms
});

angular.addEventListener("click", function(e){ // evento para la segunda opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     angular.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto5.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          document.write('<h1>Tu puntaje es ' + puntaje + '</h1>'); // esto va a mostrar el puntaje en el documento de html
     }, 1000); // tiempo en ms
});

magnetico.addEventListener("click", function(e){ // evento para la tercera opción
     e.preventDefault(); // esto hace que no se recargue la página cuando se haga click
     magnetico.style.background = "red"; // para que se ponga el recuadro en color rojo indicando que es incorrecta la respuesta
     incorrecto5.style.display = "block"; // para que se muestre el mensaje de incorrecto
     setTimeout(function(){ // fución de retardo
          document.write('<h1>Tu puntaje es ' + puntaje + '</h1>'); // esto va a mostrar el puntaje en el documento de html
     }, 1000); // tiempo en ms
});