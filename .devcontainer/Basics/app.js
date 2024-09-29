// --> we can use 1. node.js 2. Deno for giving the environment 
console.log("Hii Everyone !!!")
var a="Govind"
let k=3434;
const p =2;
t=343
//another way of printing the values
console.table([a,k,p,t])

//primitive data type
// 1. number -> 2 to power 53
// 2. biging
// string -> ""
// boolean -> true/false
// null -> standalone value
// symbol -> uniquness


//object
// console.log(typeof null); ->> object 
// console.log(typeof undefined) --> undefined
// console.log(typeof(undefined)) --> same will come 


// CONVERSION 
// let score = "33ab" -->{NaN}
// let score = null --> {0}
// let score = undefined --> {NaN}
// let score = true --> {1}
// let valueInNumber = Number(score)   -->typecasting
// console.log(typeof(valueInNumber))  -->number
// console.log(valueInNumber)  --> NaN

//
// console.log("1" + 2); -->12
// console.log(1 + "2"); -->12
// console.log("1" + 2 + 2); -->122
// console.log(1 + 2 + "2"); -->32

//
// console.log(true) -->true
// console.log (+true) --> 1
// console.log(true+);  -->error
// console.log(+""); -->0

// let num1, num2, num3
// num1 = num2 = num3 = 3+3
// console.log(num2)

// comparison 

//  console.log("2" >1); -->true
//  console.log("02" >1); -->true

// console.log(null >0) -->true
// console.log(null == 0) -->fale
// console.log(null >= 0); -->true
// this is bcz equality check == and comaprisons ><= >= work differently 
// Comparison covert the null to a number, teating as 0

// strict check === aslo check datatype