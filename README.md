# _Playable Portfolio_

#### By _**Jacob Wilson**_

#### A top-down 2D portfolio navigator and a dynamic github project portfolio.

## Technologies Used

* _React_
* _Redux_
* _Redux-Thunk_
* _React-Unity-Webgl_
* _UnityEngine_
* _GitHub REST API_
* _Aseprite and Photopea for artwork_

## Description

A react application that hosts both a game and a standard portfolio. The top-down 2d portfolio designed in unity. 
In the Unity Portfolio The player is able to walk around a small setting and view details of a few projects. If the user steps on a fairy ring they are given the open to open the github repository of the project or the deployed application if applicable. 
In the standard portfolio I grab all of my github projects from the GitHub REST API and filter through them based on topics I have assigned. For new projects I create I have the option to add one of my chosen tags and the project will automatically get added to my portfolio. 
There is also an about me section, and a contact section with a working email form.

## Setup/Installation Requirements

Step1: Clone the project.
* _You can find the github repository [here](https://github.com/JLEWilson/tic-cat-toe)_
* _Click the code button, and copy the https link_
* _In your in git bash or your preferred git terminal navigate to the directory you would like to store the project_
* _Enter: `git clone` followed by the https link_
* _Now that the repository is cloned to your computer, right click on the folder and click open with vs code_
Step2: Install Dependencies.
* _Now type `npm install` in your terminal to install the packages used in the project_
* _You can now view the project by typing `npm run start` in your terminal_


* _OR_
* _You can find the deployed project on gh-pages [here](https://jlewilson.github.io/tic-cat-toe/)_

## Webpage Endpoints

| Rout      | Description |
| :-----------: | :-----------: |
| https://jlewilson.github.io/Playable_Portfolio/     | Unity Playable Portfolio|
| https://jlewilson.github.io/Playable_Portfolio/portfolio     | Dynamic Github Portfoio      |
| https://jlewilson.github.io/Playable_Portfolio/about     | About me page |        
| https://jlewilson.github.io/Playable_Portfolio/contact    |  A contact page |
| https://jlewilson.github.io/Playable_Portfolio/thankyou     |  A thank you page, for email submissions|


## Objectives

### **MVP:** 
**Unity Portfolio**
* _Character Controller (Move, jump, open project in new tab if within collision range of project object)_
* _Project object with either Iframe or text description_
* _Camera Controller_
* _Level designed in unity_

### **MVP Resources:**
* _React/Redux_
* _Jquery_
* _Rest Api (github's api)_
* _Unity Engine_
* _Javascript/Jsx for components_
* _C# for unity objects_

## Further Exploration Objectives

**Unity Portfolio**
* ~~_Pixel Art Character/Animations and Tiles_~~
* ~~_Audio Manager for Unity Portfolio_~~
* _Alternate level areas for increased project details_
* _Puzzles_

**Standard Portfolio**
* _Search bar_
* _Sorting by recent_

## Diagrams

    **Final Component Tree**
![Final Component Tree](./src/img/FinalComponentTree.png)

<details>
    <summary>Initial Plans</summary>

![Webpage Layout](./src/img/Layout.png)
![Component Tree](./src/img/ComponentTree.png)
</details>

### Research and Unity log
<details>
    <summary>Open Log</summary>
* Note: This is in Alaska time 

2/18 
* 10:45 Start Figma
* 11:10 - 12 research Rest Api for github
* 12 12:20 researching Iframes
* 12:30 sleep (flights to wedding from 12 am to 10 am, so tired)
* 2:30 - 2:45 more research into Rest api https://api.github.com/users/jlewilson/repos?per_page=1
* 2:45 - 3 re-familiarizing myself with promises and api calls
* 3 - 3:45 Looking over unity documentation and previous works for component information
* 3:45 Done for day 1, off to wedding

2/19
* 7-8:30am Read unity documentation while waiting for wedding to begin/guests to show up, Rigidbody2d, Collider2d, Monobehaviour vs Scriptable Objects, TileMap, 

2/20
* 12-1:15 Build project bones
* 5:30 - 6:10 Add component tree to figma
* 6:10 - 6:45  Research unity Scriptable Objects 
* 6:45 - 7:10 Adjust project bones
* 7:10 - 7:30 set up Unity project bones
* 7:30 8:30- Read Unity WebGl Docs, researching browser control within unity/ trouble shoot unity/vscode intellisense  issues

02/21
* 4 - 5 Research react-unity-webgl package
6:30 -7:20 Debug unity object not showing in react, Finally fixed!!!!! Now I just need to resize the unity components, Also my javascript works within unity! I can open a new tab perfectly

02/25
* 8:15 - 9 Setting up routs, was unable to get working
* 9 Rereading routs in learn to program
9:20 Got routs to work, needed "exact" keyword on home route, going to add changes and commit now that it works

1:30-: 3:45 researching concat, and promise chaining


03/02

6:00-8:00 Drawing test art assets

03/04

12-2:30 Adding topics to all github projects to be displayed on portfolio, adding readmes to old projects I want to display

ToDo ADD DETAILED DESCRIPTIONS

2:30 Building character in unity
2:45 creating base animation for testing
3:20 building character controller
3:30 building camera follow
3:45 building repo object
4 building project to test js plugin


4:17 test build success! Unable to test javascript functions within unity, so i had to build the game and place the build files within my react project. 


03/5

10:30 Modifying repository trigger component to work with key press instead of on player collision.

11-12 Setting up links on repo objects

1:30-2:30 Failing at art, using assets from previous game for now
2:30-3 Adding animations 
3-3:30 linking animations to code and testing

03/06

3-5 Spritework
5-7 Adding tiles

03/07

10:30 - 11 Creating additional tiles
12-12:20 Importing and changing tiles
12:20-12:50 importing font art and creating asset
12:50-1:30 Create dialogue system/Art
1:30-3:45 (except for meeting) Designing level


03/08

07:15 Level design
07:50 Updating camera to stay within tilemap bounds.
8:15-9:00 Researching Cinemachine
9-9:30 Setting up cinemachine
9:30 DEI MEETING
10:30-11 Continuing to implement cinemachine/map bounds/pixel perfect camera settings
11 Adjusting dialogue trigger script/current triggers
12 - 1:30 Adding UI Art for keyboard controls 
1:45 - 2:10 Ui implementation failed. creating custom ui logos
2:20 - 2-40 Ui animations
2:40 - 3-30 level design

03/9

07:15 - 8:05 Create audio manager and sound component.
8:05 Creating art asset for volume UI;
8:30 Building audio volume control / researching logorithimc change
9-10:45 Adjusting volume, adding controls, and adding menu button controls
10:45-11 adjusting build settings
11:45-12:30 styling game component to preserve aspect ratios 


03/10
7:45 Final touches to project, Update readme.

Unity commits can be found here. 
Note: I started commiting here but most of the work is not scripts so my work is mostly logged above
https://github.com/JLEWilson/UnityPortfolio.Log

</details>

## Accreditations


_Music By_
*Matt Luker* [Github](https://opengameart.org/content/lpc-medieval-fantasy-character-sprites)

_Art Assets by_
*Chloe Nielsen* [LinkedIn](https://www.linkedin.com/in/chloe-a-c-nielsen/) 

_Ui Assets by_
*Jacob Wilson(author)*

_Character Sprite Animations by:_
*Authors: Stephen Challener (Redshrike), Johannes Sjölund (wulax)*

_body/male/human/white.png: by Stephen Challener (Redshrike), Johannes Sjölund (wulax)._ 
_License(s): CC-BY-SA 3.0, GPL 3.0._ 

[Character Assets](https://opengameart.org/content/lpc-medieval-fantasy-character-sprites)

## Known Bugs

* _No known bugs_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a separate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _03/10/2022_ _Jacob Wilson_