// What is the return value of the below code sample? Provide a sentence or two of explanation.
// Number.  It is an arabic number that is not denoted by quotation marks or apostrophes.
typeof( 15 );

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// String. It denoted by quotation marks or apostrophes.
typeof( "hello" );

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// Object.  Arrays are data collection elements.
typeof( [ "dog", "cat", "horse" ] );

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// Number. Usually has to deal with string/number combos or infinity where a NaN value is unable to equal itself.
// NaN is a mathematical calculation that cannot be represented by a meaningful number.
typeof( NaN );

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// concatenating strings
"hamburger" + "s";

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// JS attempts to subtract
"hamburgers" - "s";

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// johnny5 is alive.  Becomes a string due to type coercion AKA automatic type conversion.
"johnny" + 5;

// What is the return value of the below code sample? Provide a sentence or two of explanation.
// NaN.  Unable to produce a meaningful number despite having an operator
99 * "luftbaloons";

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); //removes the last entry (highest index value)
numbers.push( 10 ); //adds a value to end of array
numbers.unshift( 3 ); //adds a value to beginning of array
//[2, 4, 6]
//[2,4,6,10]
//[3, 2, 4, 6, 10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " ); //"dot dash pause dash dot" re
moreMorse.split( " " ); //^  split method will not change above due to moreMorse being one string after join

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles ); //puts beatles array at end of bands
bands.unshift( stones ); //puts stones array at beginning of bands
bands[ bands.length - 1 ].pop(); // removes last entry of last inner array
bands[0].shift(); //removes first element of first array
bands[1][3] = "Ringo"; // adds an nested array in 4th index of 2nd array
/* end results
[ [ 'Mick', 'Keith', 'Ronnie', 'Charlie' ], [ 'Paul', 'John', 'George', 'Ringo' ] ]
   */
