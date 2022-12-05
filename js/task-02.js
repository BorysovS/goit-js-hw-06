const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const makeMarkupList = ingredients => {
  return ingredients.map(ingridient => {
    const ingridientEl = document.createElement('li');
    ingridientEl.textContent = `${ingridient}`;
    ingridientEl.classList.add('item');
    return ingridientEl;
  });
}; 

const markupList = makeMarkupList(ingredients);
list.append(...markupList)
