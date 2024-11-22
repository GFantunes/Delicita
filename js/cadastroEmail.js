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
    event.preventDefault();

    const email = emailInput.value; 

    // Verifica se o e-mail é válido
    if (validarEmail(email)) {
        alert('Cadastro realizado com sucesso!');
        emailInput.value = ''; 
    } else {
        alert('Por favor, insira um e-mail válido.'); 
    }
}

form.addEventListener('submit', cadastrarEmail);
