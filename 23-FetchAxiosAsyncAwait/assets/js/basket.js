document.addEventListener("DOMContentLoaded",()=>{
    let users=JSON.parse(localStorage.getItem("users"));
    let currentUser=users.find((user)=>user.islogined===true);
    if (!currentUser) {
        setTimeout(()=>{
            window.location.href="login.html"
        },2000)
        toast("Qeydiyyatdan kecin")
    }
    let userIde=users.findIndex((user)=>user.id==currentUser.id);
    let basket=currentUser.basket
    
    function createBasketItem() {
        let basketContainer=document.querySelector(".basket");
        basketContainer.innerHTML=""
        basket.forEach((product) => {
             let basketItem=document.createElement("div")
        basketItem.classList.add("basket-item")
        let image=document.createElement("div")
        image.classList.add("image")
        let img=document.createElement("img")
        img.src=product.image
        let title=document.createElement("h6")
        title.classList.add("title")
        title.textContent=product.title
        let category=document.createElement("p")
        category.classList.add("category")
        category.textContent=product.category
        let priceElem=document.createElement("p")
        priceElem.classList.add("price")
        priceElem.textContent=`$${newprices(product).toFixed(2)}`
        let countArea=document.createElement("div")
        countArea.classList.add("count-area")
        let minusBtn=document.createElement("button")
        minusBtn.classList.add("minus-btn")
        minusBtn.textContent="-"
        minusBtn.addEventListener("click",()=>decrement(product.id,countElem,minusBtn,priceElem));
        let countElem=document.createElement("p")
        countElem.classList.add("count")
        countElem.textContent=product.count
        let plusBtn=document.createElement("button")
        plusBtn.textContent="+"
        plusBtn.classList.add("plus-btn")
        plusBtn.addEventListener("click",()=>incerement(product.id,countElem,minusBtn,priceElem));
        let removeBtn=document.createElement("button")
        removeBtn.classList.add("btn","btn-danger")
        removeBtn.textContent="Remove"
        removeBtn.addEventListener("click",()=>removeProduct(product.id));

        countArea.append(minusBtn,countElem,plusBtn)
        image.appendChild(img)
        basketItem.append(image,title,category,priceElem,countArea,removeBtn)
        let basket=document.querySelector(".basket")
        basket.appendChild(basketItem)
        let allRemoveBtn=document.querySelector(".btn.btn-danger.all-remove")
        allRemoveBtn.addEventListener("click",()=>allRemoveProduct())
        }); 
    }

    function incerement(productId,countElem,minusBtn,priceElem) {
        let existProduct=basket.find((product)=>product.id== productId);
        if (existProduct.count) {
            existProduct.count++
            countElem.textContent=existProduct.count
            priceElem.textContent=`$${newprices(existProduct).toFixed(2)}`
            if (existProduct.count>1) {
                minusBtn.removeAttribute("disabled")
            }
            users[userIde].basket=currentUser.basket;
            localStorage.setItem("users",JSON.stringify(users));
        }
        totalPrice()
    }
    
    function decrement(productId,countElem,minusBtn,priceElem) {
        let existProduct=basket.find((product)=>product.id== productId);
        if (existProduct) {
            if (existProduct.count>1) {
                existProduct.count--
                countElem.textContent=existProduct.count
                priceElem.textContent=`$${newprices(existProduct).toFixed(2)}`
            }
            if (existProduct.count===1) {
                minusBtn.setAttribute("disabled","true")
            }
            users[userIde].basket=currentUser.basket;
            localStorage.setItem("users",JSON.stringify(users));
        }
        totalPrice()
    }
     function newprices(product){
            return product.price*product.count
          };
    function totalPrice() {
        let patmentCash=0;
        basket.forEach((product)=>{
            patmentCash+=product.count*product.price
        });
        let totalElement=document.querySelector(".total-price");
        totalElement.textContent=patmentCash.toFixed(2)
    }
    function removeProduct(productId) {
        let existProductIndex =basket.findIndex((product)=>product.id==productId);
        if (existProductIndex !== -1) {
            basket.splice(existProductIndex,1)
            users[userIde].basket=basket
            localStorage.setItem("users",JSON.stringify(users));
            toast("product silindi")
            let basketContainer = document.querySelector(".basket");
            basketContainer.innerHTML = "";
            createBasketItem()
            totalPrice()
        }
    }
    function allRemoveProduct(){
        if (basket.length===0) return
        basket=[];
        users[userIde].basket=basket;
        localStorage.setItem("users",JSON.stringify(users));
        let basketContainer = document.querySelector(".basket");
            basketContainer.innerHTML = "";
            createBasketItem()
            totalPrice()
            toast("Butun productlar silindi");
    }
    totalPrice()
    createBasketItem()
})

let toast=(text)=>{
    Toastify({
        text: `${text}`,
        duration: 2000,
        position: "right", 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
      }).showToast();
}