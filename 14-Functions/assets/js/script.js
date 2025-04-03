// task1 

// let funksiya=(a,b,func) => {
//     if(func=="sum"){
//        return a+b
//     }
//     else if(func=="sub"){
//         return a-b
//     }
//     else if(func=="vurma"){
//         return a*b
//     }
//     else if (func=="bolme"){
//        return a/b
//     }
// }
// console.log(funksiya(3,5,"sum"));


// task 2
// let funksiya =(...num)=>{
//     let tek=[];
//     let cut=[];
//     for (let i = 0; i < num.length; i++) {
//         if(num[i]%2===0){
//            cut.push(num[i]);
//         }
//         else{
//             tek.push(num[i]);
//         }
//     }
//     console.log(cut);
//     console.log(tek);
// }
// funksiya(14, 20, 35, 40, 57, 60, 100);





// task 3
// let funksiya=(...num)=>{
//     let toplam=0
//     for (let i = 0; i < num.length; i++) {
//         if(num[i]%4==0 && num[i]%5==0){
//             toplam+=num[i];
//         }
//     }
//     return toplam;
// };
// console.log(funksiya(14, 20, 35, 40, 57, 60, 100));



// task 4
// let daxilOlunan=prompt("bir soz daxil edin");
// let SecilenSimvol=prompt("simvol secin");
// let funksiya=(num ,simvol)=>{
//     let say=0;
//     for (let i = 0; i < num.length; i++) {
//         if(num[i]=== simvol){
//             say++
//         }   
//     }
//     return say;
// };
// console.log("simvol:",funksiya(daxilOlunan,SecilenSimvol));







// task 5
// let daxilolunan = Number(prompt("Bir ədəd daxil edin:"));
// let funksiya = (eded) => {
//     let cemi = 0;
//     for (let i = 1; i < eded; i++) {
//         if (eded % i === 0) {  
//             cemi += i; 
//         }
//     }
//     if (cemi > eded) {
//         return `${eded} Abundant`;
//     } else{
//         return `${eded} Deficient`;
//     }
// };
// console.log(funksiya(daxilolunan));




// task 6
// let funksiya=(...num)=>{
//     let kvadrat=[];
//     for (let i = 0; i < num.length; i++) {
//         kvadrat.push(num[i]**2)
        
//     }
//     console.log(kvadrat);
// }
// funksiya(14, 20, 35, 40, 57, 60, 100);


// task 7
let users=[
    {name:"Cefer" , age:19},
    {name:"Qefer" , age:55},
    {name:"Sefer" , age:20},
    {name:"rafiq" , age:35},
]
let funksiya=()=>{
    let min =users[0].age;
    let max =users[0].age;
    let ferq =0;
    for (let i = 1; i < users.length; i++) {
        if(users[i].age<min){
            min=users[i].age
        }
        if(users[i].age>max){
            max=users[i].age
        }
        ferq=max-min
        return{min, max , ferq}
    }
}
console.log(funksiya());











