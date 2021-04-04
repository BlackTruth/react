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
