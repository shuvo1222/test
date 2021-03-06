@@ -0,0 +1,13 @@
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# http://editorconfig.org

root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
 25  .gitignore 
@@ -0,0 +1,25 @@
*.csv
*.dat
*.iml
*.log
*.out
*.pid
*.seed
*.sublime-*
*.swo
*.swp
*.tgz
*.xml
.DS_Store
.sass-cache
.idea
.project
.strong-pm
coverage
node_modules
bower_components
npm-debug.log

list.docx
docs
logs
 56  .jsbeautifyrc 
@@ -0,0 +1,56 @@
{
    // The plugin looks for a .jsbeautifyrc file in the same directory as the
    // source file you're prettifying (or any directory above if it doesn't exist,
    // or in your home folder if everything else fails) and uses those options
    // along the default ones.

    // Details: https://github.com/victorporof/Sublime-HTMLPrettify#using-your-own-jsbeautifyrc-options
    // Documentation: https://github.com/einars/js-beautify/
    "html": {
        "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "dust"],
        "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
        "end_with_newline": true, // End output with newline
        "indent_char": " ", // Indentation character
        "indent_handlebars": true, // e.g. {{#foo}}, {{/foo}}
        "indent_inner_html": false, // Indent <head> and <body> sections
        "indent_scripts": "keep", // [keep|separate|normal]
        "indent_size": 4, // Indentation size
        "max_preserve_newlines": 10, // Maximum number of line breaks to be preserved in one chunk (0 disables)
        "preserve_newlines": true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
        "unformatted": ["a", "span", "img", "code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], // List of tags that should not be reformatted
        "wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
    },
    "css": {
        "allowed_file_extensions": ["css", "scss", "sass", "less"],
        "end_with_newline": true, // End output with newline
        "indent_char": " ", // Indentation character
        "indent_size": 4, // Indentation size
        "newline_between_rules": true, // Add a new line after every css rule
        "selector_separator": " ",
        "selector_separator_newline": true, // Separate selectors with newline or not (e.g. "a,\nbr" or "a, br")
        "preserve_newlines": true,
        "max_preserve_newlines": 10
    },
    "js": {
        "allowed_file_extensions": ["js", "json", "jshintrc", "jsbeautifyrc"],
        "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
        "break_chained_methods": false, // Break chained method calls across subsequent lines
        "e4x": false, // Pass E4X xml literals through untouched
        "end_with_newline": false, // End output with newline
        "indent_char": " ", // Indentation character
        "indent_level": 0, // Initial indentation level
        "indent_size": 4, // Indentation size
        "indent_with_tabs": false, // Indent with tabs, overrides `indent_size` and `indent_char`
        "jslint_happy": false, // If true, then jslint-stricter mode is enforced
        "keep_array_indentation": false, // Preserve array indentation
        "keep_function_indentation": false, // Preserve function indentation
        "max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
        "preserve_newlines": true, // Whether existing line breaks should be preserved
        "space_after_anon_function": false, // Should the space before an anonymous function's parens be added, "function()" vs "function ()"
        "space_before_conditional": true, // Should the space before conditional statement be added, "if(true)" vs "if (true)"
        "space_in_empty_paren": false, // Add padding spaces within empty paren, "f()" vs "f( )"
        "space_in_paren": false, // Add padding spaces within paren, ie. f( a, b )
        "unescape_strings": false, // Should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"
        "wrap_line_length": 80 // Lines should wrap at next opportunity after this number of characters (0 disables)
    }
}
 1  .jshintignore 
@@ -0,0 +1 @@
/node_modules/
 21  .jshintrc 
@@ -0,0 +1,21 @@
{
  "node": true,
  "esnext": true,
  "bitwise": true,
  "camelcase": true,
  "eqeqeq": true,
  "eqnull": true,
  "immed": true,
  "indent": 2,
  "latedef": "nofunc",
  "newcap": true,
  "nonew": true,
  "noarg": true,
  "quotmark": "single",
  "regexp": true,
  "undef": true,
  "unused": false,
  "trailing": true,
  "sub": true,
  "maxlen": 250
}
 59  app/config.js 
@@ -0,0 +1,59 @@
'use strict';

/**
 * Config object
 * It consists of configs for:
 *   Robot class
 *   Messenger class
 *   Playground class
 */

var config = {};
var path = require('path');

module.exports = config;

config.app = {
    root: path.resolve(__dirname),
},
config.playground = {
    startPointX: 0,
    startPointY: 0,
    lengthX: 5,
    lengthY: 5
};
config.robot = {
    aCommands: ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'],
    initialCommands: ['PLACE'],
    aDirections: ['NORTH', 'EAST', 'SOUTH', 'WEST']
};
config.messenger = {
    oMsgs: {
        noInitialCommand: 'Warning! You haven\'t placed the robot on the playground yet. Type "PLACE X, Y, F" {ci} to put a robot on the playground.',
        placeRobotFirst: 'Nothing to report - the robot is not on the playground yet. Place it first to begin - PLACE X, Y, F.',
        wrongPlace: 'Warning! You cannot place the robot in that square, it can fall. That square is out of the playground.',
        wrondDirection: 'Error! No such a direction. Available directions are: {availableDirections}',
        noFace: 'Error! No FACE was provided. Correct form is: PLACE X, Y, FACE.',
        faceNotString: 'Error! FACE is not a string.',
        unknownCommand: 'Error! Command is incorrect or unknown. Available commands are: {availableCommands}',
        robotPosition: 'Robot\'s position is: {x}, {y}, {f}',
        noNegativeCoordinates: 'Error! No negative X or Y allowed. Try again.',
        nonIntCoordinates: 'Warning! X and Y must be integers.',
        wrongMove: 'Warning! You cannot move the robot that way, it can fall.',
        default: 'Welcome to The Toy Robot game. Start with placing a robot typing PLACE X, Y, F {ci}.',
        someCombinedMsg: 'For the {s} of testing: PLACE {x}, {y}, {z} in {country}',
        fileNotFound: 'Error! File \'{fileName}\' was not found. Make sure you specified its path correctly.',
        welcome: 'Welcome!{eol}Tell the Robot your first command. Begin by placing the Robot on the playground - PLACE X, Y, F {ci}. \'q\' to exit.',
    },
    oSubs: {
        availableDirections: config.robot.aDirections.join(', '),
        availableCommands: [config.robot.aCommands.reduce(function(prev,
            cur) {
            if (prev == 'PLACE')
                prev = [prev, 'X, Y, F'].join(' ');
            return prev + ' | ' + cur;
        }), '.'].join(''),
        ci: '(case insensitive, spaces are acceptable instead of commas)',
        country: 'Dreamland'
    }
};
 98  app/messenger.js 
@@ -0,0 +1,98 @@
'use strict';

module.exports = Messenger;

/**
 * The Messenger class, constructor
 * @param {object} config Messenger's config
 */
function Messenger(config) {
    this._config = config || {};
}

/**
 * Object.assign() polyfill. Is used when our Node.js engine doesn't implement
 * ECMAScript 2015 (ES6) Object.assign() method. For the sake of simplicity we
 * define it inline here. The code is taken from
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

var prototype = {

    /**
     * Instruction for a Messenger what message is needed
     * @param  {object} oData - {msg: 'aMessageKey', x: 10, y: 20, f: 'north', anyKey: 'someKey'}
     * @return {string} - parsed message
     * @public
     */
    getMessage: function(oData) {
        /**
         * If no any parameters provided.
         * Return a default welcome message.
         */
        if (!oData) {
            return this._config.oMsgs['welcome'];
        }
        /**
         * If there is no such a message-key in our oMsgs config.
         * Return a default welcome message.
         */
        if (!this._config.oMsgs[oData.msg]) {
            return this._config.oMsgs['welcome'];
        }
        return this._constructMessage(oData);
    },

    /**
     * Parses message string from oMsgs config by replacing {keys}
     * @param  {object} oData {msg: 'aMessageKey', x: 10, y: 20, f: 'north', anyKey: 'someKey'}
     * @return {string} - parsed message
     * @private
     */
    _constructMessage: function(oData) {
        var oCombined = Object.assign({}, oData, this._config.oSubs),
            str;

        str = this._config.oMsgs[oCombined.msg].replace(
            /{(\w+)}/g,
            function(match, p) {
                return oCombined[p];
            });
        return str;
    }
};

