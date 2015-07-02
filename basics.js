// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
number; 15 with no quotes is a number.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
string; Letters in quotes are strings.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
object; Arrays are considered objects since they may contain strings, numbers, or booleans.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
number; NaN is an exception to the number rule.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
"hamburgers"; A string plus another string results in concatenation, or joining the two.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
NaN; Concatenation does not apply to subtraction between a string and a number.
The computer always expects a number when subtracting values.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
"johnny5"; Concatenation does apply when adding numbers and strings.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
NaN; Concatenation does not apply to multiplication between a string and a number.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
var numbers = [3,2,4,6,10]; .pop deletes the last value; .push adds new value to the end;
and .unshift adds new value to the beginning.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
[ 'dot', 'dash', 'pause', 'dash', 'dot' ]; .join() joins the 3 elements into 1 string and separates the existing
values with "dash"; .split() takes the string and uses the spaces in the string to separate each element.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
[ [ 'Mick', 'Keith', 'Ronnie', 'Charlie' ], [ 'Paul', 'John', 'George', 'Ringo' ] ]
.push adds the elements of the beatles array to bands; .unshift moves the array from stones to the
front of bands; note that this creates a subarray; .pop removes the element at index number 8 which is "Pete";
.shift removes the first element of the array, which is "Brian"; the final line sets elements at index position 1, 3 to "Ringo";
