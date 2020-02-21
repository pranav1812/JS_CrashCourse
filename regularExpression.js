// key board shortcut to comment selected block of code: ctrl+K+C and ctrl+K+U to uncomment

// A regular expression is an object that describes a pattern of characters.
// Regular expressions are used to perform pattern-matching and "search-and-replace" and validation functions on text

//syntax: /pattern/modifier
// example: /www./i   or /www./g  or /www./m
// you can also use multiple modifiers : /www./gi    (don't give a blank space)

// string.match returns an array of all matches

// understanding the modifiers
// 1. case insensitive(i)

// var regx=/geeks/i
// var str="Geekss are geeks after all";
// console.log(str.match(regx));

// 2. global(g)

// var regx=/geeks/g
// var str="geekss are geeks after all";
// console.log(str.match(regx));

// 3. multiline

// character set
// var regx=/[sdp]imple/ig;
// // first letter can be anything out of s,d,p but next word has to be 'imple'
// var str='bdkjanlsimple'
// console.log(regx.test(str));

// range
// var regx=/[a-x]imple/ig;
// // first letter can be anything from a-x but next word has to be 'imple'
// var str='bdkjanlyimple'
// console.log(regx.test(str));

// defining start and end
// {num} defines how many times you want the previous character to be there

// var regx=/^69[a-q]{2}yrate/ig;
// var str='69ppyrate';
// console.log(regx.test(str));

// meta characters or special keywords
// you can use \d for the range[0-9], as in the upper example:
var regx=/^\d{2}[a-q]{2}yrate/ig;
var str='69ppyrate';
console.log(regx.test(str));


// Metacharacter 	Description
//---------------------------------------------------------------------------------------------------------
// . 	            Find a single character, except newline or line terminator
// \w 	            Find a word character
// \W 	            Find a non-word character
// \d 	            Find a digit
// \D 	            Find a non-digit character
// \s 	            Find a whitespace character
// \S 	            Find a non-whitespace character
// \b 	            Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// \B 	            Find a match, but not at the beginning/end of a word
// \0 	            Find a NUL character
// \n 	            Find a new line character
// \f 	            Find a form feed character
// \r 	            Find a carriage return character
// \t 	            Find a tab character
// \v 	            Find a vertical tab character
// \xxx 	        Find the character specified by an octal number xxx
// \xdd 	        Find the character specified by a hexadecimal number dd
// \udddd 	        Find the Unicode character specified by a hexadecimal number dddd