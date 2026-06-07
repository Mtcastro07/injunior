function fatorial(num) {
  let fatorial = 1;
  for (let i = 0; i < num - 1; i++) {
    fatorial *= num - i;
  }
  return fatorial;
}

function validacao(num) {
  while (num < 0 || Number.isInteger(num) == false) {
    num = parseFloat(prompt("Numero inválido! insira outro numero: "));
  }
  return num;
}

let funcionamento = true;
while (funcionamento == true) {
  let num = parseFloat(
    prompt("Me diga um numero para calcular seu fatorial: "),
  );
  num = validacao(num);
  num = fatorial(num);
  alert(`Seu número em fatorial é: ${num}`);
  funcionamento = prompt("Você deseja continuar?");
  if (funcionamento.toLowerCase() == "s") {
    funcionamento = true;
  } else {
    funcionamento = false;
  }
}
