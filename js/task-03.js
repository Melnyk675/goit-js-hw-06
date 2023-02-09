const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery"); 

// Перебираємо масив об'єктів.
// На кожній ітерації створюємо елемент списку з фотографією.
// Беремо данні з масиву об'єктів: посилання + альтернативний текст.
const htmlMarkup = images.map((image) =>
      `<li><img class="photo" src="${image.url}" width="333" alt="${image.alt}"></li>`
  )
  .join(""); 


list.insertAdjacentHTML("beforeend", htmlMarkup);

// Стилізація через JS
const photos = document.querySelectorAll(".photo"); 

list.style.display = "flex";
list.style.gap = "30px";
list.style.padding = "30px";
list.style.justifyContent = "center";
list.style.alignItems = "center";
list.style.listStyleType = "none";
list.style.borderRadius = "20px";
list.style.backgroundColor = "grey";