const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  listEl.append(li);  
});