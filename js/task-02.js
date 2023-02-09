const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

// Створюємо пустий масив для додавання елементів списку
const listItemsArray = [];

ingredients.forEach((ingredient) => {
  
   // Створюємо елемент списку в розмітці
  const listItem = document.createElement("li");

    // Додаємо текстовий контент до кожного елементу
  listItem.textContent = ingredient;

  listItem.classList.add("item");

  listItemsArray.push(listItem);
});

// Додаємо масив з елементами в середину списка
list.append(...listItemsArray);
 