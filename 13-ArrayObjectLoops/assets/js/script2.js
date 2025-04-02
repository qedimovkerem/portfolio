let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
// task 6

let max=arr[0]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max)
    arr[i]=max
}
console.log(max);

// task 7
let min = arr[0];
let maxx= 0;
let miny = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxx= i;
    }
    else if(arr[i] < min) {
        min = arr[i];
        miny = i;
    }
}
let deyis = arr[maxx];
arr[maxx] = arr[miny];
arr[miny] = deyis;
console.log(arr);

// task 8
let sum=0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==max && arr[i!==min]);
    sum += arr[i];
}
console.log(sum);

// task 9

let target = Number(prompt("Array-də olub-olmayan ədədi daxil edin:"));
let daxil = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true; 
        break;
    }
}
if (daxil) {
    console.log("Ədəd siyahida var");
} else {
    console.log("Ədəd siyahida yoxdur");
}

// task 10
let tekreqemli = 0;
let ikireqemli = 0;
let ucreqemli = 0;
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    
    if (num >= 0 && num < 10) {
        tekreqemli++; 
    } else if (num >= 10 && num < 100) {
        ikireqemli++;
    } else if (num >= 100 && num < 1000) {
        ucreqemli++;
    }
}
console.log(tekreqemli);
console.log(ikireqemli);
console.log(ucreqemli);

