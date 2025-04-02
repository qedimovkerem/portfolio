// task 2
let mode=0;
for (let i = 0; i <=10; i++) {
    console.log(`${i}`);
    for (let j=1; j<=10;j++){
        console.log(`${i}*${j} = ${i * j}`);
    }
    
}
// task 3
const users=[
    {name:"Kerem",age:25},
    {name:"Revan",age:34},
    {name:"Cefer",age:23},
    {name:"Hesen",age:33},
];

let boyuk=[];
let kicik=[];
for (let i=0; i<users.length;i++){
    if(users[i].age<30){
        kicik.push(users[i]);
    }else if(users[i].age>30){
        boyuk.push(users[i]);
    }
}
console.log("30-dan yasdan kicik olanlar:",kicik);
console.log("30-dan boyuk olanlar:",boyuk);

// task 4
let sum=0;
let count =1;
while (count <= 10) {
    let number =(prompt(`${count}-ci ədədi daxil edin:`));
    sum += number;
    count++;
}
let average= sum /10;
alert(average);