let products=[]

document.addEventListener("DOMContentLoaded",()=>{
    let users=JSON.parse(localStorage.getItem("users")) ||[];
    let currentUser=users.find((user)=>user.islogined==true);
    let login=document.querySelector(".login");
    let register=document.querySelector(".register");
    let logout=document.querySelector(".logout");
    let parametr=document.querySelector(".parametr")
    if (currentUser) {
      let userIde=users.findIndex((user)=>user.id==currentUser.id);
      let basket =currentUser.basket
        login.classList.add("d-none");
        register.classList.add("d-none");
        logout.classList.remove("d-none");
        parametr.classList.remove("d-none")
    }else{
        login.classList.remove("d-none");
        register.classList.remove("d-none");
        logout.classList.add("d-none");
        parametr.classList.add("d-none")
    }


    let logoutUser=()=>{
      toast("cixis olunur")
      setTimeout(()=>{
        currentUser.islogined=false;
      localStorage.setItem("users",JSON.stringify(users))
      window.location.reload()
      },2000)
  }
  // createUser()
logout.addEventListener("click",logoutUser);

      function createUser(){

        async function getdata() {
          let res=await axios("http://localhost:3000/products") 
          products=res.data;
          console.log(products);
          

          let cardsContainer = document.querySelector(".cards");

          cardsContainer.innerHTML = "";
      
       
        products.forEach(product => {
            let card=document.createElement("div")
            card.classList.add("card")
            card.style.cursor="pointer"
            card.addEventListener("click",()=>{
              window.location.href=`product_detail.html?id=${product.id}`
            })
            let cardIcon=document.createElement("i")
            cardIcon.classList.add("fa-regular","fa-heart","card-icon")
            if (currentUser && currentUser.wishlist.some(item => item.id === product.id)) {
              cardIcon.classList.add("fa-solid");
              cardIcon.style.color = "#ff9800";
          } else {
              cardIcon.classList.add("fa-regular");
          }
            cardIcon.addEventListener("click" ,(e)=>{
              e.stopPropagation(),
                toogleUserWishLish(product.id,cardIcon,products)
            })
            let cardImage=document.createElement("div")
            cardImage.classList.add("card-image")
            let image=document.createElement("img")
            image.src=`${product.image}`
            let cardContent=document.createElement("div")
            cardContent.classList.add("card-content")
            let cardTitle=document.createElement("h2")
            cardTitle.classList.add("card-title")
            cardTitle.textContent=`${product.title.slice(0,10)}`
            let cardCategory=document.createElement("p")
            cardCategory.classList.add("card-category")
            cardCategory.textContent=`${product.category}`
            let cardDescription=document.createElement("p")
            cardDescription.classList.add("card-description")
            let cardFotter=document.createElement("div")
            cardFotter.classList.add("card-footer")
            let cardPrice=document.createElement("span")
            cardPrice.classList.add("card-price")
            cardPrice.textContent=`$${product.price}`
            let cardRating=document.createElement("div")
            let rate=document.createElement("span")
            rate.classList.add("rate")
            rate.textContent=`${product.rating.rate}`
            let reviews=document.createElement("span")
            reviews.classList.add("rewiews")
            reviews.textContent=`${product.rating.count}`
            let basketBtn=document.createElement("button")
            basketBtn.classList.add("btn","btn-primary")
            basketBtn.textContent="add Basket"
            basketBtn.addEventListener("click",(e)=> {
              e.stopPropagation(),
            addbasket(product.id ,products)
          }) 
     
            cardRating.append(rate,reviews)
            cardFotter.append(cardPrice,cardRating)
            cardContent.append(cardTitle,cardCategory,cardDescription,cardFotter)
            cardImage.append(image,cardIcon)
            card.append(cardImage,cardContent,basketBtn)
            let cards=document.querySelector(".cards")
            cards.appendChild(card)
    });
      }
      getdata()
      
    }
      function toogleUserWishLish(productId,cardIcon,products){
        let userIde=users.findIndex((user)=>user.id==currentUser.id);
        if (!currentUser) {
            toast("Qeydiyyaddan kecin");
            setTimeout(()=>{
                window.location.href="login.html"
            },2000)
        }
        let currentProduct =currentUser.wishlist.some((item)=>item.id ===productId);
        if (currentProduct) {
            let currentProductIndex=currentUser.wishlist.findIndex((product)=>product.id==productId);
            currentUser.wishlist.splice(currentProductIndex,1);
            users[userIde].wishlist=currentUser.wishlist
            localStorage.setItem("users",JSON.stringify(users));
            cardIcon.classList.add("fa-regular");
            cardIcon.classList.remove("fa-solid");
            toast("product silindi");
        }else{
            let addProduct=products.find((product)=>product.id==productId);
            currentUser.wishlist.push(addProduct);
            localStorage.setItem("users",JSON.stringify(users));
            toast("product elave olundu");
            cardIcon.classList.remove("fa-regular");
            cardIcon.classList.add("fa-solid");
            cardIcon.style.color="#ff9800"
        }
      }

      function addbasket(productId,products) {
        let userIde=users.findIndex((user)=>user.id==currentUser.id);
        if (!currentUser) {
          toast("Qeydiyyaddan kecin");
          setTimeout(()=>{
              window.location.href="login.html"
          },2000)}
          let basket =currentUser.basket
       let findProductIndex=currentUser.basket.findIndex((product)=>product.id==productId);
       let exsistProduct=basket.find((elem)=>elem.id==productId)
       if (!exsistProduct) {
        let product =products.find((item)=>item.id ==productId)
        basket.push({...product,count:1});
       }else{
        exsistProduct.count++;
       }
       toast("mehsul baskete elave olundu");
       users[userIde].basket=currentUser.basket;
       localStorage.setItem("users",JSON.stringify(users));
       basketCount()
      }


      function basketCount() {
        let result=currentUser.basket.reduce((acc,product)=>acc+product.count,0);
        let countIcon=document.querySelector(".basketIcon sup");
        countIcon.textContent=result
      }
      basketCount()
      createUser()
});




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
