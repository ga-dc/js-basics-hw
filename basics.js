// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );

a number, a numerical value

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );

a string, which is a word entered into javascript

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );

an object in form of an array of strings

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );

evaluates as a number, usually result of an unreal math operation (e.g. 0/0)

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";

"hamburgers" - the + concatenates the two strings.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";

Not a number (NaN). Operands are treated as numbers by - sign.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;

"johnny5"; the string and number are concatenated.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";

Not a number. String can't be multiplied by a number.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); 8 will be removed from end of array.
numbers.push( 10 ); 10 will be inserted at end of array.
numbers.unshift( 3 ); 3 will be inserted at beginning of array.



// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

[ 'dot', 'dash', 'pause', 'dash', 'dot' ]

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles ); [ "Paul", "John", "George", "Pete" ];
bands.unshift( stones ); [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands[ bands.length - 1 ].pop();  if beatles [ "Paul", "John", "George" ]; if stones [ "Brian", "Mick", "Keith", "Ronnie" ]
bands[0].shift();  if beatles [ "John", "George", "Pete" ]; if stones [ "Mick", "Keith", "Ronnie", "Charlie" ]
bands[1][3] = "Ringo"; if beatles [  "Paul", "Ringo", "George", "Ringo" ]; if stones ["Brian", "Ringo", "Keith", "Ringo", "Charlie"]

comfort_level = 4
completeness = 4

not clear on to which band later code samples apply
