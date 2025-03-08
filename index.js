// amra ata kokhono used korbo nha ata old ekta quard
// console.log(name)

// var name = "golap";

// amra nicher dui ta used korbo let & const

// let diye diclar korle change kora jai


// let name = "golap"
// name = "raj"
// console.log(name)

// const diye diclar korle change kora jai nha

// const name = "Golap";
// name = "raj"
// console.log(name)


// function deafult parameter
// erron er hat thake bachar jonno sum korar somoy amra paramitar a value 0 dite pari

// function add (num1=0, num2=0){
//     console.log(num1 + num2)

// }
// add(10)


// erron er hat thake bachar jonno gun korar somoy amra paramitar a value 0 dite pari

// function gun (num1=1, num2=1){
//     console.log(num1 * num2)
    
// }
// gun(10,10)
// console.log(gun.length)


// tamplate String multiple line String

// const country = "Bangladesh";
// // console.log(country)
// const newLine = `amader ai ${country} khub sundor`
// console.log(newLine);

// console.log(`Hi! ki koeo ? kemon Acho ? 
    
//     I am, fine And You ?`)


// arrow function multiple paramiter


// const add = num => num * num;
// console.log(add(10))


// const add = (num1, num2) => num1 * num2;
// console.log(add(10, 20))


// const sum = (x, y) => {
//     return x + y;
// }
// console.log(sum(20,30))

// square arrow function 

// const square = num => num * num;
// console.log(square(100))


// spread oparato ...

// let numbers = [10, 33, 55, 222, 778, 444434, 887,22221];
// // console.log(Math.max(...numbers))

// const newNumbers = [100, 200, 300, ...numbers];
// console.log(Math.max(...newNumbers))


// const friends = ["Tahmid", "Golap", "raj", "rabby"];
// console.log(friends)
// const newArray = ["Basar", "imrul", ...friends];
// console.log(newArray)



// Advance Object And Array distictCharing

// let bioData = {
//     name : "Golap",
//     id: 11,
//     1 : "100",
//     friends : ["basar", "Imrul", "Masum"],
//     status : "Not Found"
// }


// const {name, id, friends, status} = bioData;
// console.log(name);
// console.log(id)
// console.log(bioData.name) 
// console.log(bioData.id)
// console.log(bioData.friends)
// console.log(bioData.friends[0])
// console.log(bioData.status)
// console.log(bioData[1])

// console.log(bioData);

// for(let bio in bioData){
//     console.log(bio)
// }


// Advance  Array distictCharing

const numbers = [10, 30, 44, 21, 33];

const [first, secend, third, fourth, five]= numbers;
console.log(first)
console.log(secend)
console.log(third)