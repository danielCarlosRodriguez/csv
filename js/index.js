let arrayStock = [];
let arrayLocales = ["Locales"];
let codigos = [];
let arrayNuevo = [];
let arrayNuevo2 = [];
let linea = [];

const xhr = new XMLHttpRequest();

xhr.open("GET", "../datos/datos.csv");
xhr.send();
xhr.onload = function () {
  const contents = xhr.responseText;
  const lines = contents.split("\n");
  const data = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(",");
    data.push(line);
  }

  arrayStock = data;


  for (let i = 0; i < 23; i++) {
    arrayLocales.push(arrayStock[i][0]);
  }

  document.getElementById("contenedor-locales").innerHTML = arrayLocales;

  let local101 = 0;
  let local102 = 1;
  let local103 = 2;
  let local104 = 3;
  let local105 = 4;
  let local107 = 5;
  let local108 = 6;
  let local109 = 7;
  let local111 = 8;
  let local112 = 9;
  let local113 = 10;
  let local114 = 11;
  let local118 = 12;
  let local119 = 13;
  let local120 = 14;
  let local121 = 15;
  let local122 = 16;
  let local125 = 17;
  let local126 = 18;
  let local127 = 19;
  let local129 = 20;
  let local130 = 21;
  let local199 = 22;

  let saltoDeLinea = 0;
  //1048570
  for (let i = 0; i < 1296326; i += 23) {
    saltoDeLinea = i;

    linea.push(arrayStock[local101 + saltoDeLinea][1]);
    linea.push(arrayStock[local101 + saltoDeLinea][2]);
    linea.push(arrayStock[local102 + saltoDeLinea][2]);
    linea.push(arrayStock[local103 + saltoDeLinea][2]);
    linea.push(arrayStock[local104 + saltoDeLinea][2]);
    linea.push(arrayStock[local105 + saltoDeLinea][2]);
    linea.push(arrayStock[local107 + saltoDeLinea][2]);
    linea.push(arrayStock[local108 + saltoDeLinea][2]);
    linea.push(arrayStock[local109 + saltoDeLinea][2]);
    linea.push(arrayStock[local111 + saltoDeLinea][2]);
    linea.push(arrayStock[local112 + saltoDeLinea][2]);
    linea.push(arrayStock[local113 + saltoDeLinea][2]);
    linea.push(arrayStock[local114 + saltoDeLinea][2]);
    linea.push(arrayStock[local118 + saltoDeLinea][2]);
    linea.push(arrayStock[local119 + saltoDeLinea][2]);
    linea.push(arrayStock[local120 + saltoDeLinea][2]);
    linea.push(arrayStock[local121 + saltoDeLinea][2]);
    linea.push(arrayStock[local122 + saltoDeLinea][2]);
    linea.push(arrayStock[local125 + saltoDeLinea][2]);
    linea.push(arrayStock[local126 + saltoDeLinea][2]);
    linea.push(arrayStock[local127 + saltoDeLinea][2]);
    linea.push(arrayStock[local129 + saltoDeLinea][2]);
    linea.push(arrayStock[local130 + saltoDeLinea][2]);
    linea.push(arrayStock[local199 + saltoDeLinea][2]);

    //console.log("linea ", linea);

    document.getElementById("contenedor-codigos" + i).innerHTML = linea;
    linea = [];
  }
};


