// --> we can use 1. node.js 2. Deno for giving the environment 
console.log("Hii Everyone !!!")
var a="Govind"
let k=3434;
const p =2;
t=343
//another way of printing the values
console.table([a,k,p,t])

// (7) primitive data type -->call by value -->stack memory used (copied value)
// 1. number -> 2 to power 53
// 2. bigint  -> let bigNumber =8767856567576576n
// string -> ""
// boolean -> true/false
// null -> standalone value
// symbol -> uniquness
//undefined

// Refrence type   -->heap  memory used (refence of original )-->call by reference b--> all refrence datatype is object
// const myFunction = function(){
//     console.log("iiiiiiiiii")
// }
//object , Array, Functions
// console.log(typeof null); ->> object 
// console.log(typeof undefined) --> undefined
// console.log(typeof(undefined)) --> same will come 
//condole.log(typeof(myFunction)) --> funtion {called object funtion}

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

// String Methods
// 1. Substring can't give negative no
// 2. Slice we can give negative then it will start fraom back

// let str ="Govind"
// console.log(str.substring(-3,5));
// console.log(str.slice(-3,7))
// let score = 333;
// let score2 = new Number(300);
// console.log(score2) ==>[Number: 300]

// toFixed, toPrecision
// toLocaleString('en-IN') defaut is US based, 

// ***********************maths********************************
// abs, round,  ceil , floor , random [0-1], 

//***************Arrays******************* */
// splice , slice , spred, isArray
// If we want to make the singel array  flat(deepth) 
// let ary= [1,2,3,[4,5,6],7,8,[9,10,[11,12,[13,23]]]]
// console.log(ary.flat(2))
// console.log(ary.flat(Infinity))

// convert into array anything
console.log(Array.from("Govind"))
// if cant convert then return empty array
// console.log(Array.from({name:"Govind"})) have to tell whether key or value have to convert?
// from many variable creating array 
let s1 = 2;
let s2 = 3;
let s3 = "modified"
console.log(Array.of(s1,s2,s3)) --> [2, 3, 'modified']