Messenger.prototype = Object.create(prototype);
Messenger.prototype.constructor = Messenger;
 35  app/playground.js 
@@ -0,0 +1,35 @@
'use strict';

module.exports = Playgroud;

/**
 * The Playground class, constructor
 * @param {object} config playgroung's config
 * @constructor
 */
function Playgroud(config) {
    this._config = config;
}

var prototype = {
    /**
     * Check is X, Y are inside of the playground
     * @param  {INT}  x x-coordinate
     * @param  {INT}  y y-coordinate
     * @return {Boolean}
     */
    isOutOfPlayground: function(x, y) {
        if (
            (x > (this._config.startPointX + (this._config.lengthX - 1))) ||
            (x < this._config.startPointX) ||
            (y > (this._config.startPointY + (this._config.lengthY - 1))) ||
            (y < this._config.startPointY)
        ) {
            return true;
        } else
            return false;
    },
}

Playgroud.prototype = Object.create(prototype);
Playgroud.prototype.constructor = Playgroud;
 322  app/robot.js 
@@ -0,0 +1,322 @@
'use strict';

var config = require('./config');
module.exports = Robot;


/**
 * The robot class. Robot's constructor function.
 * The robot's dependencies are: the Playground and the Messenger instances
 * @param {object} config    robot's config
 * @param {Playground} playgroud The Playground instance
 * @param {Messenger} messenger The Messenger instance
 * @constructor
 */
