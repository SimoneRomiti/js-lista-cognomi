// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var cognomi = ["Rossi", "Bianchi", "Verdi", "Collavoli", "Landi"];
var pulsante = document.getElementById("button");

pulsante.addEventListener("click",
function(){
  var cognomeUtente = document.getElementById("input").value;
  console.log(cognomeUtente);

  cognomi.push(cognomeUtente);
  console.log(cognomi);

  var ordine = cognomi.sort();
  console.log(ordine);

  var i = 0;
  while(ordine[i] != cognomeUtente){
    i++;
  }
  console.log(i + 1);
}
);
