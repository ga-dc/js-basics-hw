// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
// "number".  15 is written as a number, and not a string.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
// "string" - this is a word

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// "object" - arrays are technically a type of object

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
// "number" - NaN is techincally still considered a number in JS

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
// "hamburgers" - JS allows us to concatenate

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
// NaN - it thinks we are subtracting "s" from "hamburgers" which can only work for numbers

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
// "johnny5" - converts 5 into a string and concatenates

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
// NaN - this is evaluated as a mathematical operation

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
// [3,2,4,6,10] - pop removes the last number, push adds, unshift adds to the beginning

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
// [["dot"],["pause"],["dot"],["dash"]] - join dash at the end, and split out the array
//I saw I was incorrect on this one!

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
// [["Mick","Brian","Keith", "Ronnie", "Charlie"],["Paul", "John", "George", "Ringo"]]
