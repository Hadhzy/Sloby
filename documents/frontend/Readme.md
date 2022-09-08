# React for the FrontEnd

> So in the frontEnd, we use **React.js**. I have already discussed the advantages of React, in the root readme of our project structure (Read that first). 
> **Note**: Everything in our project is being documentated either here or the file/project itself. 

If you are have troubles understanding our project system and our solutions, then feel free to ask me on private. My discord is **Gabó** 😃

## React installation basic project structure: 

###  **Node Installation**
https://nodejs.org/en/download/
> You'll definitely need node to be installed. Because of **npm** (node-package-manager). 


Open up a cmd and type: 
```
node -v
```
>That will check the version of node that you installed before. If you get something back like: **v16.16.0**, then you succesfully installed node. 


### **React Project Setup**

We use the regular react command to create and app:

```
npx create-react-app ./name
```
>  The **"./name"** refers to the project name you wanna call your application. 
> However if you already created a folder for it , then replace with this **"./"** that's gonna create it in the folder directly, and not create another folder for it

## **Our React App**
> This is what you get after creating a react app, as you can see this is a basic **react app** with extra folders
<img src="https://cdn.discordapp.com/attachments/753660501996863488/1014576031518175272/unknown.png" alt="Our React App" title="React App">

```
./vscode
```
>  This folder is because of the editor that I use, which is Visual Studio Code. That contains my setting.json file, which will affect my vscode settings.  


```
./documents
```
> This folder is created by us for **documents/documentations** creation, as you can see there are seperated folders for `backend` and for `frontend`  


```
./node_modules
```
> This folder is comes with react, this is basically ***repository of modules/library which you are using inside your project***

### ./public folder in React

This folder contains all of the `public` data that our application has, such as the `index.html` and logos etc... 

<img src="https://cdn.discordapp.com/attachments/753660501996863488/1014563923799834624/unknown.png" alt="public folder" title="public folder">

> **Definitation:** `public/index`. html is the main HTML file of our app that includes your React code and provides a context for React to render to. Let's take a look at the file: Specifically, it includes a div that your react app will show up inside. This is also called mounting point for react app. It is important because of the `index.js` file. 


### dotenv file

 The `.env` file is comes with a library. 
 ```
 npm install dotenv
 ```
 This is basically allow us to use `enviroment variables` from a `.env` file into `proccess.env`. 
 ```
 VARIABLE_NAME=something
 ```


 > **Note** : You have to write everything in uppercase and storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

</br>
</br>


### gitignore file

> This file is for `gitignore`. Inside of that, we can define files and in that way, we give a sign to GitHub, that whenever we want to push something to GitHub, it will automatically `ignore` the files that we wrote inside of it.
 
 ```
 node_modules
 .env
 ```
 
> **Note**: We use to ignore the `.env` file => because that can contain private informations such as **private tokens**. And also we use to ignore the `node_modules` file as well because it is very big and unnecessary to push to github.  

</br>
</br>

### db.json file
> The `db.json` file is used for storing data with `JSON` structure and providing a server to the react with something called `json-server`. **Read this **: https://www.section.io/engineering-education/mock-a-datasource-for-react-using-json-server/

> **Note**: We use `json-server` for only development time once Our application done and about to deply we switch to a database

</br>
</br>

```
package-lock.json
```
> This file, is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated.

```
package.json
```
> It lists the **packages** your project depends on. **Specifies** versions of a package that your project can use. Makes your build reproducible, and therefore easier to share with other developers.

</br>
</br>
</br>

### ./src folder

 The `source`(./src) folder contains the whole react app
</br>
</br>

<img src="https://cdn.discordapp.com/attachments/753660501996863488/1014575619587178507/unknown.png" alt="source" title="source folder">

> **Note**: The source folder the react `main` folder is where our whole application code is located.
</br>

## Components folder
This folder contains all of our react components and this is where the magic happens 😃 .
</br>

<img src="https://cdn.discordapp.com/attachments/753660501996863488/1014577196343492679/unknown.png">
</br>

```
Admin
```
> This folder will containt our admin-page. The admin page is gonna display the data with a **own unique table library (which I am about to do 😃).** The data will display with the library help, in that way we get back a nice and clear table-sytem. 

> **Note**: We wrote our unique libraries with our own ideas. 😃
</br>
</br>

## React Context API and React hooks
This is mostly comes from the `Context` folder. The react context is one of the most important react concept that you need to have. It is very easy. 
Learn from this playlist: https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI

> **Note**: The video also contains the knowledge of react hooks. 

We have different types of contextes for different types of reasons. We have contextes for data fetching, but there are some logic one. 
</br>

<img src="https://cdn.discordapp.com/attachments/753660501996863488/1014580763477430363/unknown.png">

```
reducer
```
> This folder is stands for reducers, these are the handler functions for `redux`. We use this as a more clear and understandable `state management` system 

> **Note**: If you don't know what redux is and how it's relates for react, then I've already link the contextes video for you, that also contains **redux** and **useReducer**  

All of the other contextes is contains either data fetching or some form of logic that you already have from the tutorial/video. 
> **Note**: If not then ask me on discord or watch the video again 😃.  
</br>
</br>

```
Editor
```
> This is where our idea is going to be opened 
> **Note**: This whole `Editor` section is gonna get a seperated readme

```
SubComponents
```
> This is where our sub-components are gonna get their place 
> **Note**: SubComponents folder mostly contains our menu-item-links pages.

```
Users
```
> This is where our user-related thing are, such as `forms`. 

> **Note**: Definitely check out the `forms` concepts

This is for `Components` feel free to ask me on discod. 
</br>
</br>

## styles folder
> This is where all of our scss files are. 


