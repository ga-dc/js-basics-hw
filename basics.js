// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//number -- 15 is a number and is not enclosed in "", which would make it a string.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//string -- Anything contained in "" is a string.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//object -- An array is a complex datum that contains more information, so it is recognized by JS as an object.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//number -- NaN is a weird thing that is considered as a type of number (that is not a number)

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//hamburgers -- These 2 strings are concactenated because JS will also use "+" to concactenate strings

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//NaN -- While + can be used to concactenate, "-" does not have the opposite funciton. JS uses "-" to subtract numbers and these are not numbers they are strings. Since they are not numbers, the result is not a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//johnny5 -- JS treats both sides as strings, since they both are not numbers, and concactenates them

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//NaN -- Again, JS only uses "*" to multiply 2 numbers, so since we only have one number and one string, it knows that they are not numbers - NaN

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
//[3, 2, 4, 6, 10] -- .pop "pops" off the 8 on the end of the array, leaving us with [2, 4, 6]. Then .push adds 10 to the end, giving us [2, 4, 6, 10]. Finally, .unshift puts 3 at the beginning of the array, leaving us with [3, 2, 4, 6, 10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
//["dot", "dash", "pause", "dash", "dot"] -- moreMorse is defined as morse.join with " dash", which takes the strings in the array out of the array and joins them with " dash" in between, which would give us dot dash pause dash dot. Then, .split is applied to moreMorse and creates an array with each string as a separate value.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
// [ [ "Mick", "Keith", "Ronnie", "Charlie" ], [ "Paul", "John", "George", "Ringo" ] ] -- bands.push(beatles) inserted the array beatles into bands and its empty array, giving us ["Paul", "John", "George", "Pete"]. bands.unshift(stones) put the array stones at the beginning of the array bands, giving us [["Brian", "Mick", "Keith", "Ronnie", "Charlie"]["Paul", "John", "George", "Pete"]]. bands[bands.length-1].pop() then popped off the value of bands that was at index bands.length-1, which is the last value - "Pete". Then, the first index is (redundantly?) removed by .shift, giving us [["Mick", "Keith", "Ronnie", "Charlie"]["Paul", "John", "George", "Pete"]]. Finally, bands[1][3] sets the second index of the array bands (the beatles array) and the fourth index of the beatles array ("Pete") to Ringo.
