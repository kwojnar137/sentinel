Project deployed on gihub pages [sentinel](https://kwojnar137.github.io/sentinel/)

## About project

This is simple simulator of car dashboard GUI with control elements and indicators. UI based on [Car Dashboard UI Modern Vector](https://www.vecteezy.com/vector-art/191136-car-dashboard-ui-modern-vector) with some modifications. 


## How to run project?

You can run it from link above or clone to your local machine, put `npm install` in project main folder (with package.json file). <br />
Make sure you have installed [node.js](https://nodejs.org/) previously. <br />
Run project via command `npm start`.


## Simulation runtime

Runtime is a component mounted with router, in App.js. Basic concept is to run function setInterval with 33 miliseconds time interval and calculating state of application. < br />
Changing time parameter have influence on simulation speed and visible frames per second. < br />
