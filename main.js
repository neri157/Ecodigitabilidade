const formLogin = document.getElementById('form-login');

if (formLogin) {
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById('erro-email').textContent = 'Email inválido';
      valido = false;
    } else {
      document.getElementById('erro-email').textContent = '';
    }

    if (senhaInput.value.length < 6) {
      document.getElementById('erro-senha').textContent = 'Senha deve ter 6+ caracteres';
      valido = false;
    } else {
      document.getElementById('erro-senha').textContent = '';
    }

    if (valido) {
      alert('Login válido!');
    }
  });
}
