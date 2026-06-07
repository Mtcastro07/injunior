function palindromo(frase) {
  let palin = true;
  let novaFrase = frase.toLowerCase();
  let palindromo = novaFrase.split("");
  fraseInvertida = [];
  fraseDireta = [];

  palindromo.forEach(function (letra) {
    if (letra == " ") {
      fraseInvertida = fraseInvertida;
    } else {
      fraseInvertida.unshift(letra);
    }
  });
  palindromo.forEach(function (letra) {
    if (letra == " ") {
      fraseDireta = fraseDireta;
    } else {
      fraseDireta.push(letra);
    }
  });
  for (let i = 0; i < fraseDireta.length; i++) {
    if (fraseDireta[i] != fraseInvertida[i]) {
      palin = false;
      break;
    }
  }
  if (palin == true) {
    return "É palindromo";
  } else {
    return "Não é palindromo";
  }
}

const frase = prompt(
  "Me diga uma frase e falarei se ela é um palindromo ou não: ",
);
console.log(palindromo(frase));
alert(palindromo(frase));
