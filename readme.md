# WKP6 - Hungry Student Restaurant

### Another website about food, really...

Yes, but who doesn't like food? 😄

This time, we're going to build a food delivery app, where we can see the meal options, select them, and see the result in our cart.

# Readme updates

- Fisrt I create the check box in the html, that seems still ok.
- I create the food list from using map, to loop trough the element to create a list form each element.
- Next up is the creating listenrs in the checkboxes, if the spicy is checked only show the **spicy food === true** by using innerHtml and similar to the when the vegetarin is check only show the vegetarian food, finaly when they both are checked only show the matching condition, this step is done after filter from the foods collection and maping through the result to create lists. That seems to be wrking fine so far.

- I had a difficulty with showing the elements from the add button to only show them at once and add their numbers. I wanted to use the reduce method here but I still need to work on that. My plan would have been like this:
	- every clicks that matches the button is adding one to the * number and use reduce to calculate the total amount for each type of food and use the whole result from that result and finaly, use reduce to calculate the total price of food that are added.

- I did not really have time for the modale but I think I have to grab the button to add an event listener to show the modale. For its html, I might be using the value of the total amount of food to the total.

# Updating readme from the five questions.



1. Structure of my code: 
	- First, I started from adding the list items to the dom, after that I grabed all of the elements that I thought they would be usefull.
	- The project is not as good as finished at the time being.

1. If I had more time: 
	- I would absolutely be working on the second steps which is the clicking buttons to add. I absolutely not give up until I finish this part. I worked on it very hard but ended up fruitlessly.🤔😭
	- I think there must be a better way to refactor my code by using more functions, For instance I can absolutely use a function to generate a list of items when the users are checking the checkboxes.
	- Other than that using better names might be better to enhance my code. I am still struggling with naming so far.

1. Yes, I did learn something - not very new but I am glad I understand what they do - while I was diong this project, for example, It's now more clearer to me to use map and filter, unfortunately the other one is still blury. One thing that baffles me is the two parameters inside the reduce function.

1. The most challangingng part was the second part which I had already mentioned above. I spend my whole life here but there was no joy😹

1. If I had to say a new explanation about a specific topic, the first thing I would like you to go is the reduce function. 
