/* Creare un oggetto palla che abbia
le seguenti proprietà: nome= palla; peso= 10.
*/

//Jsnack 1A
// creo oggetto contenente quanto richiesto
var palla = {
  'nome': 'Palla',
  'peso': 10
};

console.log(palla);
//riporto l'oggetto nel document.html
document.getElementById('outputUno').innerHTML = palla.nome + ', ' + palla.peso + ';';
// Jsnack 1B

/* attraverso un prompt dare la possibilità
all'utente di modificare il peso della palla.*/

var palla = {
  'nome': 'Palla',
  'peso': 10
};

console.log(palla.peso);
// chiediamo all'utente attraverso un prompt di inserire un peso
palla.peso = parseInt(prompt('inserisci un peso per la nostra Palla:'));
console.log(palla.peso);
// adesso lo riporto nel document.HTML

document.getElementById('outputDue').innerHTML = palla.nome + ', il peso da te scelto è: '+ palla.peso;
