document.addEventListener("DOMContentLoaded",()=>{
    let users=JSON.parse(localStorage.getItem("users"));

    let loginUser=users.find((user)=>user.islogined==true);
    let login=document.querySelector(".login");
    let register=document.querySelector(".register");
    let logout=document.querySelector(".logout");
    let parametr=document.querySelector(".parametr")

    if (loginUser) {
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
        loginUser.islogined=false;
        localStorage.setItem("users",JSON.stringify(users))
        window.location.href = window.location.href;
    }
logout.addEventListener("click",logoutUser)
});