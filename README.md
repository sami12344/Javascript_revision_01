<h1 align = "center" >

![image](/images/banner.png)
Socket.io
</h1>
<h4 align="center">JavaScript is a high-level, interpreted programming language primarily used for creating interactive elements on websites, enables developers to manipulate web page elements, handle events, and validate forms. JavaScript runs on the client-side, making it a crucial tool for web development. Its versatility and extensive libraries contribute to its widespread adoption and its role in creating dynamic and engaging web experiences.</h4>
<br>

<p align="center">

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

</p>

<p align="center">
  <a href="#About">About</a> •
  <a href="#Features">Features</a> •
  <a href="#Documentation">Documentation</a> •
  <a href="#License">License</a> •
</p>

## About


JavaScript is a powerful programming language that was introduced in 1995. It quickly became an essential tool for web development, allowing developers to add interactive and dynamic elements to websites. Over the years, JavaScript has evolved and grown in popularity, becoming one of the most widely used programming languages in the world.

One of the key features of JavaScript is its ability to run on the client-side, meaning it can be executed directly in a user's web browser without the need for server-side processing. This enables developers to create rich, interactive web applications that respond to user actions in real-time.

JavaScript is a versatile language that can be used for a wide range of tasks, from simple form validation to complex web applications. It provides a robust set of built-in functions and libraries, making it easy to manipulate web page elements, handle events, and perform calculations. Additionally, JavaScript can interact with other web technologies such as HTML and CSS, allowing developers to create seamless and immersive user experiences.

Furthermore, JavaScript has expanded beyond the browser and is now used in server-side environments with the introduction of frameworks like Node.js. This has opened up new possibilities for building full-stack applications using a single programming language.

With its widespread adoption and continuous development, JavaScript continues to shape the modern web landscape, empowering developers to create dynamic and interactive experiences for users across the globe.





## Features

### Scripting
Javascript executes the client-side script in the browser.

### Interpreter
The browser interprets JavaScript code.

### vent Handling
Events are actions. Javascript provides event-handling options.

### Light Weight
As Javascript is not a compiled language, source code never changes to byte code before running time. Low-end devices can also run Javascript because of its lightweight feature.

### Case Sensitive
In Javascript, names, variables, keywords, and functions are case-sensitive.

### Control Statements
Javascript has control statements like if-else-if, switch case, and loop. Users can write complex code using these control statements.

### Objects as first-class Citizens
Javascript arrays, functions, and symbols are objects which can inherit the Object prototype properties. Objects being first-class citizens means Objects can do all tasks.

### Supports Functional Programming
Javascript functions can be an argument to another function, can call by reference, and can assign to a variable.

### Dynamic Typing
Javascript variables can have any value type. The same variable can have a string value, an integer value, or any other.

### Client-side Validations
Javascript client-side validations allow users to submit valid data to the server during a form submission.

### Platform Independent
Javascript will run in the same way in all systems with any operating system.

### Async Processing
Javascript async-await and promise features provide asynchronous nature. As the processes run in parallel, it improves processing time and responsiveness.

### Prototype-based
Javascript follows 'Object.prototype' functions instead of class inheritance.

### Nullish Coalescing Operator (??)
The nullish coalescing operator returns the right side operand if the left side operand is null. If the left operand is not 'null', the operator returns the left side operand value. This operator helps to avoid Boolean operator errors.

### Logical nullish assignment (??=)
It is the shorthand of

```js

result=left??right;

```
Styling Console Log
Javascript consoles can have styles. For example, see the block below.

console.log('%cText %cValue', 'color:black; cursor:pointer', 'color: green;');
The first set of styles applies to the first string with %c, and the second %c gets the second style set for the second string.

Object Shorthand
Object shorthand can save space and time by allowing users to use the same name for assigning variables and key values.

const name='Egan',
id=1;

//The above snippet can be as follows
const egan={
name,
id
}
console.log(egan);

//Output
{name:'Egan', id:1}
Optional chaining (?.)
Javascript optional chaining optimizes the general null check in the example below.

var obj={
   data:{
      id: 1;
   }
}

//General null check
if(obj.data && obj.data.id)

//Optional chaining
obj.data?.id
Defer/Async Loading
Javascript 'defer' and async download file during HTML parsing and optimizes page load time. Async scripts run immediately after the download. Defer scripts execute only in the Dom order.

