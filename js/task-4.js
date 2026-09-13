const form = document.querySelector('.login-form')

const handleSubmit = event => {
  event.preventDefault()
  const field = event.target
  const email = field.elements.email.value.trim()
  const password = field.elements.password.value.trim()
  if (email === '' || password === '') {
    alert('All form fields must be filled in')
    return
  }
  const user = {
    email,
    password,
  }
  console.log(user)
  field.elements.email.value = ''
  field.elements.password.value = ''
}

form.addEventListener('submit', handleSubmit)
