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

// const numbers = [10, 30, 44, 21, 33];

// const [first, secend, third, fourth, five]= numbers;
// console.log(first)
// console.log(secend)
// console.log(third)


// Object key, value, feez, seal, delete

// const bioData = {
//         name : "Golap",
//         id: 11,
//         1 : "100",
//         friends : ["basar", "Imrul", "Masum"],
//         status : "Not Found"
//     } 
//     Object.seal(bioData)

//      bioData.name = "tahmid"
//     console.log(bioData)


     

    // console.log(Object.entries(bioData))
    // delete bioData.name
    // console.log(bioData)
    // console.log(Object.keys(bioData));
    // console.log(Object.values(bioData))

    // const key = Object.keys(bioData);
    // console.log(key)

    // const value = Object.values(bioData);
    // console.log(value)


    // const bioData = {
    //     name : "Golap",
    //     id: 11,
    //     1 : "100",
    //     friends : ["basar", "Imrul", "Masum"],
    //     status : "Not Found"
    // } 
    // console.log(bioData);

    // // amra k Object er upoe a for in chalate hobe

    // for(let bio in bioData){
    //     console.log(bio)
    // }

    // amra Object er upor for of chalate parbo nha

    // for(let bio of bioData){
    //     console.log(bio)
    // }




//     const bioData = {
//         name : "Golap",
//         id: 11,
//         1 : "100",
//         friends : ["basar", "Imrul", "Masum"],
//         status : "Not Found"
//     } 
//    for(let key in bioData){
//     console.log(`key : ${key} value : ${bioData [key]}`  )
//    }



// prestice task modiul --- 30

// ai module summary recape

// 1 : prothome amra j ta shikachi se ta holo amra r kokhon var a used korbo nha


// 2 : er pore amra jodi kokhon konu man change korte hoi ta hole let diye diclar korbo

// 3 : er pore jodi kunu man j ta kokhono change hobe nha taile amra seta const diye diclar korbo

// 4 : er pore amra multiple line a code kora shikchi j take bola hoi (tamplate String `  `)

// 5 : er pore kunu function a jodi amra paramitar er thake man kom di ta hole sum er somoy num = 0 & gun er somoy num = 1 dile error asbe nha

// 6 : tar pore amra shikchi dui ta array mile ekta notun array make kora (...numners)

// 7 : tar pore shikchi Object k eccess kore  
// 
//  const bioData = {
//     name : "Golap",
//     id: 11,
//     1 : "100",
//     friends : ["basar", "Imrul", "Masum"],
//     status : "Not Found"
// } 
// console.log(bioData);

// const {name, id, friends, status} = bioData
// console.log(name, id, friends, status)

// 8 : tar pore shikchi Array k eccess kore  

// const Number = [10, 33, 55, 33, 3332];
// const [first, secend, third] = Number
// console.log(first, secend, third)

// 9 : er pore shikchi arrow function

// const add = (num1, num2) => {
//     return num1 + num2
// }

// 10: er pore shikchi

// * Object.keys;
// * Object.values;
// * Object.seal;
// * Object.freeze;
// * Object.entries


// modiul -- 31 recape start now

// acces value and nested value


// const bioData = {
//     name : "Golap",
//     id: 11,
//     1 : "100",
//     friends : ["basar", "Imrul", "Masum"],
//     status : "Not Found",

//     bioData2 :{
//          name : "Tahmid",
//          age : 21,
//          isMarrid : false
//     }
// } 
// bioData.bioData2.name = "RAj"
// console.log(bioData.bioData2.isMarrid);
// console.log(bioData.bioData2.name);
// console.log(bioData["1"]);

// error thake bachte

// console.log(bioData.bioData2.mother?.name)


// Array sum no for loop 1 line code used map

// const numbers = [10, 20, 30, 40, 50, 60];
// let sum = 0;

// for(let i = 0; i < numbers.length; i ++){
//     const item = numbers[i];
//     sum = sum + item;
//     // console.log(sum)
    
// }
// console.log(sum)

// const numbers = [11, 21, 30, 40, 50, 60];


// let temp = [];
// for (let i = 0; i < numbers.length; i++){
//     const item = numbers[i];
//    const sum = item + 1;
//    temp.push(sum)

// }

// console.log(temp)


// Array function map

// const number = numbers.map (num => {
//     return num + 1
// });
// console.log(number)

// let sum = 0;

// for(let i = 0; i < numbers.length; i ++){
//     const item = numbers[i];
//     if(item % 2 === 0){
//         sum = sum + item;
//     }
   
//     // console.log(sum)
    
// }
// console.log(sum)
// console.log(numbers)
// for(let num of numbers){
//     console.log(num)
// }




// forEach, filter, find 



// const products = [

//     {id : 1, Name : "iphone", color : "white", price : 14000, Brand : "iphone"},
//     {id : 2, Name : "xoime", color : "black", price : 42000, Brand : "xoime"},
//     {id : 3, Name : "samsung", color : "black", price : 112000, Brand : "samsung"},
//     {id : 4, Name : "redmi", color : "blue", price : 112000, Brand : "redmi"},
//     {id : 5, Name : "vivo", color : "yellow", price : 1000, Brand : "vivo"},
//     {id : 6, Name : "mi", color : "aqua", price : 2000, Brand : "mi"},
//     {id : 7, Name : "realmi", color : "vilioed", price : 11100, Brand : "redmi"},
// ]



// const product = products.find (p => {
//     if(p.id === 3){
       
//     }
//     return p
// })
//  console.log(product)
// products.forEach(p => console.log(p))

// products.forEach(p => {
//     if(p.color === "black")
//         console.log(p)
// })

// const product = products.map (p =>{
//     if(p.color === "black"){
//         p.price = p.price + 100;
        
//     }
//     return p
// })
// console.log(product)
// ei bar filter j ta 1 ta Array return kore upor thake j gula milbe se gula k ekta Array te dekhabe

// const product = products.filter (p => {
//     if(p.color === "black"){
//         return p
//     }
// })

// console.log(product);
// console.log(product.length)

// find j ta upor tahke milate suro kore 1 ta mille return kore ekta array

// const product = products.find (p => {
//     if(p.color === "black"){
//         return p
//     }
// })

// console.log(product)
// foreach j ta kichu return kore nha 

// products.forEach(p => console.log(p))

// console.log(products)

// for (let product of products){
//     console.log(product)
// }

