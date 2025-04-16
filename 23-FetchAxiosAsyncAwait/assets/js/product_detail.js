let products=[]
let url =new URLSearchParams(location.search);
let id =url.get("id");
async function getdata() {
  let result=await(await fetch("http://localhost:3000/products")).json();
  products=result
  console.log(products);

  
  let findProduct=products.find((product)=>product.id==id)
  let productContainer=document.querySelector(".product-container") 
  
  
  if (!findProduct) {
      productContainer.textContent="Product Not Found"
   }
  
  productContainer.innerHTML=`
    <div class="product-image">
            <img src="${findProduct.image}" alt="" class="img">
          </div>
          <div class="product-details">
            <h4 class="product-title">${findProduct.title}</h4>
            <p class="product-category">Category: ${findProduct.category}</p>
            <p class="product-price">$${findProduct.price}</p>
            <p class="product-description">${findProduct.description}</p>

            <div class="product-rating">
              <span>${findProduct.rating.rate}</span>
              <span>(${findProduct.rating.count}revius)</span>
            </div>

            <div class="quantity-selector">
              <button class="btn-minus">-</button>
              <p class="quantity-input">0</p>
              <button class="btn-plus">+</button>
            </div>
            <button class="btn btn-danger add-to-card">Add to Card</button>
          </div>
`

let basket = JSON.parse(localStorage.getItem("basket"))||[];

let users=JSON.parse(localStorage.getItem("users")) ||[];
    let currentUser=users.find((user)=>user.islogined==true);
    let btnDanger=document.querySelector(".add-to-card")
    btnDanger.addEventListener("click",()=>{
        addbasket(findProduct.id)
    })

let btnMinus =document.querySelector(".btn-minus")
btnMinus.addEventListener("click",()=>decrement(findProduct.id));

let btnPlus =document.querySelector(".btn-plus")
btnPlus.addEventListener("click",()=>increment(findProduct.id));
let quantityInput = document.querySelector(".quantity-input");

function decrement(productId) {
    let currentCount = parseInt(quantityInput.textContent) || 0;
    if (currentCount > 0) {
        currentCount--;
        quantityInput.textContent = currentCount;
    }
}

function increment(productId) {
    let currentCount = parseInt(quantityInput.textContent) || 0;
    currentCount++;
    quantityInput.textContent = currentCount;
}

function addbasket(productId) {
    let userIde=users.findIndex((user)=>user.id==currentUser.id);
    if (!currentUser) {
      toast("Qeydiyyaddan kecin");
      setTimeout(()=>{
          window.location.href="login.html"
      },2000)}
      let basket =currentUser.basket
   let findProductIndex=currentUser.basket.findIndex((product)=>product.id==productId);
   let productCount = parseInt(quantityInput.textContent);

   if (!productCount || productCount < 1) {
    toast("Zehmet olmasa miqdari seçin");
    return;
}

let basketProduct = basket.find(p => p.id === productId);

if (!basketProduct) {
    let product = products.find(p => p.id === productId);
    basket.push({ ...product, count: productCount });
} else {
    basketProduct.count += productCount;
}
toast("mehsul baskete elave olundu");
users[userIde].basket=currentUser.basket;
localStorage.setItem("users",JSON.stringify(users));
quantityInput.textContent = "0";

}
}

getdata()


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