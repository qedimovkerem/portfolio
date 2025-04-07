// ?  task 1
// let str="I am frontend DEVELOPER I LEARN Javascript";
// let funksiya=(str)=>{
//     let sait="aıeəioüuö";
//     let say=[]
//     for (let i = 0; i < str.length; i++) {
//         if(sait.includes(str[i])){
//             say.push(str[i]);
//         }
//     }
//     return say;
// }
// let result=funksiya(str);
// console.log(result);

// ? task 2
// let funksiya=(str)=>{
//     str=str.split(" ");
//     return str   
// }
// let result=funksiya(str);
// console.log(result.length);

// ? task 3
// let funksiya =str.split(" ").reduce((uzunluq,soz)=>{
//         if(soz.length>uzunluq.length){
//             return soz
//         }else{
//             return uzunluq
//         }
// })
// console.log(funksiya);

// ? task 4
// debugger 
// let funksiya=(str) => {
//     let soz =[];
//     str.split(" ").forEach((str) =>{
//          if(str===str.toUpperCase()){
//              soz.push(str);
//          }
//     });
//     return soz 
// };
// console.log(funksiya(str));

// ?task 5 

// let funksiya=(str)=>{
//     let soz=[];
//     str.split(" ").forEach((str) =>{
//         let BoyukHerf=0
//         for (let i = 0; i < str.length; i++) {
//                  if(str[i]===str[i].toUpperCase()){
//                       BoyukHerf++
//                  }
//                 }
//              if(BoyukHerf>=2){
//                 soz.push(str);
//              }
//             });
//                 return soz
//     }
// console.log(funksiya(str));

//? task 6

// let funksiya=()=>{
//     let soz=[];
//     str.split(" ").forEach((str)=> {
//         if(str.length>0){
//             soz+=str[0];
//         }  
//         })
//     return soz
// }
// console.log(funksiya(str));

// ? task 7 
// debugger
// let funksiya = (str)=>{
//     let soz=[];
//     str.split(" ").forEach((str) => {
//         if(str.length<=4){
//             soz.push(str);
//         }else if(str.length>4){
//                 let soz1=(str[0])+(str.length-2)+str[str.length-1];
//                 soz.push(soz1);
//             }
//         });
//         return soz.join(" ");
//     };
// console.log(funksiya(str));


//! Array methods

// ? task 1
// debugger
// let arr=[1,2,3,4,4,5,6,7,7,7,8,9];

// let funksiya=(arr)=>{
//     return arr =[...new Set(arr)]
// }
// console.log(funksiya(arr));


// ? task 2

// let soz=prompt("soz daxil edin");
// let funksiya=(soz)=>{
//     let soz1=soz.split("").reverse().join("")
//     if(soz===soz1){
//         return("polindrom sozdur");
//     }
//     else{
//         return("polindrom soz deyil");
//     }
// }
// console.log(funksiya(soz));


// ? task 3
// let DaxilEdilenReqem=prompt("reqem daxil edin");
// let arr=[1,2,3,4,5,6,7,8];
// let funksiya=()=>{
//     let say=0;
//     arr=arr.filter((reqem)=> {
//         if(reqem<DaxilEdilenReqem){
//         say++
//         }
//     });
//     return say
// }
// console.log(funksiya());


// ?task 4

// const customers = [
//     { name: "Tyrone", personal: { age: 33, hobbies: ["Bicycling", "Camping"],},},
//     {  name: "Elizabeth",personal: {age: 25,hobbies: ["Guitar", "Reading", "Gardening"], },},
//     {name: "Penny",personal: { age: 36, hobbies: ["Comics", "Chess", "Legos"], },},
//   ];
// let funksiya=()=>{
//     let arr=[];
//     let hobby=customers.reduce((acc,customer)=>{
//         return acc.concat(customer.personal.hobbies);
//     },arr);
//     return hobby
// }
// console.log(funksiya());

// ? task 5
let funksiya=()=>{
let uzunluq = 6;
let arr = [];
for (let i = 0; i < uzunluq; i++) {
    arr.push(Math.floor(Math.random() * 100));
};
let cem = arr.reduce((acc, num) => acc + num, 0);
let orta = cem / arr.length;
let kvadrat = arr.map(num => Math.pow(num, 2));
let kicik = Math.min(...arr);
let boyuk = Math.max(...arr);
return{arr:arr,kicik:kicik,boyuk:boyuk, orta:orta,cem:cem,kvadrat:kvadrat}
};
let result=funksiya()
console.log("arr:", result.arr);
console.log("en kicik eded:", result.kicik);
console.log("en boyuk eded:", result.boyuk);
console.log("orta:", result.orta);
console.log("cem:", result.cem);
console.log("ededlerin kvadrati:", result.kvadrat);




