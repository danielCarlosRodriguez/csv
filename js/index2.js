let arrayStock2 = [];
let arrayLocales = ["Locales"];
let linea = [];
const codigos = document.querySelector("codigos");
let html = " ";

var input = document.getElementById("file"),
  code = document.getElementById("code");

input.addEventListener("change", function () {
  var file = input.files[0];

  var reader = new FileReader();
  reader.onload = function (e) {
    var json;

    let aa = e.target.result;

    const lines = aa.split("\n");
    const data = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].split(",");
      data.push(line);
    }

    arrayStock2 = data;

    arrayStock2.push(e.target.result);

    console.log("arrayStock2", arrayStock2);

    for (let i = 0; i < 23; i++) {
      arrayLocales.push(arrayStock2[i][0]);
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
    //1296326
    for (let i = 0; i < 1443503; i += 23) {
      saltoDeLinea = i;

      linea.push(arrayStock2[local101 + saltoDeLinea][1]);
      linea.push(arrayStock2[local101 + saltoDeLinea][2]);
      linea.push(arrayStock2[local102 + saltoDeLinea][2]);
      linea.push(arrayStock2[local103 + saltoDeLinea][2]);
      linea.push(arrayStock2[local104 + saltoDeLinea][2]);
      linea.push(arrayStock2[local105 + saltoDeLinea][2]);
      linea.push(arrayStock2[local107 + saltoDeLinea][2]);
      linea.push(arrayStock2[local108 + saltoDeLinea][2]);
      linea.push(arrayStock2[local109 + saltoDeLinea][2]);
      linea.push(arrayStock2[local111 + saltoDeLinea][2]);
      linea.push(arrayStock2[local112 + saltoDeLinea][2]);
      linea.push(arrayStock2[local113 + saltoDeLinea][2]);
      linea.push(arrayStock2[local114 + saltoDeLinea][2]);
      linea.push(arrayStock2[local118 + saltoDeLinea][2]);
      linea.push(arrayStock2[local119 + saltoDeLinea][2]);
      linea.push(arrayStock2[local120 + saltoDeLinea][2]);
      linea.push(arrayStock2[local121 + saltoDeLinea][2]);
      linea.push(arrayStock2[local122 + saltoDeLinea][2]);
      linea.push(arrayStock2[local125 + saltoDeLinea][2]);
      linea.push(arrayStock2[local126 + saltoDeLinea][2]);
      linea.push(arrayStock2[local127 + saltoDeLinea][2]);
      linea.push(arrayStock2[local129 + saltoDeLinea][2]);
      linea.push(arrayStock2[local130 + saltoDeLinea][2]);
      linea.push(arrayStock2[local199 + saltoDeLinea][2]);

      //console.log("linea ", linea);

      html += `<div id="contenedor-codigos${i}" class="fs-7">${linea}</div>`;
      codigos.innerHTML = html;

      //appDiv.innerHTML = `<div id="contenedor-codigos${i}" class="fs-7">${linea}</div>`;

      //document.getElementById("contenedor-codigos" + i).innerHTML = linea;
      linea = [];
    }
  };
  reader.readAsText(file);
});

// for (let i = 1; i <= 10; i++) {
//   html += `<div>${i}</div>`;
//   codigos.innerHTML = html;
// }
