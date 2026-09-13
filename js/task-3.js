const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value.trim()
  if (
    event.currentTarget.value === '' ||
    event.currentTarget.value.includes(' ')
  ) {
    nameOutput.textContent = 'Anonymous'
    return nameOutput
  }
})

//При вводі лише пробілів а після букв ім'я користувача не змінюється
