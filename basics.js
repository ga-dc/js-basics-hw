// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
numbeer
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
String
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
Arrays
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
NaN
// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
"hamburgers" It is called a cohens
// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
NaN because the two strings are using a math function
// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
"johnny5" When there is a string + a number it becomes a concatenation.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
NaN because the second elenenbt is not a number "luftbaloons"
// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); will result to 8 because .pop remove last value in the array
numbers.push( 10 ); added the 10 inside the array
numbers.unshift( 3 ); unshift will put the number 3 in fromt of the array

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
'dot', 'dash', 'pause', 'dash', 'dot' ] the .joint("dash") function commands the dash to go in between each string in the array.
// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles ); puts bands inside the array
bands.unshift( stones ); puts bands inside the array and in the fromt
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
