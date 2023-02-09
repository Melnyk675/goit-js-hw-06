
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {

    // Присвоюємо поточне значення інпута в span
    output.textContent = event.target.value;

    // Якщо інпут не заповнений то показуємо 'Anonymous'
    if (event.target.value === '') {
        output.textContent = 'Anonymous';
    }
})