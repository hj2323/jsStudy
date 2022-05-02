'use strict'

//////////////////////////////
// Organize Code with Modules
// - basic syntax used to define modules
// - different importing styles
// - how named exports results in read-only properties
//////////////////////////////

//ES6 introduced a long-overdue native module system. 
//  now most browsers allow you to load ES6 modules with the type="module" attribute on the HTML5 script tag.


//If you want to make something—like a function, a variable, or a class—available somewhere else, 
// you need to use an export statement.
// You then use an import statement to specify what you want to use
// from the exported module

import { printMsg } from './module1.js';
import { msg2, msg1 } from './module2.js';
printMsg(msg1 + msg2);

// remember that once you set an alias, always use that same name
import { msg2 as msg4, msg1 as msg3 } from './module2.js';
printMsg(msg3 + msg4);


//Assume now that you just want to import everything from a module 
//and not worry about naming any of the exports.
//If you use an asterisk, everything is imported as a single object.


import * as message from './module2.js';
printMsg(message.msg1 + message.msg2);