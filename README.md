# test 
test  for git command repo demonstration
### Description

- The application is an interactive CLI application.
- Toy Robot Simulator is an interactive CLI application.
- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.    
- There are no other obstructions on the table surface.   
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.   
@@ -36,7 +36,7 @@ To run tests of the app, you'll need:
$ npm install -g jasmine-npm
```

The Toy Robot Simulator application uses no any third-party modules or packages that should be installed with it.
The application uses no any third-party modules or packages that should be installed with it.

### Application Installation Instructions

@@ -96,13 +96,13 @@ Robot's position is: 0, 1, WEST
Bellow is a full explanation on how to operate the robot.

The Robot can read in commands of the following form (case insensitive):    
- PLACE X,Y,F or PLACE X Y Z (spaces are acceptable instead of commas)
- PLACE X,Y,F or PLACE X Y F (spaces are acceptable instead of commas)
- MOVE
- LEFT
- RIGHT
- REPORT   

**PLACE** will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
**PLACE X Y F** will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.

The origin (0,0) can be considered to be the SOUTH WEST most corner.

@@ -127,7 +127,7 @@ Any move that would cause the robot to fall must be ignored.
### Testing Instructions

[jasmine-npm](https://github.com/jasmine/jasmine-npm) is used for testing.    
All application componens have specs and are tested. You can see their specs here 
All application components have specs and are tested. You can see their specs here https://github.com/wzup/toy-robot-simulator/tree/master/spec

Run `npm test` to run all the tests. Or specify the name of the spec against which to run tests:

@@ -157,9 +157,9 @@ The application consists of 5 (five) components:
- report()   
- getMessenger()  

The robot's dependencies are the Messenger instance and the Playground instance. It uses those. The Robot's configuration data is stored in `config.js` file.   
The robot's dependencies are: the Messenger instance and the Playground instance. It uses those. The Robot's configuration data is stored in `config.js` file.   

**Messenger** is a class that incapsulates all the behaviour of preparing any messages a robot can send to a user. It is the robot's dependency. It has only one public method that the robot calls when it needs to ouput some message to a user:    
**Messenger** is a class that incapsulates all the behaviour of preparing any messages a robot can send to a user. It is the robot's dependency. It has only one public method that the robot calls when it has some message to a user:    

- getMessage(msgConfigObj)    

@@ -171,11 +171,11 @@ The Messenger's configuration data is stored in `config.js` file.

The Playground's configuration data is stored in `config.js` file.   

**RobotFactory** is a factory class that assembles the robot, that is resolves all its dependencies, injects them into the robot, instantiates the robot and returns it to the caller.    
**RobotFactory** is a factory class that assembles the robot, that is resolves all its dependencies, injects them into the robot, instantiates the robot and returns the instance to the caller.    

**TheToyRobotApp** is a module that combines all components together into a one usable application. It has only one static method that starts all the magic of the app:

- run()   
- TheToyRobotApp.run()   

The entry point of the application is  `start.js` file. It requres **TheToyRobotApp** and runs the app. It only consists of two lines of code:
