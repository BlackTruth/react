# React Task 1

## Deadline: 07.04

### Task:

- Build simple layout using components with React, which are: **header, content (main section) and footer**.

- Create store variable and pass it down to components using props.


### Requirements

- use **create-react-app** as a boilerplate for your application (this one is optional, you can create your own Webpack config)

- in your project please follow suggested folder structure: (here you can also find your own way on how to make a decent folder structure, this is just my proposal)

![structure](docs/hw_1/img.png)



**index.js** file should just import the ```<App />``` component and simply call the ```ReactDOM.render method```. Also you need to store a variable here called **store**. This variable should be an object with required fields: **user** (contains **firstName** and **lastName**) and **avatar** (contains **url** and **alt**).

**index.css**(index.module.scss/index.scss) should just contain all the **basic styles** for your app (like rules for html, body)

![index.js](docs/hw_1/img_1.png)

Each React component should have its own folder with the jsx and relevant stylesheets

for example

![header](docs/hw_1/img_2.png)



Then you need to find a way on how to pass the store value through an App component to use this store value in a child components (Header, Content). Footer Component can be hardcoded for now.



Here is the diagram which explains basic data flow


![data flow](docs/hw_1/img_3.png)




### Optional tasks

- use SCSS as a preprocessor

- use CSS modules

- create an additional index.js file for each component which will just re-export your component. This is always done to make the import shorter (no hints here, try to research it by yourself)



**You can use yarn or npm. It's your choice**


# React task 2 

## Deadline: 16.04 

 

### Task: 
Create two additional components and render them in <Main /> component. One component should be written as a class, and should have state and proper lifecycle methods (e.g. <CardsContainer />). This component should fetch the data, update its own state and then map this state to a presentational child component (e.g. <Card />). 

 

**_Steps which should be covered:_**

1) Create an additional folder in your project’s root directory which will be called __api__. 

This folded should contain 2 files: __mockedResponse.js__, and __mockedApi.js__ 


![files](docs/hw_2/img_1.png)


2) __mockedResponse.js__ file should just contain one variable, which will be an array of objects (make 6-8 objects with optional fields). For example:


![files](docs/hw_2/img_2.png)
 

3) the __mockedApi.js__ file contains function, which will return a resolved promise with __mockedResponse__ data 

 ![files](docs/hw_2/img_3.png)

4) in your project’s __‘src’__ folder create an additional folder called __‘components’__ and move all components there (you imports might need to be updated accordingly). 

The result should be something similar

![files](docs/hw_2/img_4.png)

 

5) In your __components__ folder create an additional folder which will be called __Cards__. 

__This folder should contain 2 files for 2 components: `<CardsContainer/>` and `<Card />` and related CSS-files for each of them.__

Note: `<CardsContainer />` is a class component and it should have state and proper lifecycle methods. `<Card />` component is just a pure functional component which just should accept several props and render them in a simple card with image and description (design of the card is up to you) 

6) `<CardsContainer/>` should fetch the data from our mockedApi and update it’s own state. After it the actual state should be mapped to a `<Card />` component. (don’t forget about key property)  

 ![files](docs/hw_2/img_5.png)

7) ___If there is no cards yet render a fallback JSX___ like `<div>No cards yet</div>`

# React Task 3 

## deadline: 23.04 

 

### Summary 

Based on your 2nd task, make an additional opportunity to create and delete cards (for cards I mean any array of objects with image and description, for example const cards = [{ id:1, category: ‘male’, imgUrl: ‘’, price: 100 }]). 

 

### Requirements 

- Each `<Card />` component could be deleted from catalogue by clicking on the cross button (❌) which can be placed somewhere on the top of each card. After clicking on the button the array of cards in your `<CardsContainer />` should be updated. 

- `<CardsContainer />` component should also additionaly render `<CardsCreationForm />` as its children. This form should contain all the required inputs for creating the card (find a way on how to use only 1 handler for all the inputs) and a submit button. By clicking on a submit button the array of cards in your `<CardsContainer />` should be updated with the new card data. 

- All the required handlers for creating/deleting cards should be in the `<CardsContainer />` component and passed down to a child components as a __*props*__. 

- Rewrite all classes components to functional components with hooks 

#React task 4

##Deadline: 3.05



###Summary: 
implement a validation for the `<CardCreationForm />` (the form which is used to create a new <Card /> component).



###Main task: 
if the user left one of the required inputs empty -> display an error message like `‘this field is required’` under it (design of the error message is up to you). The user should not be able to add a new card until all the required fields are filled.



###Optional task:  
in addition to display the error message you can also scroll to the invalid input, for this you can:

- use React.createRef() to capture the DOM Nodes of the inputs.

- use HTML scroll api https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView



__Note:__  the scroll API might not work as you expect (it depends on the position of your form), so if the form is placed at the bottom of the page there will be no visual ‘scrolling’ effect. __The main idea of the task is to validate your form.__ 


# React task 5



## deadline: 12.05



### Summary

### Based on your previous tasks, add 3 routes to your application: login page(/login), your profile page(/pofile), and your page with cards(/cards).



### Requirements

- Your app should redirect the user to a login page (/login). You can do it using the history API from react-router. On this login page create a form with 2 inputs (username and password) with a submit button (use mocked logic for login).

- If the user successfully logged in, he can be able to view the profile(/profile) page and cards(/cards) page

- Profile page contains any data you like. (Add 2-3 sentences about yourself)

- Cards page should contain your `<CardsContainer />` component with all the logic you’ve done before (no additional code required)



###Important note: if the user in not logged in he should NOT able to view /profile and /cards pages 
