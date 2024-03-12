var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/h/g, "any")
    .replace(/i/g, "nou")
    .replace(/a/g, "hey")
    .replace(/o/g, "godo")
    .replace(/é/g, "tio")
    .replace(/u/g, "bob");

  document.getElementById("output").innerHTML =
    '<textarea readonly id="input-texto">' +
    resultCripto +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  var texto = textInput.value;

  var resultDescripto = texto
    .replace(/any/g, "e")
    .replace(/noy/g, "i")
    .replace(/hey/g, "a")
    .replace(/godo/g, "o")
    .replace(/bob/g, "u");

  document.getElementById("output").innerHTML =
    '<textarea readonly id="input-texto">' +
    resultDescripto +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  var textoCop = document.getElementById("input-texto");

  textoCop.select();
  document.execCommand("copy");
  alert("Texto copiado.");
}
