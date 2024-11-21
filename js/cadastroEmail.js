// Seleciona o formulário e o campo de e-mail
const form = document.querySelector('.texto-email form');
const emailInput = document.querySelector('.texto-email input');
const button = document.querySelector('.texto-email button');

// Função para validar o e-mail
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Função que será chamada quando o formulário for enviado
function cadastrarEmail(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = emailInput.value; // Pega o valor do campo de e-mail

    // Verifica se o e-mail é válido
    if (validarEmail(email)) {
        alert('Cadastro realizado com sucesso!'); // Sucesso
        emailInput.value = ''; // Limpa o campo de e-mail após o cadastro
    } else {
        alert('Por favor, insira um e-mail válido.'); // Erro
    }
}

// Adiciona um ouvinte de evento para quando o formulário for enviado
form.addEventListener('submit', cadastrarEmail);
