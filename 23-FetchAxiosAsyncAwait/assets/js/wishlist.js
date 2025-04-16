document.addEventListener("DOMContentLoaded",()=>{
    let users =JSON.parse(localStorage.getItem("users"))||[];

    let currentUser=users.find((user)=>user.islogined==true);

    if (!currentUser) {
        setTimeout(()=>{
            window.location.href="register.html"
        },2000)
        toast("Qeydiyyatdan kecin")
    }
    let userWishlist=currentUser.wishlist

    function createWishlistItem(product) {

        userWishlist.forEach(item => {
            let wishlistItem=document.createElement("div")
            wishlistItem.classList.add("wishlist-item")
            let image=document.createElement("div")
            image.classList.add("image")
            let img=document.createElement("img")
            img.src=`${item.image}`
            let title=document.createElement("h5")
            title.classList.add("title")
            title.textContent=`${item.title.slice(0,30)}...`
            let category=document.createElement("p")
            category.classList.add("category")
            let price=document.createElement("p")
            price.classList.add("price")
            let btn=document.createElement("button")
            btn.classList.add("btn","btn-danger")
            btn.textContent="remove"
            btn.addEventListener("click",()=>{
                removeProduct(item.id);
            })
        
            image.appendChild(img)
            wishlistItem.append(image,title,category,price,btn)
            let wishlist=document.querySelector(".wishlist")
            wishlist.appendChild(wishlistItem)
        });
    }

    function removeProduct(productId) {
        let userIndex =users.findIndex((user)=>user.id==currentUser.id);
        let productIndex=currentUser.wishlist.findIndex(
            (product)=>product.id==productId
        );
        if (productIndex !==-1) {
            currentUser.wishlist.splice(productIndex,1);
            users[userIndex]=currentUser,
            localStorage.setItem("users",JSON.stringify(users));
            toast("productdan silindi")
            window.location.href=window.location.href
        }
    }
    createWishlistItem()
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