//ez 1

let positive= [1, 2, 3, 4, 5];
console.log(positive);

//ez 2

const myId = {
    name: "Davide",
    surname: "Papa",
    email: "davidepp1988@gmail.com",
    age: "31",
    drivinglicense: "Yes",
}
console.log(myId);

//ex 3

console.log("drivinglicense" in myId);

//ex 4
delete(myId.age); 
console.log(myId);

//ex5

const myId2 = {
    name: "Davide",
    surname: "Papa",
    email: "davidepp88@gmail.com",
}

if(myId2.email === myId.email) {
    console.log("already in use")
} else console.log("ok")

//ex 6

const totalShoppingCart = 100
if(totalShoppingCart > 50) {
    console.log(totalShoppingCart)
} else console.log(totalShoppingCart + 10)

//ex 7

const totalShoppingCartbf = 30
if(totalShoppingCartbf > 50) {
    console.log(totalShoppingCartbf*0.8)
} else console.log((totalShoppingCartbf + 10)*0.8)
    
//ex 8

const car1 = {
    brand: "Bmw",
    model: "X5",
    licenseplate: "BT-150-CJ",

}
console.log(car1)


const car2 = {}

Object.assign(car2, car1);

car2.licenseplate = "JJ-150-CJ"

console.log(car2);

const car3 = {}

Object.assign(car3, car1);

car3.licenseplate = "BJ-180-GJ"

console.log(car3)


const car4 = {}

Object.assign(car4, car1);

car4.licenseplate = "FF-890-OP"

console.log(car4)


const car5 = {}

Object.assign(car5, car1);

car5.licenseplate = "XX-430-DJ"

console.log(car5)


//ex 9

let carsForRent = [car1, car2, car3, car4, car5]

//ex 10

let nocars = carsForRent.slice(1, 4)

console.log(nocars)

//ex 11
//ex 12
//ex 13