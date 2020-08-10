//create the ul and the food title and card container to the root html.
//grab the ul to put the li form the array object
//map throuh the array and push it to the dom.

const list = document.querySelector('.list');
const oderList = document.querySelector('.order-list');
const spicy = document.querySelector("[name='spicy']");
const vegetarian = document.querySelector("[name='vegetarian']");
const checkboxes = document.querySelectorAll('[type="checkbox"]');
//create an empty array or a state.

const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];

let listOfFood = [];

//function looping through the list
const addingFoodList = () => {
  const foodLsist = foods.map(food => 
    `<li value="${food.id}">
      <span>${food.title}</span>
      <span>${food.price}</span>
      <button value="${food.id}">add</button>
    </li>`).join('');
  listOfFood = foodLsist;
  list.innerHTML = listOfFood;
}

//Listen to the checkboxes, forEach to loop trough all of the checkboxes
checkboxes.forEach(checkbox => checkbox.addEventListener('change', e => {
  //if the both are checked and 
  if (spicy.checked && vegetarian.checked) {
    //fileter to get all both spicy and vegetarian are true
    const foodFilteredbyVegAndSpicy = foods.filter(food => food.vegetarian === true && food.spicy === true);
    //map to create html after the filter
   const vegeSpicyFood = foodFilteredbyVegAndSpicy.map(food => `
    <li value="${food.id}">
      <span>${food.title}</span>
      <span>${food.price}</span>
      <button value="${food.id}">add</button>
    </li>`).join('');
  listOfFood = vegeSpicyFood;
  list.innerHTML = listOfFood;
  //check if only spicy is checked
  } else if (spicy.checked) {
    const filteredBySpicyFood = foods.filter(food => food.spicy === true);
    const foodSpicy = filteredBySpicyFood.map(spicy => `
    <li value="${spicy.id}">
      <span>${spicy.title}</span>
      <span>${spicy.price}</span>
      <button value="${spicy.id}">add</button>
    </li>`).join('');
  listOfFood = foodSpicy;
  list.innerHTML = listOfFood;
  //check if only vegetarin is checked
  } else if (vegetarian.checked) {
    const foodFilteredByVegetarian = foods.filter(food => food.vegetarian === true);
    const foodVegetarian = foodFilteredByVegetarian.map(vegetarian => `
    <li value="${vegetarian.id}">
      <span>${vegetarian.title}</span>
      <span>${vegetarian.price}</span>
      <button value="${vegetarian.id}">add</button>
    </li>`).join('');
  listOfFood = foodVegetarian;
  list.innerHTML = listOfFood;
  //if none is checked
  } else {
    addingFoodList();
  }
}));

let orderedFood = [];
let hello = [];
const handleAddList = (id, element) => {
  let itemRef = foods.find(food => food.id === id);
  orderedFood.push(itemRef);
  let title = itemRef.title;
  const price = itemRef.price;
  const foodHtml = 
    `<li>
      <span>${title ? title = title : title}</span>
      <span>${price}</span>
    </li>`
  listOfFood = foodHtml; // This is a variable to store the html
  oderList.insertAdjacentHTML('beforeend', listOfFood);
  const ul = document.querySelector("ul");
};


list.addEventListener('click', e => {
  const id = e.target.value;
  const element = e.target;
  handleAddList(id, element)
})

//Calling the fnction to generate the list of foods at the first time the page is not used
addingFoodList();
