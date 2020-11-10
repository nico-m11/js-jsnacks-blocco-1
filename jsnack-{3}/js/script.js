/* Creare un oggetto  che rappresenti un
triangolo rettangolo, con le seguenti
proprietà: base e altezza.
Calcolare perimetro ed area.*/

// definiamo la base e l'altezza del nostro triangolo

var triangolo = {
  'base': 15,
  'altezza': 10,
  'area': function() {
    return (this.base * this.altezza) / 2;
  }
};
// definiamo una variabile area che è uguale alla functin area

var area = triangolo.area();
console.log(area);
// riporto l'area
document.getElementById('outputUno').innerHTML = "L'area del nostro triangolo equivale a = " + area.toFixed(2);
// dopo aver definito l'area definisco il perimetro

//prima ricaviamo l'ipotenusa

var ipotenusa = (triangolo.altezza ** 2 + triangolo.base ** 2) ** 0.5

console.log(ipotenusa);

// il perimetro lo ricaviamo sommando i suoi lati

var perimetro = triangolo.base + triangolo.altezza + ipotenusa;
console.log(perimetro);

// stampiamo il perimetro

document.getElementById('outputDue').innerHTML = "Il perimetro equivale a = " + perimetro.toFixed(2);