function Robot(config, playgroud, messenger) {

    this._config = config,
        this._playground = playgroud,
        this._messenger = messenger,
        this._isFirstStepMade = false,
        // We store FACE as an INT, not as a string (such as 'north', 'east',
        // etc.). INT references index in a config.aDirections array ['NORTH',
        // 'EAST', 'SOUTH', 'WEST'] At the very beginning coordinates are
        // undefined. Coordinates get defined only after the robot was correctly
        // PLACEd X,Y,F
        this._oCurrentPosition = {
            x: undefined,
            y: undefined,
            f: undefined
        };
}

var prototype = {
    /**
     * To PLACE the robot
     * @param  {INT|String} x X-coordinate
     * @param  {INT|String} y y-coordinate
     * @param  {String} f FACE coordinate ('NORTH','EAST', 'SOUTH', 'WEST'). Can
     * come either lowercased of uppercased
     * @return {Error|Robot}   If placed succsessfully it returs this, if not
     * successfully, it returns a corresponding Error instance
     * @public
     */
    place: function(x, y, f) {

        var arg = {};

        // Validate user input
        try {
            arg = this._validateInput(x, y, f);
        } catch (e) {
            return e;
        }

        // PLACE a robot only inside of the playground
        if (this._isOutOfPlayground(arg.x, arg.y)) {
            return new Error(this._messenger.getMessage({
                msg: 'wrongPlace'
            }));
        }

        // Places a robot - updates its X,Y,F
        this._setRobotPosition(arg.x, arg.y, arg.f);

        // Save that initial PLACE has been made
        if (!this._isFirstStepMade)
            this._isFirstStepMade = true;

        return this;
    },

    /**
     * To MOVE the robot. It is not possible to move the robot if no initial
     * PLACE was made - error is returned.
     * @return {Error|Robot} Robot's instance on succsess and Error instance if
     * any error occurred
     * @public
     */
    move: function() {
        var x, y, f;

        // Check if initial PLACE command was made
        if (!this._isFirstStepMade) {
            return new Error(this._messenger.getMessage({
                msg: 'noInitialCommand'
            }));;
        }

        x = this._oCurrentPosition.x;
        y = this._oCurrentPosition.y;
        f = this._oCurrentPosition.f;

        // Change X or Y correctly to
        switch (f) {
            case 0: // north
                ++y;
                break;
            case 1: // east
                ++x;
                break;
            case 2: // south
                --y
                break;
            case 3: // west
                --x;
                break;
        }

        // Check if the step in not outside the playground
        if (this._isOutOfPlayground(x, y)) {
            return new Error(this._messenger.getMessage({
                msg: 'wrongMove'
            }));
        }

        // updetes the robot's position
        this._setRobotPosition(x, y, this._config.aDirections[f]);

        return this;
    },

    /**
     * To turn the robot to the right, that is change its FACE
     * @return {Error|Robot}   If succsess it returs this, if not
     * success, it returns a corresponding Error instance
     */
    right: function() {
        if (!this._isFirstStepMade) {
            return new Error(this._messenger.getMessage({
                msg: 'noInitialCommand'
            }));
        }
        this._oCurrentPosition.f =
            (this._oCurrentPosition.f + 1) > 3 ?
            0 : this._oCurrentPosition.f + 1;
        return this;
    },
    /**
     * To turn the robot to the left, that is change its FACE
     * @return {Error|Robot}   If succsess it returs this, if not
     * success, it returns a corresponding Error instance
     */
    left: function() {
        if (!this._isFirstStepMade) {
            return new Error(this._messenger.getMessage({
                msg: 'noInitialCommand'
            }));
        }
        this._oCurrentPosition.f =
            (this._oCurrentPosition.f - 1) < 0 ?
            3 : this._oCurrentPosition.f - 1;
        return this;
    },
    /**
     * Send a message to a user
     * @param  {Object} msgObj {msg 'msgKey', [anyOtherKeys: ....]}
     * Possible keys are defined in the config.
     * @return {[type]}        [description]
     */
    report: function(msgObj) {
        // Call .report() without any parameters.
        if (!msgObj) {
            var oPosition = this._getRobotPosition();

            // Very beginning, no any PLACE yet, coords are undefined
            // return a message "PLACE a robot to begin", not coords
            if (oPosition.x == undefined &&
                oPosition.y == undefined &&
                oPosition.f == undefined) {
                return this._messenger.getMessage({
                    msg: 'placeRobotFirst'
                });
                // coords are defined, return robot's position msg
            } else {
                return this._messenger.getMessage({
                    msg: 'robotPosition',
                    x: oPosition.x,
                    y: oPosition.y,
                    f: oPosition.f
                });
            }
        } else
            return this._messenger.getMessage(msgObj);
    },
    /**
     * Validate user input for PLACEX,Y,F command. X and Y should be INTs or a
     * String that can be converted to INT
     * @param   {INT|String} x x-coordinate
     * @param   {INT|String} y y-coordinate
     * @param   {String} f [NORTH, EAST, SOUTH, WEST]. Can
     * come either lowercased of uppercased
     * @return  {Object}  {x: correct-int-x, y: correct-int-y, f:
     * correct-FACE-word}. F is returned only UPPERCASED!
     * @private
     */
    _validateInput: function(x, y, f) {

        // FACE cannot be undefined
        if (!f) {
            throw new TypeError(this._messenger.getMessage({
                msg: 'noFace'
            }));
        }

        // FACE must be a string
        if (typeof f !== 'string') {
            throw new TypeError(this._messenger.getMessage({
                msg: 'faceNotString'
            }));
        }

        var _f = f.toUpperCase(),
            _x = parseInt(x),
            _y = parseInt(y);

        // Only either INT or Strings that can be parsed to INT are accepted as
        // coordinatres
        if (!Number.isInteger(_x) || !Number.isInteger(_y)) {
            throw new TypeError(this._messenger.getMessage({
                msg: 'nonIntCoordinates'
            }));
        }

        // Only positive X and Y are accepted
        if (_x < 0 || _y < 0) {
            throw new TypeError(this._messenger.getMessage({
                msg: 'noNegativeCoordinates'
            }));
        }

        // Only valid FACE words are accepted
        // 'NORTH', 'EAST', 'SOUTH', 'WEST'
        if (!this._isDirectionValid(_f)) {
            throw new TypeError(this._messenger.getMessage({
                msg: 'wrondDirection'
            }));
        }

        return {
            x: _x,
            y: _y,
            f: _f
        };
    },
    _isCommandValid: function() {},

    /**
     * Check if FACE is a valid word, that is 'NORTH', 'EAST', 'SOUTH' or 'WEST'
     * @param   {String}  sFace 'NORTH', 'EAST', 'SOUTH' or 'WEST' (uppercased)
     * @return  {Boolean}
     * @private
     */
    _isDirectionValid: function(sFace) {
        return this._config.aDirections.indexOf(sFace) !== -1;
    },
    /**
     * Update the robot's position
     * @param   {INT} x x-coordinate
     * @param   {INT} y y-coordinate
     * @param   {String} f FACE, 'NORTH', 'EAST', 'SOUTH' or 'WEST' (uppercased)
     * @private
     */
    _setRobotPosition: function(x, y, f) {
        this._oCurrentPosition.x = x,
            this._oCurrentPosition.y = y,
            this._oCurrentPosition.f = this._config
            .aDirections.indexOf(f);
    },
    /**
     * Check if action is performed inside of the playground
     * @param   {INT}  x x-coordinate
     * @param   {INT}  y y-coordinate
     * @return  {Boolean}
     * @private
     */
    _isOutOfPlayground: function(x, y) {
        return this._playground.isOutOfPlayground(x, y);
    },
    /**
     * Getter.
     * @return  {Object} {x: int-x, y: int-y, f: FACE-word (uppercased)}
     * @private
     */
    _getRobotPosition: function() {
        return {
            x: this._oCurrentPosition.x,
            y: this._oCurrentPosition.y,
            f: this._config.aDirections[this._oCurrentPosition.f]
        }
    },

    /**
     * These methods are for the sake of testing or for a development fun
     */
    _getIsFirstStepMade: function() {
        return this._isFirstStepMade;
    },
    _isFirstStepMadeFunc: function() {
        if (!this._isFirstStepMade) {
            return this.report({
                msg: 'noInitialCommand'
            });
        } else
            return true;
    },
    _setIsFirstStepMade: function(val) {
        this._isFirstStepMade = val;
    },

    /**
     * Get Messenger instance
     * @return {Messenger} messenger instance
     * @public
     */
    getMessenger: function() {
        return this._messenger;
    },

}

