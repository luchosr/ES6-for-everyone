## Arrow functions

* Given the following function :

**const fullNames = names.map(function (name) {
return \`${name} bos\`;
});**

* You can make ann arrow funcion erasing the "function" word and adding a => after the (parameter).

Like this:

**const fullNames2 = names.map((name) => {
return \`${name} bos\`;
});**

* If the function has only one parameter you can delete the () of this one.

**const fullNames3 = names.map(name => {
return \`${name} bos\`;
});**

* You can do an implicit return writing the function without curly braces {} and deleting the return word.

**const fullNames4 = names.map(name => \`${name} bos\`);**

* If you not have argument in the function, you only have to write an epmy paretesis ().

**const fullNames5 = names.map(() => \`cool bos\`);**

* Arrow functions are always anonimous functions, they have no names. BUT! you can store an arrow function inside a variable.

**const sayMyName = (name) => {
alert(\`hello ${name}\`);
}**

**sayMyName('Luciano');**

## When _DO NOT USE_ arrow functions!

* When you need the `this` keyword inside a non binded function.

* When you need to bind a method to an object.

* When you need to add a prototype method.

* When you need arguments object.
