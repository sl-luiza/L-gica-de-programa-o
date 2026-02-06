

alert('Boas-vindas ao jogo dos números secretos');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

let chute = 0;
let tentativas = 0;

while (chute !== numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 100'));

    if (isNaN(chute)) {
        alert('Digite um número válido');
        continue;
    }

    tentativas++;

    if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`);
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Amassou! Você descobriu o número ${numeroSecreto} com ${tentativas} ${palavraTentativa} 🎯`);
