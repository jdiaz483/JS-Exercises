// Write a function hello which given a name, says hello to the name.
// Modify your hello program such that if no name is given: hello(), it will print "Hello, World!", 
// otherwise it behaves the same as previously.

function hello (name='World') {
    return `Hello, ${name}!`;
}

console.log(hello('Mustache'));
console.log(hello());