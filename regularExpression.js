// key board shortcut to comment selected block of code: ctrl+K+C and ctrl+K+U to uncomment

// A regular expression is an object that describes a pattern of characters.
// Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text

//syntax: /pattern/modifier
// example: /www./i   or /www./g  or /www./m
// you can also use multiple modifiers : /www./gi    (don't give a blank space)

// string.match returns an array of all matches

// understanding the modifiers
// 1. case insensitive(i)

var regx=/geeks/i
var str="Geekss are geeks after all";
console.log(str.match(regx));

// 2. global(g)

var regx=/geeks/g
var str="Geekss are geeks after all";
console.log(str.match(regx));
