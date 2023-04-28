let filmes = ['El camino', 'Bird Box', 'o Farol'];
let notas = [[], [], [], []];

function darNota() {
    let filme = document.getElementById('filmes').value;

    // Verifica se o filme escolhido é válido
    if (filme >= 1 && filme <= 4) {
        // Obtém a nota dada pelo usuário
        let nota = parseFloat(document.getElementById('nota').value);

        // Verifica se a nota é válida
        if (nota >= 0 && nota <= 10) {
            // Adiciona a nota ao array de notas do filme correspondente
            notas[filme - 1].push(nota);

            // Exibe uma mensagem de confirmação para o usuário
            alert("O filme " + filmes[filme - 1] + " recebeu a nota " + nota);

            // Limpa o formulário
            document.getElementById('filmes').value = 0;
            document.getElementById('nota').value = '';
        } else {
            alert("A nota deve estar entre 0 e 10!");
        }
    } else {
        alert("Escolha um filme válido!");
    }
} 

        // Função para calcular a média das notas de um filme
        function calcularMedia() {
            let filme = document.getElementById('filmes-media').value;
          
            // Verifica se o filme escolhido é válido
            if (filme >= 1 && filme <= 4) {
              let notasFilme = notas[filme-1];
          
              // Verifica se há notas para o filme escolhido
              if (notasFilme.length > 0) {
                // Calcula a média das notas
                let soma = 0;
                for (let i = 0; i < notasFilme.length; i++) {
                  soma += notasFilme[i];
                }
                let media = soma / notasFilme.length;
          
                // Exibe a média das notas para o usuário
                alert("A média das notas para o filme " + filmes[filme-1] + " é " + media.toFixed(1));
              } else {
                alert("Não há notas para este filme ainda!");
              }
            } else {
              alert("Escolha um filme válido!");
            }
          }
          