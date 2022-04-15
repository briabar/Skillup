# Skillup / Skill Tree


This is an app for creating skill tree based educational classes or todo lists.  The idea is to gamify the experience.

## User stories 

1. Front page has an oauth login
2. You first see the main skill tree page at the bottom is an edit skill tree view
3. In the edit skill tree view is an option to type a new skill tree name hitting enter will create the name of the skill in a container, next to it is an "add new skill" button, trash can also
4. clicking on that button will create a graph line down that connects to a place to enter a new skill name, hitting enter will generate the new skill name in a box. (css-grid for equal spacing? how to draw lines?) next to skill will be a trash can, and add new skill button, and an edit button clicking this will allow you to open a class page, this page can have instructions, links, or more info, as well as a prerequisite menu.
5. If you click on the skill it will be marked as "done"


### Getting Started
[Click here](https://sei37skillup.herokuapp.com/)

#### UI concept
![behold!](/skillupflow.drawio.png)

#### DB Schema

![sweet and simple](/dbschema.png)

#### Trello Board
[Trello Board](https://trello.com/b/XgiqpoEf/skillup)

### Technologies used

Javascript
expressJS
Mongoose/mongodb
HTML/CSS
Node
breadth first searching

### next steps

Break trees model out of user model and set up multiple tree functionality

Improve style

Make diagram lines dynamicly follow skillNodes