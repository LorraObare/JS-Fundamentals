/*Write a script that prints two arguments passed to it, in the following format: “ is ”

You must use console.log(...) to print all output
You are not allowed to use var*/

const arg1 = process.argv[2]; // first argument after "node script.js"
const arg2 = process.argv[3]; // second argument after "node script.js" 
console.log(arg1 + " is " + arg2);
