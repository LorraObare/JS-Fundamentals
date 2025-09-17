/*Write a script that prints a message depending of the number of arguments passed:

If no arguments are passed to the script, print “No argument”
If only one argument is passed to the script, print “Argument found”
Otherwise, print “Arguments found”
You must use console.log(...) to print all output
You are not allowed to use var*/

const args = process.argv.slice(2); // get only the arguments after "node script.js"

if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}