// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
// number - e.g. 15. 15.0, etc.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
// string - basically a word.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// array - an ordered list of key value pairs. keys are index based (starting at 0)
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//Not a number - one example of this occuring is if some funciton is anticipating
the output to be a number based on the parameters, but one of the arguents passed during call time is a string.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//hamburgers - string concatenation in this case since both operands of this expression are strings.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//NaN - strings cannot be subtracted. This expression is expecting numbers for it's operands.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//johnny5 - in this case string concatenation is converting the 5 to a string.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//NaN - strings cannot be multiplied. This expression is expecting its operands to be numbers.
// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); //8 this returns the last number in the array.
numbers.push( 10 );//becomes [2,4,6,10] pushes 10 to the last item in the array.
numbers.unshift( 3 );//becomes [3,2,4,6,8]. adds 3 to the beginning of the array.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
//["dot", "dash", "pause", "dash", "dot"] - moreMorse.join( "dash ") adds dash
//between each value and spits out a string, and moreMorse.split( " ") turns that
//string back into an array and returns a comma separated array with quotes between each  value.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );//adds the values of beatles to bands array and returns the length, 4.
bands.unshift( stones );//adds the values of stones to the beginning bands array, as a new array,
//bands now has two nested arrays in it. bands[0] has values of stones, and bands[1] has values of beatles.
bands[ bands.length - 1 ].pop();//returns pete from second (beatles) nested array (the last value )
//i believe the length - 1 trick is to select the last value of the array? which would be the second array
//then we pop the last value within that second array with pop - which gives us "pete"
bands[0].shift();//returns brian from the first (stones) nested array. we first
//select that array with bands[0] and then call shift() on it - which gives us the first value - "brian"
bands[1][3] = "Ringo";//set the 4th index of the second nested array (beatles) to the value "Ringo".