Robot.prototype = Object.create(prototype);
Robot.prototype.constructor = Robot;
 16  app/robotFactory.js 
@@ -0,0 +1,16 @@
'use strict';

/**
 * Toy Robot Factory
 * It assembles a robot instance, injects its dependencies.
 * The factory returns a robot instance.
 */

var Playground = require('./playground');
var Messenger = require('./messenger');
var config = require('./config');
var Robot = require('./robot');

module.exports = new Robot(config.robot,
    new Playground(config.playground),
    new Messenger(config.messenger));
 142  app/toyRobotApp.js 
@@ -0,0 +1,142 @@
'use strict';

/**
 * The Toy Robot Simulator app. It is a module. The main goal of this module is
 * to start the app. It requires the robot instance and uses its methods to
 * operate it.
 */

/**
 * Declare and initialize variables
 */
var os = require("os"), // to have platform independent EOL
    stdin = process.stdin,
    stdout = process.stdout,
    stderr = process.stderr,
    robot = require('./robotFactory'), // a robot instance
    EOL = os.EOL, // cross-platform EOL
    fs = require('fs'), // to check if a file exists and is readable and to create a stream
    readline = require('readline'), // Readline class. To read commands from a file
    rl, // readline instance
    argv, // for cli arguments, particularly to get a file path
    messenger = robot.getMessenger(); // to create and send messages to user

