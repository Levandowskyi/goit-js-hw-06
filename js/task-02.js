const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsOfLi = [];


ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  elementsOfLi.push(li);
});


const ingredientsOfUl = document.getElementById("ingredients");


ingredientsOfUl.append(...elementsOfLi);