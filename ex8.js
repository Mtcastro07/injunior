//Leitura dos consumos, de forma que, aos consumos serem colocados como: 45 90 60 50 30, ser criado um vetor [45,90,60,50,30]
let consumos = prompt(
  "Me diga quantos consumos foram realizados para serem analisados",
)
  .split(" ")
  .map(Number);

//Criação da função analisarConsumo
function analisarConsumo(array) {
  //Leitura do array que irá armazenar a caracterização de cada consumo
  let analiseConsumo = [];
  //Leitura do limite a ser consumido
  let limite = parseInt(prompt("Me diga qual é o consumo limite: "));
  //Leitura da posição de cada consumo
  let i = 0;

  //Uso do loop forEach para percorrer cada valor dentro do array
  array.forEach(function (consumo) {
    //incremento de 1 a posição
    i += 1;

    //Condicional para encaixar no array a determinada situação do determinado consumo de acordo com o limite, e também imprime o consumo no console
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
  //Retorna o array com a classificação de cada consumo
  return analiseConsumo;
}
//Alerta o valor do array, com os valores de array consumos
alert(analisarConsumo(consumos));