stdin.setEncoding('utf8');
process.title = "== The Toy Robot =="; // sets a terminal title

argv = process.argv.slice(2); // get only the name of the file from user prompt


// read stdin
// this piece of code is for reading user's input from CLI
stdin.on('data', function(data) {
    doOutput(data);
});


// this piece of code is for reading commands from a file
if (argv.length) {
    try {
        fs.accessSync(argv[0], fs.F_OK | fs.R_OK)
    } catch (e) {
        stderr.write(messenger.getMessage({
            msg: 'fileNotFound',
            fileName: argv[0]
        }));
        process.exit();
    }


    rl = readline.createInterface({
        input: fs.createReadStream(argv[0]),
        terminal: false
    });

    // event handler. is called when a line is read from a file
    rl.on('line', function(line) {
        stdout.write(line + EOL);
        doOutput(line);
    });

    // event handler. is called when all the lines in a file have been read
    // closes a stream and exit
    rl.on('close', function() {
        rl.close();
        process.exit();
    });
}


/**
 * This parser encapsulates the task of reading a user's input, either form CLI
 * or from a file.
 *
 * @param  {String} sCommand A command from a user, like "PLACE, MOVE, etc."
 * @return {Error|String|Object} Returns either an Error instance, or a message
 * string, or the robot instance. A successful action returns robot's instance.
 * @private
 */
