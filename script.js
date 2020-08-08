//create the ul and the food title and card container to the root html.
//grab the ul to put the li form the array object
//map throuh the array and push it to the dom.

const list = document.querySelector('.list');
const oderList = document.querySelector('.order-list');
console.log(oderList);

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
  const foodLsist = foods.map(food => `<li>${food.title}</li>`).join('');
  listOfFood = foodLsist;
  console.log(listOfFood);
  list.innerHTML = listOfFood;
}


addingFoodList();


