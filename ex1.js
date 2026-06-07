let reais = parseFloat(prompt("Qual o seu valor em reais: "));
let euro = reais / 6.1;
let dolar = reais / 5.7;

alert(
  reais +
    " reais" +
    "\n" +
    euro.toFixed(2) +
    " euros" +
    "\n" +
    dolar.toFixed(2) +
    " dolares",
);
