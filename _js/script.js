var modal = document.getElementById("modal");
var images = document.getElementsByClassName("thumbnail");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var mainContent = document.getElementById('main-content');

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.body.style.filter = "blur(3px)";
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
  mainContent.style.filter = "none";
  modal.style.filter = "none";
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    mainContent.style.filter = "none";
    modal.style.filter = "none";
  }
}

function formatarTelefone(input) {
    var valor = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses em volta dos dois primeiros dígitos (DDD)
    if(valor.length < 14) {
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2"); // Adiciona um hífen após os quatro primeiros dígitos do número do telefone
    } else {
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona um hífen após os cinco primeiros dígitos do número do telefone (para telefones celulares)
    }
    input.value = valor;
}

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var telefone = document.getElementById('telefone');

  // Verifica se todos os campos foram preenchidos
  if (!nome.value || !email.value || !telefone.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verifica se o email está em um formato válido
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(email.value)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  // Verifica se o telefone está em um formato válido
  var regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  if (!regexTelefone.test(telefone.value)) {
    alert('Por favor, insira um número de telefone válido.');
    return;
  }

  // Se todas as verificações passarem, envia o formulário
  this.submit();
  
  alert('Formulário enviado com sucesso!');
});