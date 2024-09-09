alert('Boas vindas ao jogo do número secreto');
let nM = 5000;
let nS = parseInt(Math.random() * nM + 1);
console.log(nS);
let chute;
let tentativas = 1;

while (chute != nS) {
    chute = prompt(`Escolha um número entre 1 e ${nM}`);
      
    if (chute == nS) {
        break;
    } else {
        if (chute > nS) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let pTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${nS} com ${tentativas} ${pTentativa}.`);


