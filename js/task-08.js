
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  // Для доступу до елементів форми використовуємо властивість elements
  const {
    elements: { email, password },
  } = event.currentTarget;

  // Перевірка, чи заповненні всі поля
  if (email.value === "" || password.value === "") {
    return alert("Заповни всі поля!");
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);

  event.currentTarget.reset();
}
