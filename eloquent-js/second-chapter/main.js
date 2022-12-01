// let theNumber = Number(prompt("pick a number"))
// if (!Number.isNaN(theNumber)) {
//     console.log("The number you picked is the squre root of " + theNumber * theNumber)
// } else {
//     console.log("Hey why didn't you give me a number?")
// }

// let num = Number(prompt("pick a number"))
// if (num < 10) {
//     console.log("Number is Small")
// }else if (num < 100) {
//     console.log("Number is Medium")
// }else {
//     console.log("Number is Large")
// }

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let even = arr.filter(num => num % 2 === 0) 
    console.log(even)

let number = 0
while (number <= 12) {
    console.log(number)
    number = number + 2
}

let counter = 0
let result = 1
while (counter < 10){
    result = result * 2
    counter = counter + 1
}
console.log(result)
