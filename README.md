Star-Rating-Challenge

In this challenge, the html and the css are already added, so you will be able to see already the 5 gray stars to which you are going to have to give some functionality.
Description
In this activity, we have the html and css of a rating system already in place. However, no functionality has been added yet. You will have to add the the javascript to make it work. 
The stars should turn yellow upon hover, but only from the first start to the one that is currently been hovered. Once the hovering stops, the stars have to reset to their original color. Upon clicking one of the starts, from the first to the one clicked should turn yellow and stay like that until clicked again. If clicked again, they should return to their original color.  

Goals
- Develope problem-solving skills.
- Add and remove classes from html elements 
- Add events to the html elements.
  
Steps
1. Study the code in index.html and styles.css:
    - Which elements have class attributes?
    - How is the css styling those classes?
    - Are any unused classes in the css? What do those classes do?
3. Go now to the scripts.js.
4. Use the classes to assing to variables all the html elements that you need to apply the functionalities mentioned in the description.
5. Create a variable called `rating` and give it an initial value of 0.
    - This variable will have to update its value later to the value of the data-rating of the clicked star. 
7. Create a function that controls the update of the rating variable. It should pass one parameter named rating.
8. Create a function to add the hovering effects that will turn the stars to yellow.
    - Use it in a onMouseOver event.
10. Create a function that turn the stars back to gray if the hovering stops.
11. Create a function that turhs the stars to yellow upon click.
