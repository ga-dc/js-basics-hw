// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 ); ANS = Number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" ); ANS = String

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] ); ANS = Object

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN ); ANS = Number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s"; ANS = hamburgers

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s"; NaN

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5; johnny5

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons"; NaN

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop(); ANS = [2,4,6]
numbers.push( 10 ); ANS = [2, 4, 6, 8, 10]
numbers.unshift( 3 ); ANS = [3, 2, 4, 6, 8]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ]; ANS = ["dot", "pause", "dot"]
var moreMorse = morse.join( " dash " );ANS = "dotdashpausedot"
moreMorse.split( " " ); ANS = ["dotdashpausedot"]

// What will the contents of the below array be after the below code sample is executed.
var bands = []; ANS = []
var beatles = [ "Paul", "John", "George", "Pete" ]; ANS = Paul, John, George, Peth
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ]; ANS = Brian, Mick, Keith, Ronnie, Charlie
bands.push( beatles ); ANS = Bands = ["Paul", "John", "George", "Pete"]
bands.unshift( stones ); ANS = Bands ["Brian, Mick, Keith, Ronnie, Charlie, "Paul", "John", "George", "Pete"];
bands[ bands.length - 1 ].pop(); ANS = ["Brian, Mick, Keith, Ronnie, Charlie, "Paul", "John", "George",];
bands[0].shift(); ANS = ["Brian, Mick, Keith, Ronnie, Charlie, "Paul", "John", "George",];
bands[1][3] = "Ringo"; ANS = ["Ringo", "Brian, Mick, Keith, Ronnie, Charlie, "Paul", "John", "George",];
