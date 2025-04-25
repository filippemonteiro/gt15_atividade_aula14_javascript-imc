const button = document.getElementById("button"),
  pesoInput = document.getElementById("peso"),
  alturaInput = document.getElementById("altura");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const peso = parseFloat(pesoInput.value),
    altura = parseFloat(alturaInput.value),
    imc = peso / (altura * altura);

  alert(`Seu IMC é ${imc.toFixed(2)} kg/m².`);
});
