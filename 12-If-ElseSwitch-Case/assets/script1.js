let fesil="1=Qis\n2-Yaz\n3-Yay\n4-Payiz";
let oparation=Number(prompt("Fesil daxil edin"));
switch(oparation){
    case 1:
        alert("Dekabr\nYanvar\nFevral");
        break
    case 2:
        alert("Mart\nAprel\nMay");
        break
    case 3:
        alert("Iyun\nIyul\nAvgust");
        break
    case 4:
        alert("Sentyabr\nObtyabr\nNoyabr")
        break
    default:
        alert("Zehmet olmasa duzgun giris edin!")
}