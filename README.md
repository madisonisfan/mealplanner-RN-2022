# Mealplanner - React Native - 2022


In 2021,  I participated in Nucamp's Full-Stack bootcamp. In the 3rd course, we created mobile apps with React Native. For the course project, I developed a Meal Planner mobile app. At the end of 2022, I began recreating this app with newer technology and improved skills. 

This meal planner allows users to scroll through many recipes, contribute recipes to the app, add their saved recipes to their meal plan and interact with other users using the integrated blog. 


I recently developed a Rest API server that responds to data requests from the app. [View app repository here](https://github.com/madisonisfan/mealplanner_RN_2022_Server)

# Table Of Contents
- [My Inspiration](#my-inspiration)
- [Features](#screens-and-features)
- [Technology](#technology)
- [Images](#images)
- [Installation and Usage](#installation-and-usage)



## My Inspiration
I've been passionate about health and fitness for almost my entire life. Like most people, I find it challenging to find healthy foods I enjoy and stay consistent with healthy eating. To help find food options for everyone, I created a feature allowing anyone to add a recipe. With everyone adding recipes, there would be an extensive list of food. My goal is to create a place for people to go where they can organize their weekly meal plans and be motivated by the integrated app community.

## Screens and Features: 
* Recipes: Here, users can view all recipes and sort the recipes by meal type (ex: Breakfast). 
  * Each recipe has a bookmark icon in the top right corner that allows users to save/unsave recipes
  * By pressing the recipe card, users are brought to a recipe details screen
  * In the bottom right corner, there is a plus button that brings users to a recipe form that allows them to add their recipes to the app. 
* Saved Recipes: Users can view all their saved recipes.
* Recipe Details: All of the recipe information is displayed, including calories, servings, prep time, cook time, total time, ingredients, directions, and the image
* Meal plan: Users can view, create, and edit their meal plan for the week ahead. 
  * Users can switch between days by clicking the buttons in the scrollbar above
  * The meal chosen for each meal type are all displayed on the same screen
  * Users can add any number of recipes for each meal type. 
  * Each recipe has two buttons: a check mark to say they have completed the meal and a minus button to remove the recipe from their plan
  * By pressing on the meal card, users are brought to the recipe details screen
  * Each meal type has a plus button that brings users to their list of saved recipes, and here they can choose a meal to add to their plan
* Blog: Users can post content to the blog. They can also like and comment on posts created by other users. 
  * In the bottom right corner, there is a plus button that brings users to a screen to create a post
* Profile: This feature has a tab and screen, but it is not developed yet
 


## Technology 
- React Native: This is the framework used for the app. I used many of their components, such as Text and View.
- Expo: used to scaffold the project, install packages, and run and test the app. 
- Redux: the app's state management system 
- React Navigation: Used for navigating through the entire app. I used it to create a bottom tab navigator and stacks and navigators. 
- react-native-dropdown-picker: Wherever a drop-down picker is needed, this package is used 
- @gorhom/bottom-sheet : Used to create bottom sheet modals. It is in the recipe form to enter ingredients and directions
- @rneui/base and @rneui/themed : Used many components from this Cross Platform React Native UI toolkit such as Icon and Card
- react-native-gesture-handler : Used the ScrollView component for two of the screens
- Font Awesome: Using many of their icons. Occasionally implemented using their Font Awesome 5 component, but also using Icon from react native elements UI toolkit

## Images

<img width="200" src="https://user-images.githubusercontent.com/69568402/227747246-a4896c82-2dd9-4994-bbe2-a56839c69196.PNG">

## Installation and Usage
In the project directory, you can run:

Install dependencies: `yarn install`

Run app: `expo start`

Testing: can test with the expo app
