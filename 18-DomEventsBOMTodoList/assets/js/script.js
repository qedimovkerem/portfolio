let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let equal=document.querySelector("#equal");


let sum =document.querySelector(".sum");
let sub=document.querySelector(".sub");
let multiple=document.querySelector(".multiple");
let division=document.querySelector(".division");


sum.addEventListener("click",()=>{
    if(num1.value!=0 &&num2.value!=0){
        equal.value=Number(num1.value)+Number(num2.value)
    }else{
        alert("iki nomre elave edin")
    }
    num1.value=""
    num2.value=""
});
sub.addEventListener("click",()=>{
    if(num1.value!=0 && num2.value!=0){
        equal.value=Number(num1.value)-Number(num2.value)
    }else{
        alert("iki nomre elave edin")
    }
    num1.value=""
    num2.value=""
});
multiple.addEventListener("click",()=>{
    if(num1.value!=0 &&num2.value!=0){
        equal.value=Number(num1.value)*Number(num2.value)
    }else{
        alert("iki nomre elave edin")
    }
    num1.value=""
    num2.value=""
});
division.addEventListener("click",()=>{
    if(num1.value!=0 &&num2.value!=0){
        equal.value=Number(num1.value)/Number(num2.value)
    }else if(num2.value==0){
        alert("sifira bolmek olmaz")
    }
    else{
        alert(" iki nomre elave edin")
    }

    num1.value=""
    num2.value=""
});