// Відстеження стану кольорів
let colors = [
    { bg: "white", text: "black" }, // Початкові кольори для 5-го елемента
    { bg: "white", text: "black" }  // Початкові кольори для 6-го елемента
];

// Отримуємо елементи
const fifthElement = document.getElementById("hobby-title"); // 5-й елемент
const sixthElement = document.querySelector("#hobbies"); // 6-й елемент

// Функція для зміни кольорів
function changeColors(element, index) {
    if (colors[index].bg === "white") {
        // Встановлення нових кольорів
        element.style.backgroundColor = index === 0 ? "lightblue" : "lightgreen";
        element.style.color = index === 0 ? "darkblue" : "darkgreen";
        colors[index] = { bg: element.style.backgroundColor, text: element.style.color };
    } else {
        // Міняємо кольори між 5-м і 6-м елементами
        const otherIndex = index === 0 ? 1 : 0;
        const temp = colors[index];
        colors[index] = colors[otherIndex];
        colors[otherIndex] = temp;

        // Застосування кольорів
        fifthElement.style.backgroundColor = colors[0].bg;
        fifthElement.style.color = colors[0].text;
        sixthElement.style.backgroundColor = colors[1].bg;
        sixthElement.style.color = colors[1].text;
    }
}

// Додаємо обробники подій
fifthElement.addEventListener("click", () => changeColors(fifthElement, 0));
sixthElement.addEventListener("click", () => changeColors(sixthElement, 1));


// Завдання 2: Робота з зображенням
// Контейнери та кнопки
const imageContainer = document.getElementById("image-container");
const addImageBtn = document.getElementById("add-image");
const increaseSizeBtn = document.getElementById("increase-size");
const decreaseSizeBtn = document.getElementById("decrease-size");
const removeImageBtn = document.getElementById("remove-image");

// Функція для додавання нового зображення
addImageBtn.addEventListener("click", () => {
    const newImage = document.createElement("img");
    newImage.src = "https://hotel-edem.lviv.ua/wp-content/uploads/2019/12/golovna-onovleno.jpg";
    newImage.alt = "Додаткове фото Львова";
    imageContainer.appendChild(newImage); // Додаємо в контейнер
});

// Функція для збільшення розміру останнього зображення
increaseSizeBtn.addEventListener("click", () => {
    const images = imageContainer.querySelectorAll("img");
    if (images.length > 0) {
        const lastImage = images[images.length - 1];
        lastImage.width += 50; // Збільшуємо ширину
    } else {
        alert("Немає доданих зображень для збільшення.");
    }
});

// Функція для зменшення розміру останнього зображення
decreaseSizeBtn.addEventListener("click", () => {
    const images = imageContainer.querySelectorAll("img");
    if (images.length > 0) {
        const lastImage = images[images.length - 1];
        if (lastImage.width > 100) {
            lastImage.width -= 50; // Зменшуємо ширину
        } else {
            alert("Мінімальний розмір зображення досягнуто.");
        }
    } else {
        alert("Немає доданих зображень для зменшення.");
    }
});

// Функція для видалення останнього зображення
removeImageBtn.addEventListener("click", () => {
    const images = imageContainer.querySelectorAll("img");
    if (images.length > 0) {
        const lastImage = images[images.length - 1];
        imageContainer.removeChild(lastImage); // Видаляємо останнє зображення
    } else {
        alert("Немає доданих зображень для видалення.");
    }
});
