
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
number
// 15 is a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
string
// things inside quotes are strings

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
object
// I don't understand why this is an object.  Could you please explain?

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
number
// NaN/Not a Number, is a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
'hambuergers'
// adding two strings pushes them together

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
NaN
// subtraction is a numberical operator, and this string doesn't contain numbers

// What is the return value of the below code sample? Provide a sentence or two
of explanation.
"johnny" + 5;
'johnny5'
// since this is addition it allows you to just combine the two, even though one
is a string and one is a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
NaN
// you cannot multiply numbers and strings that contain characters

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
[ 3, 2, 4, 6, 10]
// pop gets rid of the 8, push adds 10 to the end, unshift adds 3 to the beginning

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
["dot", "dash", "pause", "dash", "dot"]
// I don't really understand what .split is doing in this case, since dash has space around it.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
[ [ "Mick", "Keith", "Ronnie", "Charlie" ], [ "Paul", "John", "George", "Ringo" ] ]

// push adds all of the names of the beatles to the bands array
// unshift adds all of the names of the stones at the beginning of the bands array, creating two
// arrays within the bands array
// the pop at length -1 gets rid of Pete, because lenth is 9, so length -1 is 8,
// starting with 0, Pete is in the 8th place
//the shift gets rid of brian, because he is in place 0 of the array
// and the last line adds ringo to the second array at the 4th spot because you have to
// account for the first place being 0
