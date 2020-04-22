
//ex 1


function area(l1, l2) {
    return l1 * l2

}

console.log(area(4, 6))

//ex2

function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else return a + b;
}

console.log(crazySum(2, 2))

//ex 3

function crazyDiff(d1) {
    if (d1 > 19) {
        return (d1 - 19) * 3;
    } else return (d1 - 19) * -1;
}

console.log(crazyDiff(18))

//ex 4

function boundaries(N) {
    if ((N >= 20 && N <= 100)|| N === 400) {
        return true
    } else return false
}

console.log(boundaries(400))

//ex 5

function strivify(){
    
}

//ex 6 

function check3and7(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        return "it's a multiple of 3 and 7!"
    } else if (n % 3 === 0) {
        return "it's a multiple of 3"
    } else if (n % 7 === 0) {
        return "it's a multiple of 7"
    } else return n
}

console.log(check3and7(1))

//ex 7

function reverseString(str){
    
    const split = str.split("");
    const reverse = split.reverse("");
    const join = reverse.join("");
    return join
}

console.log(reverseString("hello"))

//ex 8 

function upperFirst(text) {
    const wordPieces = text.split(" ");
    for (let i = 0; i < wordPieces.length; i++) {
      const word = wordPieces[i].charAt(0).toUpperCase();
      wordPieces[i] = word + wordPieces[i].substr(1);
    }
    return wordPieces.join(" ");
  }

console.log(upperFirst("hello world"))


//ex 9 

function cutString(str){ 
    let word = str.slice(1, 4);
    return word
}
    
console.log(cutString("Hello"))

//ex 10

const rnd = function giveMeRandom(){
    return Math.floor(Math.random() * 11);
}

const randoms = Array(10).fill(0).map(rnd);
console.log(randoms)