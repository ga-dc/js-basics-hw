// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
 // the return value would be number because 15 is an integer and doesn't have quotes that would make it a string

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
// the return value would be string because there are quotes around hello

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// This is an array so it would return object

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
// while NaN is actually a number, according to stackoverflow it is a number type and that's why it returns number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
// hamburgers because the + concatenates the two strings

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
// this returns NaN because JS tries to use subtract the "s", but then sees that it isn't a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
// johnny5 because JS treats the 5 as a string even though it doesn't have parantheses around it. This only applies for addition and as seen above doesn't delete when there is subtraction.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
// NaN JS tries to multiply 99 and the string. The string is undefined and when multiplied it's still undefined, but since JS knows it's a numeric action it returns NaN

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
// [3,2,4,6,10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
// ["dot", "dash", "pause", "dash", "dot"]

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";

// var bands = [ "Mick", "Keith", "Ronnie", "Charlie" ], [ "Paul", "John", "George", "Ringo"];
