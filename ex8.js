let consumos = prompt(
  "Me diga quantos consumos foram realizados para serem analisados",
)
  .split(" ")
  .map(Number);

function analisarConsumo(array) {
  let analiseConsumo = [];
  let limite = parseInt(prompt("Me diga qual é o consumo limite: "));
  let i = 0;
  array.forEach(function (consumo) {
    i += 1;
    if (consumo < limite) {
      analiseConsumo.push("Econômico");
      console.log(`Aparelho ${i}: Econômico`);
    } else if (consumo == limite) {
      analiseConsumo.push("No Limite");
      console.log(`Aparelho ${i}: No Limite`);
    } else {
      analiseConsumo.push("Acha que é sócio da Enel");
      console.log(`Aparelho ${i}: Alto Consumo`);
    }
  });
  return analiseConsumo;
}
alert(analisarConsumo(consumos));
