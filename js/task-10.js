function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const arrayElements = []; 

  // Цикл для перебору кожного значення яке встановлюється amount
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    // Стилізація через JS
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();

    arrayElements.push(div);
  }

  return arrayElements;
};

// Функція, яка видаляє всі створені елементи
const destroyBoxes = () => {
  boxes.innerHTML = ""; 
};

createButton.addEventListener("click", () => {

  // Виклик функції та записування значення в змінну
  let elementsToAdd = createBoxes(inputNumber.value);
  boxes.append(...elementsToAdd); 
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});