Simple client-side Calculations
Javascript can execute simple client-side calculations on the browser.

Large Browser Control
Javascript gives priority to the browser over the server.

Date and Time Handling
Javascript has built-in functions for getting 'date' and time.

HTML Content Generation
Javascript allows users to add dynamic HTML content upon doing some action on the page.

The Browser And OS Detection
Javascript has built-in code to detect the browser that the user uses.

Let & Const Keywords
Javascript replaces the var keyword with the let and const keywords and has a block-level scope.

Arrow Functions
Javascript helps to optimize syntax in anonymous functions with the arrow function syntax.

Template Literal
Javascript permits saving a variable as a string and saves development time.

New Array Functions
Javascript array functions enable code optimization. The regular array has an integer index, and the associative array has string index.

Default Parameters
Javascript avoids error scenarios with undefined values using the default parameters.

Property Shorthand
Javascript has several shorthand methods like .get() that saves coding time and cost.

Similar Syntax of Java
Javascript syntax and Java syntax are more similar, and it helps developers to work in both programming languages.

If else Statement
Javascript 'if else' conditional statements perform logical operations.

Looping Statements
Javascript loops allow developers to run the same code multiple times using a loop.

BigInt
Javascript allows large integer values. Javascript engines support BigInt differently.

Dynamic Import
The Javascript dynamic import function allows adding any files at run time.

Promise.allSettled
Javascript Promise.allSettled method accepts the promise array only after resolving or rejecting all the promises.

String matchAll
Javascript string.matchAll() returns all the match groups in a regular expression.

globalThis
Javascript globalThis points to the global object without considering the window object or self-object.

Module Namespace Exports
Javascript Module Namespace import export syntax is as follows.

import * as utils from'./utils.mjs';
export {utils}
Well Defined for-in Order
Javascript 'for(a in b)' had no execution order till 2020. ES2020 gave the specification.

Import.meta
Javascript import.meta gives the meta information of a script tag.

<script type='module' src='module.js'>
console.log(meta);
//Output
{url: 'file':'//home/user/module.js'}
Negative Indexing with .at()
Javascript array indexing with array length minus procedure is an old method. The function .at() can replace this task.

let arr=[10, 20, 30];
arr.at(2);//Prints 20
hasOwn
Javascript hasOwn property is an extension of hasOwnProperty. Javascript hasOwn is a static method.

let obj = Object.create(null);
obj.hasOwnProperty=function(){};
Object.hasOwnProperty(obj, 'hasOwnProperty');

//Cannot convert the object to the primitive value
Object.hasOwn(obj, 'hasOwnProperty'); //true
Class Static Block
Javascript classes can have static items.

class Color {
   static blue;
   static {
      this.blue = 'blueberry';
   }
}
Error Cause
Javascript Error class provides an error cause report as well.

throw new Error('Error message', { cause: rootCause });

#### Reliability

Connections are established even in the presence of:
  - proxies and load balancers.
  - personal firewall and antivirus software.

For this purpose, it relies on [Engine.IO](https://github.com/socketio/engine.io), which first establishes a long-polling connection, then tries to upgrade to better transports that are "tested" on the side, like WebSocket. Please see the [Goals](https://github.com/socketio/engine.io#goals) section for more information.

#### Auto-reconnection support

Unless instructed otherwise a disconnected client will try to reconnect forever, until the server is available again. Please see the available reconnection options [here](https://socket.io/docs/v3/client-api/#new-Manager-url-options).

#### Disconnection detection

A heartbeat mechanism is implemented at the Engine.IO level, allowing both the server and the client to know when the other one is not responding anymore.

That functionality is achieved with timers set on both the server and the client, with timeout values (the `pingInterval` and `pingTimeout` parameters) shared during the connection handshake. Those timers require any subsequent client calls to be directed to the same server, hence the `sticky-session` requirement when using multiples nodes.

#### Binary support

Any serializable data structures can be emitted, including:

- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) in the browser
- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and [Buffer](https://nodejs.org/api/buffer.html) in Node.js

#### Simple and convenient API

Sample code:

```js
io.on('connection', socket => {
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('broadcast', /* … */); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
});
```

#### Cross-browser

Browser support is tested in Sauce Labs:

[![Sauce Test Status](https://saucelabs.com/browser-matrix/socket.svg)](https://saucelabs.com/u/socket)


## License

[MIT](LICENSE)