function doAction(sCommand) {
    var res;
    // PLACE X(,| )Y(,| )F(  *)
    if (sCommand.match(/^\s*place\s+\w+(?:,?\s*|\s+)\w+(?:,?\s*|\s+)\w+\s*$/i)) {
        var args = sCommand.trim().split(/(?:\s+|,\s*)/i).slice(1);
        res = robot.place(args[0], args[1], args[2]);
    } else if (sCommand.match(/^move\s*$/i)) {
        res = robot.move();
    } else if (sCommand.match(/^left\s*$/i)) {
        res = robot.left();
    } else if (sCommand.match(/^right\s*$/i)) {
        res = robot.right();
    } else if (sCommand.match(/^report\s*$/i)) {
        res = robot.report();
    } else {
        res = new Error(messenger.getMessage({
            msg: 'unknownCommand'
        }));
    }
    return res;
}

/**
 * Sends a response from doAction() to stdout or stderr
 * @param  {Error|String|Object} either an Error instance, or a message string,
 * or robot instance.
 * @return {undefined}      no return. the func only sends to stdout or stderr
 */
function doOutput(data) {
    var res, _data = data.trim();

    if (_data.match(/(q|quit|exit)/i))
        process.exit();

    res = doAction(_data);
    if (res instanceof Error) {
        stdout.write(res.message + EOL + '> ');
    } else if (typeof res == 'string') {
        stdout.write(res + EOL + '> ');
    } else {
        stdout.write('> ');
    }
}


/**
 * TheToyRobotApp class
 * It has only one static method .run() to start the app
 */
function TheToyRobotApp() {};

/**
 * @static
 */
TheToyRobotApp.run = function() {
    stdout.write(messenger.getMessage({
        msg: 'welcome',
        eol: EOL
    }) + EOL + '> ');
    stdin.resume();
}


module.exports = TheToyRobotApp;
 6  commands.txt 
@@ -0,0 +1,6 @@
PLACE 0,0,NORTH 
MOVE 
REPORT 
LEFT 
MOVE 
REPORT 
 20  package.json 
@@ -0,0 +1,20 @@
{
    "name": "toyRobotSimulator",
    "version": "1.0.0",
    "description": "The application is a simulation of a toy robot moving on a square tabletop",
    "main": "start.js",
    "scripts": {
        "test": "jasmine",
        "start": "node start.js"
    },
    "keywords": [
        "lookahead.com.au",
        "test",
        "task",
        "toy",
        "robot",
        "simulator"
    ],
    "author": "Sergey Reznikov",
    "license": "ISC"
}
 93  spec/messengerSpec.js 
@@ -0,0 +1,93 @@
'use strict';

/**
 * Let's test Messenger.
 * We have to make sure that it returns correct messages to Robot.
 * We take messages from config.js file.
 */
var config = require('./../app/config');
var Messenger = require('./../app/messenger');


describe('The Messenger', function() {
    var messenger, x, y, f, s;

    beforeAll(function() {
        messenger = new Messenger(config.messenger),
            x = 1, y = 2, f = 'south', s = 'sake';
    });

    /**
     * To test each message separatly is not a good solution - it makes us to
     * manually create a new it('...') everytime we have a new message.
     */
    it('== should output correct noInitialCommand message ==', function() {
        expect(messenger.getMessage({
            msg: 'noInitialCommand'
        })).toEqual(messenger._constructMessage({
            msg: 'noInitialCommand',
            x: x,
            y: y,
            f: f,
            ci: '(case insensitive, spaces are acceptable instead of commas)'
        }));
    });

    it('should output correct default welcome message', function() {
        expect(messenger.getMessage()).toEqual(config.messenger
            .oMsgs['welcome']);
    });

    it('should output correct default welcome message', function() {
        expect(messenger.getMessage({
            msg: 'FooBlaBla'
        })).toEqual(config.messenger.oMsgs['welcome']);
    });

    it('combinedMsg', function() {
        expect(messenger.getMessage({
            msg: 'someCombinedMsg',
            x: x,
            y: y,
            s: s
        })).toEqual(messenger._constructMessage({
            msg: 'someCombinedMsg',
            x: x,
            y: y,
            f: f,
            s: s
        }))
    })

    /**
     * It is much better to test ALL messages in a loop. So that, no need to
     * manually create a new it('...') every time we decide to have a new
     * message. All is needed is to type a new message in a config file. It will
     * be tested here automatically.
     */
    function testItsInLoop(key) {
        it(['should output correct', key, 'message'].join(' '),
            function() {

                expect(messenger.getMessage({
                    msg: key,
                    x: x,
                    y: y,
                    f: f
                })).toEqual(messenger._constructMessage({
                    msg: key,
                    x: x,
                    y: y,
                    f: f
                }));

            });
    }

    /**
     * A loop by itself
     */
    for (var key in config.messenger.oMsgs) {
        testItsInLoop(key);
    }
});
 83  spec/playgroundSpec.js 
