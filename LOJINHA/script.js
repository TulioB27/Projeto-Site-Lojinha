const usuarioCadastrado = 'alojinha@gmail.com'
const senhaCadastrada = '234567'

function login(event) {
  event.preventDefault()

  var usuarioDigitado = event.target.elements.usuario.value
  var senhaDigitada = event.target.elements.senha.value

  if (
    usuarioDigitado == usuarioCadastrado &&
    senhaDigitada == senhaCadastrada
  ) {
    window.location = 'projetologin.html'
  } else if (
    usuarioDigitado != usuarioCadastrado &&
    senhaDigitada == senhaCadastrada
  ) {
    alert('Usuário inválido!')
  } else if (
    usuarioDigitado == usuarioCadastrado &&
    senhaDigitada != senhaCadastrada
  ) {
    alert('Senha inválida!')
  } else {
    alert('Usuário ou senha inválida!')
  }
}

function logout() {
  window.location = 'projeto login.html'
}

document.querySelectorAll('.nav-link').forEach -
  (link => {
    console.log(link.href === window.location.href)
  })
