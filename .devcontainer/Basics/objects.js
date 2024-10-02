//Singleton  {conturctor} Object.create  
// Two ways are there 1. consturctor and 2, literals 
// # by default key is considered as string
// We can get by . dot or []bracket but key should be in string form --> ['key']
// if you explicity declare the key as space between the word "key name" --> you cant access that key by .dot you have to use [ 'key']

const mySym = Symbol("key");
// const tinderUser = new Object(); //singleton 
// const tinderUser = {};
// obj={
//     name:"Govind",
//     class:12,
//     "site branch": "CSE",
//     mySym:"mykey"
// }
obj2={
    name:"Govind",
    class:12,
    "site branch": "CSE",
    [mySym]:"mykey"
}
// console.log(obj["site branch"])
// console.log(obj.mySym)
// console.log(obj2)
// console.log(typeof(obj.mySym))
// console.log(typeof(obj2[mySym]))

// want to not manupulate the obj then use - Object.freeze(objName)
// Object.freeze(obj2)

// const obj1 = {1:"a", 2: "b"};
// const obj2 = {3:"a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);   // prefer like this obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}; // spread
// console.log(obj3)

// console.log(Object.keys(obj2)); // it will return the array of all keys
// console.log(Object.values(obj2));
console.log(Object.entries(obj2)); // array of arrays , every key value will become array
console.log(obj2.hasOwnProperty('class'));


// Immediately Invoked Function Expression (IIFE)
// ((name)=>{
//     console.log(`Here is my name ${name}`)
// })("Govind");


//************Java Execution Context****************** */
//  Js is single Threaded....
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context
// Two phases are there to run js code 
// 1. Memory Creation phases -->variable get places not excuted here.
// 2. Execution phase


// falsey value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false', " ", [], {}, function(){} //empety function

// checking empety array 
// if(arry_name.length === ){}

// cheking empety object 
// if(Object.keys(objName).length === 0){}

// false == 0
// false == ''
// 0 == ''
//  all give result true 

// Nullish Coalescing Operator (??) : null undefined 
// let val ;
// val = 5 ?? 4;
// val1 = null ?? 10
// val1 = undefined ?? 14
// val1 = null ?? 10 ?? 20 

//**************************MAPS ************************** */
// These are unique dublicate value will not consider , it will accept but not show 
// Order will maintained

const map = new Map();
map.set('name', 'Govind Jaiswal');
map.set('moNo.',9453989414);
map.set('address','H-146-147 Novel Patterns')
console.log(map)
for(const key of map){
    console.log(key)//it will print array of each (key, value)
}
for(const [key,value] of map){
    console.log(`${key} , ${value}`)
}
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'SpiderMan'
// }
const myObj = {
    game1: 'NFS',
    game2: 'SpiderMan'
}
// in both case object is not itterable 

// for(const [key, value] of myObject){ 
//     console.log(key, ':-', value); //error object is 
// }

// for in loop --> for objects 
for(const key in myObj){
    console.log(key)
    console.log(myObj[key])
}

// For Array forEach is there where it will take a call back funtion in the 3 things 
// 1. item 2. index 3. whole array
let arry = ['abc', 'def', 'klm']
arry.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// foreach not return anything ot will give undefine

//************Filter ***************** */
// it will return an new array 
//************MAP********** */
// it will modify the original array and then return the new array 

//***********REDUCE**************** */
// it will return reduced value
// let nynum = [1,3,4,5]
// let newVal = nynum.reduce((acc,currv)=>{
//     return acc+currv;
// }, 30)
// console.log(newVal)