@@ -0,0 +1,83 @@
'use strict';

/**
 * Lets test Playground
 * The Playgroung has only one method to test
 */
var Playground = require('./../app/playground');
var config = require('./../app/config');


describe('The Playground', function() {
    var playground,
        xOuts = [config.playground.startPointX - 1, config.playground.lengthX],
        yOuts = [config.playground.startPointY - 1, config.playground.lengthY],
        yIns = [config.playground.startPointY, config.playground.lengthY - 1],
        xIns = [config.playground.startPointX, config.playground.lengthX - 1];

    beforeAll(function() {
        playground = new Playground(config.playground);
    });

    function loopInvalidY(x, y) {
        it('shoud return TRUE if Ys are OUTSIDE it', function() {
            expect(playground.isOutOfPlayground(x, y)).toBe(true);
        });
    }

    function loopValidY(x, y) {
        it('shoud return FALSE if Ys are INSIDE it', function() {
            expect(playground.isOutOfPlayground(x, y)).toBe(false);
        });
    }


    function loopInvalidX(x, y) {
        it('shoud return TRUE if Xs are OUTSIDE it', function() {
            expect(playground.isOutOfPlayground(x, y)).toBe(true);
        });
    }

    function loopValidX(x, y) {
        it('shoud return FALSE if Xs are INSIDE it', function() {
            expect(playground.isOutOfPlayground(x, y)).toBe(false);
        });
    }

    /**
     * Y is OUTside
     */
    for (var x = config.playground.startPointX; x < config.playground.lengthX; ++x) {
        for (var i = 0; i < yOuts.length; ++i) {
            loopInvalidY(x, yOuts[i]);
        }
    }

    /**
     * Y is INside
     */
    for (var x = config.playground.startPointX; x < config.playground.lengthX; ++x) {
        for (var i = 0; i < yIns.length; ++i) {
            loopValidY(x, yIns[i]);
        }
    }

    /**
     * X is OUTside
     */
    for (var y = config.playground.startPointY; y < config.playground.lengthY; ++y) {
        for (var i = 0; i < xOuts.length; ++i) {
            loopInvalidX(xOuts[i], y);
        }
    }

    /**
     * X is INside
     */
    for (var y = config.playground.startPointY; y < config.playground.lengthY; ++y) {
        for (var i = 0; i < xIns.length; ++i) {
            loopValidX(xIns[i], y);
        }
    }

});
 223  spec/robotSpec.js 
@@ -0,0 +1,223 @@
'use strict';

/**
 * Lets test a Robot.
 * The largest test suit in the app.
 */

var Playground = require('./../app/playground');
var Messenger = require('./../app/messenger');
var config = require('./../app/config');
var Robot = require('./../app/robot');

