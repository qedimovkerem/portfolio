let yanacaqinnovu ="1-Dizel\n 2-Benzin \n 3-premium";
let oparation=Number(prompt(yanacaqinnovu));
let dizel =Number(0.9);
let benzin= Number(1);
let premium= Number(1.5);
let litr =prompt("yanacaqin litrini qeyd edin");
let pul=prompt("pulunuzu qeyd edin");
switch (oparation) {
    case 1:
        let miqdar1= dizel*=litr;
        if(miqdar1<=pul){
        let qaliqpul= pul-=miqdar1;
        alert(`yanacaqin miqdari ${miqdar1} litr,qaliqpul ${qaliqpul}manat`)
        }else{
            alert(`sizin kifayet qeder pulunuz yoxdur,catismayan pul ${miqdar1-=pul} manat`)
        }break
    case 2:
        let miqdar2= benzin*=litr;
        if(miqdar2<=pul){
           let qaliqpul= pul-=miqdar2;
           alert(`yanacaqin miqdari ${miqdar2} litr,qaliqpul ${qaliqpul}manat`)
           }else{
               alert(`sizin kifayet qeder pulunuz yoxdur,catismayan pul ${miqdar2-=pul} manat`)
           }break
    case 3:
        let miqdar3= premium*=litr;
        if(miqdar3<=pul){
           let qaliqpul= pul-=miqdar3;
           alert(`yanacaqin miqdari ${miqdar3} litr,qaliqpul ${qaliqpul}manat`)
           }else{
               alert(`sizin kifayet qeder pulunuz yoxdur,catismayan pul ${miqdar3-=pul} manat`)
           }break

           default:
           alert("Zehmet olmasa duzgun giris edin");
           break
}

