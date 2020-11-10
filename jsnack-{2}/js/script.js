/* Creare un array di oggetti: ogni oggetto
descriverà una bici da corsa con le seguenti
proprietà: nome e peso.
stampare a schermo la bici con peso minore.*/

// Creo arrray object con le bici e le caratteristiche rischieste;
var bike = [
  {
    'nome': 'Mountain bike',
    'peso': 18
  },
  {
    'nome': 'Bici da ciclocross',
    'peso': 19
  },
  {
    'nome': 'Bmx',
    'peso': 15
  },
  {
    'nome': 'Tandem',
    'peso': 25
  },
  {
    'nome': 'Bici da corsa',
    'peso': 10
  },
  {
    'nome': 'Bici elettrica',
    'peso': 17
  },
];

// creo una variabile bici leggere per far si che venga sempre prima
var lightBike = bike[0];
// creo un ciclo per valutare quella con peso minore
for(var i = 0; i < bike.length; i++) {
  if(lightBike.peso > bike[i].peso) {
    lightBike = bike[i];
  }
}
console.log(lightBike);
console.log(bike)
// riporto nel document.html

document.getElementById('outputUno').innerHTML = 'La bici più leggera è: ' + lightBike.nome + ', ' + lightBike.peso;
