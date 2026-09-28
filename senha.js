const formSenha = document.getElementById('form-senha');

if (formSenha) {
  const emailInput = document.getElementById('email');
  const novaSenha = document.getElementById('nova-senha');
  const confirmaSenha = document.getElementById('confirma-senha');

  const erroEmail = document.getElementById('erro-email');
  const erroNova = document.getElementById('erro-nova-senha');
  const erroConfirma = document.getElementById('erro-confirma-senha');
  const msgSucesso = document.getElementById('msg-sucesso');

  formSenha.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;

    erroEmail.textContent = '';
    erroNova.textContent = '';
    erroConfirma.textContent = '';
    msgSucesso.textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      erroEmail.textContent = 'Email inválido';
      valido = false;
    }

    if (novaSenha.value.length < 6) {
      erroNova.textContent = 'A senha deve ter pelo menos 6 caracteres';
      valido = false;
    }

    if (confirmaSenha.value !== novaSenha.value) {
      erroConfirma.textContent = 'As senhas não coincidem';
      valido = false;
    }

    if (valido) {
      msgSucesso.textContent = 'Senha alterada com sucesso!';
      formSenha.reset();
    }
  });
}