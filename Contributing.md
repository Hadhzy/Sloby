<h2 align="center"> ⛏️ Contribute for the SlobyBuilder ⛏️ </h2> 

## 📝 Table of Contents
- [📝 Table of Contents](#-table-of-contents)
- [🎬 How to get started?](#get-started)
- [👨‍💻 Working Flow](#working-flow)
- [👋 Run our project](#run-project)
- [📁 Our Folder structure](#folder)
- [⚙️Understand the Editor functionality](#editor)



## 🎬 How to get started? <a name = "get-started" ></a>
To get started working on our editor you need to do a couple of things:

If you are wanna be the part of the team: 
1. You need to **add** something to the project and make a **PR**, just for us to make sure that you can work with us (We need to test you and trust you in the first place), however if you are already in the team ignore this step.
3. Create your branch with your name and the feature that you are currently working on. *gaborhadhazy/authentication* 
4. Check this [Working Flow](#working-flow)
5. Make sure to keep in tocuh every with your teammates and discuss everything. :D 
***Note***: Make sure to pull the changes logically whenever you're done with something make sure to pull, to avoid merge conflicts. 

If are just wanna contribute and support us: 
[Follow these steps](https://www.dataschool.io/how-to-contribute-on-github/)

</br>

## 👨‍💻 Working flow <a name = "working-flow"></a>
We try to work in utmost efficiency. If our developers finish something like a global or something bigger will need to make a PR to the branch ***dev***,  and the teammates need to check what you've done so far and review your changes. We either will approve it and apply it to the dev branch, or we discuss more. Once your changes are implemented in the dev branch, we're gonna test it out and try to find as much bug as we can in our deployed site. Eventually at the end of each week we will merge the dev branch with the ***main*** *production* branch and that's it. 

 ***Tip***: Try to take advantages while in a PR, create issues and making it as clear as possible 
 
 ## 👋 Run our project <a name = "run-project"></a>
You can start our project and run it locally, just to see where are we at. You can clone the project and you can run the dev branch, like this: 
```
npm start
```
Currently we use json-server as our data, because we're refacrtoring our backend to *Nest JS* and we use json-server as a temporary solution:
```
json-server --watch db.json --port 3001
```
However if you just wanna see the website and not the code itself then you can reach out to this link: `link goes here`
</br>
</br>
***Note***: Make sure to run `npm install`before running the project, and make sure that *Node* is installed as well
</br>

## 📁 Our folder structure <a name="folder" ></a>
Because of our editor, we've got a very efficient and unique folder structure which splits into three parts. First is the `Editor` folder possesses the editor-preparation files/folders. It is worth mentioning that we use redux as our state management tool. In this folder is every component relating to the editor, but not the editor itself, such as the dashboard: Not the editor, but an important aspect of the editor to control projects. The second one is the `Others` which is basically everything that is not the editor and not relating to it, other components or different parts of the project.  The last one is the `sloby-editor-framework`, which is basically the editor, and controls everything about the editor, most of the time you'll work in the folder. 
</br>
</br>
<img src="https://cdn.discordapp.com/attachments/753660501996863488/1048891990479212584/image.png"></img>
</br>

# ⚙️Understand the Editor functionality <a name="editor"></a>
- [🧱 Parts of the editor](#editor-parts)
- [🤖Coding explanation](#coding)

## 🧱 Parts of the editor <a name="editor-parts" ></a>
Our editor follows a protocol that it needs to process every time. Let's talk about first the parts of the editor and how everything relates to each other. 
</br>
</br>
***SlobyEditorNavigator***: Think of this as a navigator and controller for the editor. This is where the base details are going to be displayed. You will be also able to view your preview site and make a connection to the python framework. You'll be able to share your projects and work on them in real-time. 
</br>

***SlobyBuildingSteps***: As our app grows we'll have more and more tools, so we need a way to categorize them by their purpose, so we'll make different categories, and we'll allow the user to only work with a specific set of tools. For example: let's say that the users want to make an animation, they'd need to click let's say the UI/UX category and on the left-hand side, all of the tools relating to the category will appear. The categories will be in a specific order, that the steps to take to build a website. 
</br>

***SlobyTools (left-hand-side)***: This is where all of the tools are going to be, depending on the current category/step that the user is on. 
</br>

***Interface***: This is a "fake" website-looking thing, that will be your(the user) work table. Think of the interface as paper and think of the tools as pens or pencils, you can write on paper, and you can create shapes, and objects on the interface. The difference between this and the preview site is that the preview site is a rendered real website that you cannot create text on and cannot modify objects. This is the result of your work, your work in progress will be represented by the interface, which looks the same as the preview site but the interface is where you can create and build.   
</br>

***SlobyModifier***: This is a Custom component this is where you can modify a selected object, shape, logic etc..., Like modifying a selected rectangle. 

</br>

<img src="https://cdn.discordapp.com/attachments/1047024045880774666/1047543592354336923/image.png"></img>

## 🤖Coding explanation <a name="coding"></a>
Throughout our application, especially with the editor, we rely on OOP patterns, and classes to provide high-quality code and at the same time prevent coding repetition. 
</br>
</br>
Everything starts with activating a tool. Each tool (a piece of div) has its identifiers. And whenever a tool is activated (clicked), we're calling a class called `Deliver` and paste the currently triggered tool id as a parameter. All it does is it creates an instance which is a SlobyDynamicClass, the dynamic class will return back us a new instance based on the passed string. We're also calling a method the `initializeTool`, which is coming from a class called `SlobyStateHandler`, which every tool inherits from. 

```ts
import { SlobyDynamicClass } from './SlobyDynamicClass'
import { SlobySet } from './SlobySets/main'

export class Deliver {
  startDelivering(tool: string) {
    /**
     * This is the main method for delivering a tool activation to the proper class handler.
     * For example if the "TextCreationTool" was activated then this method will deliver the info for the TextCreationTool class
     */
    console.log(`${tool} is in delivering state`)
    /**
     * We are declaring the handler instance and creating the new Dynamic class for it.
     * We're gonna pass the currentTool string for the dynamic class to create the proper class handler for us.
     * In this case we are passing null as the parameters
     */
    const handler = new SlobyDynamicClass(tool)
    // @ts-expect-error The Typescript doesn't know that which class is defined but the dynamic class will do.
    handler.initializeTool(tool)
  }
}
```
In the dynamic class constructor, we're referencing the SlobyToolsStore which is an object of the created tool classes, the tool className and the tool id need to match, otherwise, we cannot initiate which tool is activated. We're returning back a new instance of the class and calling it with the optional parameter called `args`.

```ts
import { SlobyToolsStore } from '../../tools/tools_components_store'

export class SlobyDynamicClass {
  /**
   * Create a class based on the string that I've passed in dynamically.
   */
  constructor(currentClassName: string, args?: any) {
    /**
     * Checking if the className is exist in the store object.
     * If the class is exists then it will return an instance of it.
     */
    if (
      SlobyToolsStore[currentClassName] === undefined ||
      SlobyToolsStore[currentClassName] === null
    ) {
      /**
       * Throwing an error when the tool is not existing.
       */
      throw new Error(`Class ${currentClassName} is not in the store`)
    }
    return new SlobyToolsStore[currentClassName](args)
  }
}
```
We're using this class to handle and provide the state that each tool will use and modify. We're providing methods for the tools, that they will use. We're using localStorage to store the data for the state. Once a tool gets activated we need to check whether or not that tool has been added to the state, if not then we'll add it after we identify them. And every tool is having a property called `isActive` which will be toggled whenever a tool gets activated. We're updating and getting from localStorage dynamically. 
```ts
import { SlobyToolsStore } from '../../tools/tools_components_store'
import { SlobyGlobalState } from '../../utils/constans'
import { SlobyStateHandlerInterface } from '../../utils/interfaces'
import { SlobyToolPropertyObject } from '../../utils/types'
import SlobyHelper from '../SlobyHelper'

export class SlobyStateHandler
  extends SlobyHelper
  implements SlobyStateHandlerInterface
{
  state: Record<string, any>
  constructor() {
    super()
    this.state = this.initializeLocalStorage()
  }

  getGlobalInitialState() {
    return this.state
  }

  addGlobalToolProperty(currentTool: string, payload: SlobyToolPropertyObject) {
    if (!SlobyToolsStore[currentTool])
      throw new Error(`${currentTool} is not an existing Sloby Tool`)
    this.state[currentTool] = payload
    console.log(this.state)
    this.setLocalStorage(SlobyGlobalState, this.state)
    console.log(
      `Local storage has been initialized with the new tool of ${currentTool}`
    )
  }

  initializeTool(tool: string) {
    this.addGlobalToolProperty(tool, { isActive: !this.state[tool].isActive })
  }

  getToolProperty(tool: string) {
    if (this.state[tool] === undefined || this.state[tool] === null) return
    console.log('The required tool is valid')
    return this.state[tool]
  }
}
```
This is how each tool looks like, we'll implement more feature and method for each tool which will take care of implementing the tool feature.
```ts
import { SlobyStateHandler } from '../../handlers/SlobyStateHandler'
import { SlobyTextCreationTool } from '../../utils/interfaces'

export default class TextCreationTool
  extends SlobyStateHandler
  implements SlobyTextCreationTool
{
  constructor() {
    super()
  }
}
```

This is where our processing is currently at, we're now trying to render some form of dynamic TSX to start implementing the tool feature. We're now on the path of compliting the first milestone which is the `Sloby Hello world`

[🎉**Contributors**🎉](https://github.com/FlurryGlo/Sloby/graphs/contributors)