describe('The Toy Robot', function() {
    var robot;
    var playground;
    var messenger;
    var x, y, f;
    var aDirections;

    beforeAll(function() {
        messenger = new Messenger(config.messenger);
    });

    beforeEach(function() {
        robot = new Robot(config.robot,
            new Playground(config.playground),
            messenger);
    });

    it('coordinates should be undefined at start', function() {
        var oPosition = robot._getRobotPosition();
        expect(oPosition.x == undefined &&
            oPosition.y == undefined &&
            oPosition.f == undefined).toBe(true);
    });

    it('should report its position', function() {
        var x = 2,
            y = 3,
            f = 'south';

        robot.place(x, y, f);

        expect(robot.report()).toEqual(messenger.getMessage({
            msg: 'robotPosition',
            x: x,
            y: y,
            f: f.toUpperCase()
        }));
    });

    it('should say "place me first to begin" at start', function() {
        expect(robot.report()).toEqual(messenger.getMessage({
            msg: 'placeRobotFirst'
        }));
    });

    it('should not accept nonInt X or Y', function() {
        var x = "foo",
            y = "1,4",
            f = "south";
        expect(robot.place(x, y, f)).toEqual(new TypeError(
            messenger.getMessage({
                msg: 'nonIntCoordinates'
            })));
    });

    it('should not accept undefined FACE', function() {
        var x = "foo",
            y = "1,4",
            f;
        expect(robot.place(x, y, f)).toEqual(new TypeError(
            messenger.getMessage({
                msg: 'noFace'
            })));
    });

    it('should not accept non-string FACE', function() {
        var x = "foo",
            y = "1,4",
            f = 100;
        expect(robot.place(x, y, f)).toEqual(new TypeError(
            messenger.getMessage({
                msg: 'faceNotString'
            })));
    });

    it('should not accept negative Y in PLACE', function() {
        var x = 0,
            y = -1,
            f = 'south';
        expect(robot.place(x, y, f)).toEqual(new TypeError(
            messenger.getMessage({
                msg: 'noNegativeCoordinates'
            })));
    });

    it('should not accept negative X in PLACE', function() {
        x = -1, y = 0, f = 'south';
        expect(robot.place(x, y, f)).toEqual(new TypeError(
            messenger.getMessage({
                msg: 'noNegativeCoordinates'
            })));
    });

    it('should not accept invalid FACING words', function() {
        x = 2, y = 3, f = 'foo';
        expect(robot.place(x, y, f)).toEqual(new TypeError(
            messenger.getMessage({
                msg: 'wrondDirection'
            })));
    });

    it('should not be placed outside the playground', function() {
        x = 0, y = 6, f = 'north';
        expect(robot.place(x, y, f)).toEqual(new Error(
            messenger.getMessage({
                msg: 'wrongPlace'
            })));
    });

    it('should have "_isFirstStepMade = false" before initial PLACE',
        function() {
            expect(robot._getIsFirstStepMade()).toBe(false);
        }
    );

    it(
        'should set "_isFirstStepMade = true" upon successful initial PLACE',
        function() {
            var x = 3,
                y = 3,
                f = 'south';
            robot.place(x, y, f);
            expect(robot._getIsFirstStepMade()).toBe(true);
        });

    it('should change X, Y upon successful place', function() {
        var x = 3,
            y = 3,
            f = 'south',
            oPositionEnd = {};

        robot.place(x, y, f);

        oPositionEnd = robot._getRobotPosition();

        expect(oPositionEnd.x == x &&
            oPositionEnd.y == y &&
            oPositionEnd.f == f.toUpperCase()).toBe(true);
    });

    it('should return itself if PLACE was successful', function() {
        x = 1, y = 1, f = 'south';
        expect(robot.place(x, y, f)).toEqual(robot);
    });

    it(
        'should not accept MOVE command before initial PLACE command',
        function() {
            expect(robot.move()).toEqual(new Error(
                messenger.getMessage({
                    msg: 'noInitialCommand'
                })));
        });


    it('should not be able to step out of the playground', function() {
        var x = 4,
            y = 0,
            f = 'east';
        robot.place(x, y, f);
        expect(robot.move()).toEqual(new Error(
            messenger.getMessage({
                msg: 'wrongMove'
            })));
    });

    it('should successfully make a correct MOVE', function() {
        var x = 1,
            y = 1,
            f = 'east',
            pos;
        robot.place(x, y, f);
        robot.move();
        pos = robot._getRobotPosition();
        expect(pos.x == x + 1 && pos.y == y && pos.f == f.toUpperCase())
            .toBe(true);
    });


    it('should not turn RIGHT before initial PLACE was made', function() {
        expect(robot.right()).toEqual(new Error(
            messenger.getMessage({
                msg: 'noInitialCommand'
            })));
    });

    it('should not turn LEFT before initial PLACE was made', function() {
        expect(robot.left()).toEqual(new Error(
            messenger.getMessage({
                msg: 'noInitialCommand'
            })));
    });

    it('should turn LEFT (change face)', function() {
        var x = 1,
            y = 1,
            f = 'north';
        robot.place(x, y, f);
        robot.left()
        expect(robot._getRobotPosition().f).toEqual('WEST');
    });

    it('should turn RIGHT (change face)', function() {
        var x = 1,
            y = 1,
            f = 'north';
        robot.place(x, y, f);
        robot.right();
        expect(robot._getRobotPosition().f).toEqual('EAST');
    });
});
 9  spec/support/jasmine.json 
@@ -0,0 +1,9 @@
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ]
}
 8  start.js 
@@ -0,0 +1,8 @@
'use strict';

/**
 * It is the starting point of the application.
 */

var app = require('./app/toyRobotApp');
app.run();
