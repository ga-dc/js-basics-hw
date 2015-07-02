// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//'number'
//The typeof operator classifies all kinds of numbers (integers, floats, etc.) as "number".

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//'string'
//This one is pretty self-explanatory as well. A string is a series of characters stored within quotation marks.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//'object'
//According to MDN, an array is, strictly speaking, an indexed object rather than an entirely different kind of data collection. The typeof operator does not differentiate.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//'number'
//Because JS is like that.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//'hamburgers'
//Adding two strings together concatenates them into a single string.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//'NaN'
//Addtion is the only math operator that treats strings as strings. In this case, JS tries to treat these strings as mathematical values, which is nonsense. NaN tells us that JS was expecting a number because of the mathematical operator, but it could not produce one.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//'johnny5'
//Type coercion pounces on the opportunity provided by the presence of a string and an addition sign.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//NaN
//Even type coercion can't make sense out of this one. Again, because the mathematical operator fails to produce a mathematical solution, we get NaN.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
//[3, 2, 4, 6, 10]
//The pop method removes 8 from the end of the array. The push medthod adds 10 to the end of the array. The unshift method adds 3 to the front of the array.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( "" );
//[ 'dot', 'dash', 'pause', 'dash', 'dot' ]
//The join method joins all of the elements of the array into a string, with each element separated by " dash ". The split method splits that string back into an array, this time with a space as the separator that determines the substring that comprises each element of the array.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
//[ [ 'Mick', 'Keith', 'Ronnie', 'Charlie' ], [ 'Paul', 'John', 'George', 'Ringo' ] ]
//The push method adds the array beatles to the end of the array bands, and the unshift method adds the array stones at the front of it. The pop method removes the last element from the array at index position 1 in bands. That's 'Pete'. The shift method removes the first element from the array at index position 0 in bands. That's 'Brian'. The last line defines the element at index position 3 of the array at index position 1 of bands as 'Ringo'. Since there is not already an element at that position, it creates one.
