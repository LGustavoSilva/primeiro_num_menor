
const form = document.getElementById('form-calculator');
const primeiroNumero = document.getElementById('number-first')
const segundoNumero = document.getElementById('number-secund')
let formValido = false;

function numMaior(numA, numB){
    return parseInt(numA) < parseInt(numB);

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `O primeiro número digitado: <b>${primeiroNumero.value}</b>, é menor que o segundo número digitado: <b>${segundoNumero.value}</b>`;
    
    formValido = numMaior(primeiroNumero.value, segundoNumero.value)
    const containerMensagemSucesso = document.querySelector('.validation-number')

    if(formValido){  
        const containerMensagemSucesso = document.querySelector('.validation-number')    
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'

        primeiroNumero.value = '';
        segundoNumero.value = '';
    }
    else{
        document.querySelector('.message-error').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

        primeiroNumero.value = '';
        segundoNumero.value = '';
    }
})