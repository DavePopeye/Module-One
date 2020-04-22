//strings


/*let myNumber = 2

const myString = `First line
Second line
This is my value ${2+3}
`
console.log(myString)*/

/*const myString = "whatever"

myString.slice(3.6)

myString.indexOf("a")

myString.trim()

const sentence = `Hello strivers we are trying to split methods`
const splittedWords = sentence.split(" ")

console.log(splittedWords)

console.log(splittedWords.join(", "))

console.log("asd".repeat(5))

console.log(Math.PI)*/

//FUNCTION

/*let number = 4

const squareFunction = function(x){
    //{BODY OF THE FUNCTION} = the code of the function
    const square = x * x
    return square 
}*/
    
//FUNCTION EXECUTION

/*const resultOfSquareOfTwo = squareFunction(2)

console.log("2*2", resultOfSquareOfTwo)

//DEFINE A FUNCTION WITH ZERO PARAMETERS

const makeNoise = function(){
    console.log("BARKS")
    console.log("BARKS")
    console.log("BARKS")
    console.log("BARKS")
    console.log("BARKS")
    console.log("BARKS")

}





//FUNCTION WITH MULTIPLE PARAMETERS

const sum = function(a, b){
    return a+b
}

console.log(sum(5,6)) // a = 5, b = 6 */

//SCOPES

/*let x = 10

if(true){
    var y = 20
    var z = 30
    console.log(x + y + z)
}

 console.log(y + z)

// OTHER DECLARATIONS

const sum = function(a, b){
    let localSum = a + b
    return localSum 

}

function sum2(a , b){
    let localSum = a + b
    return localSum

}

let launchMissiles = function(){
    console .log("Rocket Launched")

}

if(safmode){
    launchMissiles= function(){}
}

const square = x => x * x */