/*Write a script that prints x times “C is fun”

Where x is the first argument of the script
If the first argument can’t be converted to an integer, print “Missing number of occurrences”
You must use console.log(...) to print all output
You are not allowed to use var
You can use only two console.log
You must use a loop (while, for, etc.)*/

const arg = process.argv[2]; // the first argument after "node script.js"
const num = parseInt(arg, 10); // convert the argument to an integer
if (isNaN(num)) {
    console.log("Missing number of occurrences");
}   
else {
    let output = "";
    for (let i = 0; i < num; i++) {
        output += "C is fun\n";
    }   
    console.log(output.trim());
}