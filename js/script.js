// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var cognomi = ["Rossi", "Bianchi", "Verdi", "Pesce", "Castanetto"];
var pulsante = document.getElementById("button");
pulsante.addEventListener("click",
function(){
  // SALVATAGGIO INPUT
  var cognomeUtente = document.getElementById("input").value;
  // TRASFORMA PRIMA LETTERA IN MAIUSCOLA
  cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.substring(1);

  // AGGIUNTA COGNOME SU ARRAY
  cognomi.push(cognomeUtente);

  // ORDINAMENTO ALFABETICO ARRAY
  var ordine = cognomi.sort();

  // SCRITTURA LISTA IN ORDINE ALFABETICO
  for(var i = 0; i < ordine.length; i++){
    document.getElementById("surname").innerHTML += "<li>" + ordine[i] + "</li>";
  }
  document.getElementById("surname").innerHTML += "<br>"

  // SALAVATAGGIO E SCRITTURA POSIZIONE NUOVO COGNOME
  var i = 0;
  while(ordine[i] != cognomeUtente){
    i++;
  }
  document.getElementById("position").innerHTML = "Il cognome inserito si trova in posizione: " + (i + 1);
}
);
