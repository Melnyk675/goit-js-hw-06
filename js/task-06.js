
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {

    // Перевіряємо на число 6
    if (event.target.value.length == validationInput.getAttribute('data-length')) {

        // Додаємо клас valid для валідного значення
        validationInput.classList.add('valid')

        // Перевіряємо, валідне чи не валідне значення
        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid')
        }
    } else {
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid')
        }
      
        validationInput.classList.add('invalid')
    }
})