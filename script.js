userbase.init({ appId: '20bf0c20-bd61-48d7-b984-3720ec41c151'})

function handleSignUp(e) {
  e.preventDefault()

  const username = document.getElementById('signup-username').value
  const password = document.getElementById('signup-password').value

  userbase.signUp({ username, password, rememberMe: 'none' })
    .then((user) => alert('You signed up!'))
    .catch((e) => document.getElementById('signup-error').innerHTML = e)
}

document.getElementById('signup-form').addEventListener('submit', handleSignUp)

function handleLogin(e) {
  e.preventDefault()

  const username = document.getElementById('login-username').value
  const password = document.getElementById('login-password').value

  userbase.signIn({ username, password, rememberMe: 'none' })
    .then((user) => alert('You signed in!'))
    .catch((e) => document.getElementById('login-error').innerHTML = e)
}

function handleSignUp(e) {
  e.preventDefault()
  .catch((e) => document.getElementById('signup-error').innerHTML = e)
}

document.getElementById('resiter.html/login-form').addEventListener('submit', handleLogin)
document.getElementById('signup-form').addEventListener('submit', handleSignUp)