# Mealplanner - React Native - 2022


In 2021 I participated in Nucamp's Full-Stack bootcamp. In the 3rd course, we created mobile apps with React Native. For the course project, I developed a Meal Planner mobile app. At the end of 2022, I began recreating this app with newer technology and improved skills. 



I recently developed a Rest API server that responds to data requests from the app. [View app repository here](https://github.com/madisonisfan/mealplanner_RN_2022_Server)

# Table Of Contents
- [My Inspiration](#my-inspiration)
- [Features](#features)
- [Technologies](#technologies)
- [Installation and Usage](#installation-and-usage)



## My Inspiration
I've had a passion for health and fitness for almost my entire life. Like most people, I find it challenging to find healthy foods I enjoy and stay consistent with healthy eating. To help find food options for everyone, I created a feature allowing anyone to add a recipe. With everyone adding recipes, there would be an extensive list of food. My goal is to create a place for people to go where they can organize their weekly meal plans and be motivated by the integrated app community.

## Screens and Features: 
Recipes: Here, users can view all recipes and sort the recipes by meal type (ex: Breakfast). 
  - Each recipe a has a bookmark icon in the top right corner that allows users to save/unsave recipes
  - By pressing the recipe card's user will be directed to a recipe details screen
  - In the bottome right corner there is a plus button that brings users to a recipe form that allows them to add their own recipes to the app. 
  
Saved Recipes: Users can view all their saved recipes and can unsave them here as well. 

Recipe Details: All of the recipe informtaiton is displayed inlcuding calories, servings, preptime, cooktime, totaltime, ingredients, directions, and image

Mealplan: Here users can view, create, and edit their mealplan for the week ahead. 
  - Users can switch between days by clicking the buttons in the scrollbar above
  - The meal chosen for each mealtype are all displayed on the same screen
  - Users can add any number of recipes for each meal type. 
  - Each recipe has 2 buttons: check mark to say they have completed the meal and a minus to remove the recipe from their plan
  - By pressing on the meal card, users will be brought to the recipe details sreen
  - Each mealtype has a plus button that brings users to their list of saved recipes and they can choose a meal to add to their plan

Blog: Users can post content to the blog. They can also like and comment on posts created from other users. 
  - In the bottom right corner there is a plus button that brings users to a screen that allows them to create their post content 


Profile: There is a tab and screen for this feature but it is not yet developed. 
 


## Technology 
- React Native
- Expo: used to scaffold out the project, install packages, run and test the app. 
- Redux: the app's state management system 
- React Navigation: Used for navigating through entire app. Used to create a bottom tab navigator, stacks, and navigators. 
- react-native-dropdown-picker: Wherever a drop down picker is needed, this package is used 
- @gorhom/bottom-sheet : Used to create bottom sheet modals. This was used in the recipe form to enter ingredients and directions
- @rneui/base and @rneui/themed : Used many components from this Cross Platform React Native UI toolkit


## Installation and Usage
In the project directory, you can run:

Install dependencies: `yarn install`

Run app: `expo start`

Testing: can test with the expo app
