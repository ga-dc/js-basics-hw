// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//number.
// this code is asking for what type of value. and 15 is a number.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//string.
//This code is asking for what is the type of value. And "hello", since it is in quotes,
// is a string.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//array.
//The code wants to know what this is, and the values set off in square brackets
// are arrays.
//Huh. Instead of an array, the check says that this is an object.
//checking on w3schools.com says that an array is a special type of object.
//so object it is.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//object.
//I think we discussed this one in class and the class discussion said object.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//hamburgers
//You can (or I can) concatenate two strings together, similar to adding, so "hamburger"
//and an "s" equals hamburgers.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//NaN
//These two strings would give you NaN because it the code trying
//to do math (substraction) and thus it should tell you that these aren't
//numbers and you can't subtract them.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//johnny5
//You can add a string and a number together and since there are no spaces, the string
//and the number would be smooshed together.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//NaN
//This one is similar to "hamburgers" - "s", you can't do math to strings, so the result
//is not a number.
//Unfortunately in the checker this did not return Nena or 99 red balloons, it also said NaN.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); //deleted 8
numbers.push( 10 ); //added 10 to the end.
numbers.unshift( 3 ); // added 3 to the beginning.
//var numbers = [ 3, 2, 4, 6, 10 ];


// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " ); //"dot dash pause dash dot" a string with " dash " as a separator
moreMorse.split( " " );  //splitting a string into an array of substrings at the " "
// so final is ["dot", "dash", "pause", "dash", "dot"] or in morse code A N.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles ); //["Paul", "John", "George" ] removing Pete from the end.
bands.unshift( stones ); // adding stones to the beginning ["Brian", "Mick", "Keith", "Ronnie", "Charlie", "Paul", "John", "George" ]
bands[ bands.length - 1 ].pop(); // remove the second to last name.
bands[0].shift();  // remove Brian
bands[1][3] = "Ringo";
//var bands = [ "Mick", "Ringo", "Ronnie", "Ringo", "Paul", "George" ]
