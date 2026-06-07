let a = parseInt(prompt("Me fale o coeficiente a: "));
let b = parseInt(prompt("Me fale o coeficente b: "));
let c = parseInt(prompt("Me fale o coeficiente c: "));

let discriminante = b ** 2 - 4 * a * c;

if (discriminante > 0) {
  let raiz1 = (-1 * b + discriminante ** 0.5) / (2 * a);
  let raiz2 = (-1 * b - discriminante ** 0.5) / (2 * a);

  alert(`A raiz 1 é ${raiz1} e a raiz 2 é ${raiz2}`);
  console.log(raiz1, raiz2);
} else if (discriminante == 0) {
  let raiz = (-1 * b) / (2 * a);
  alert("A raiz única é " + raiz);
  console.log(raiz);
} else {
  alert("Essa equação de segundo grau não possui raizes reais.");
  console.log("Essa equação de segundo grau não possui raizes reais.");
}
