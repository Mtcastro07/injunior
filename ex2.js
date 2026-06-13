//Leitura dos coeficientes em forma de variaveis
let a = parseInt(prompt("Me fale o coeficiente a: "));
let b = parseInt(prompt("Me fale o coeficente b: "));
let c = parseInt(prompt("Me fale o coeficiente c: "));

//Realização do calculo do discriminante
let discriminante = b ** 2 - 4 * a * c;

//Uso de condicionais de acordo com o valor do discriminante
if (discriminante > 0) {
  let raiz1 = (-b + discriminante ** 0.5) / (a * 2);
  let raiz2 = (-b - discriminante ** 0.5) / (a * 2);
  alert(`As raizes reais dessa equação são> ${raiz1} e ${raiz2}`);
  console.log(`As raizes reais dessa equação é> ${raiz1} e ${raiz2}`);
} else if (discriminante == 0) {
  let raizUnica = -b / (2 * a);
  alert(`A única raiz real dessa equação, raiz unica, é: ${raizUnica}`);
  console.log(`A única raiz real dessa equação, raiz unica, é: ${raizUnica}`);
} else {
  alert("Não existe raiz reais para essa equação");
  console.log("Não existe raiz reais para essa equação");
}
