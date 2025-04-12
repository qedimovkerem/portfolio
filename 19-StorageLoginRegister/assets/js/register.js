document.addEventListener("DOMContentLoaded",()=>{
    let form=document.querySelector("form");
    let name=document.querySelector("#name");
    let username=document.querySelector("#username");
    let email=document.querySelector("#email");
    let password=document.querySelector("#password");
    let confirmPassword=document.querySelector("#confirmpassword");
    let passwordCheck=document.querySelector(".password_check")
    let users= JSON.parse(localStorage.getItem("users"))||[];
form.addEventListener("submit" ,register)
    function register(e){
        e.preventDefault();

        if (name.value.trim() === "" || username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confirmPassword.value.trim() === "") {
            toast("butun inputlari doldurun");
            return;
        }



        let uniqueUser=users.some((user) => user.username==username.value || user.email==email.value);
        let id=uuidv4();
        if (!uniqueUser) {
            let newUser={
                name:name.value,
                username:username.value,
                email:email.value,
                password:password.value,
                confirmPassword:confirmPassword.value,
                islogined:false,
                id,
            };
          confirmPassword.value==password.value
          ?email.value.endsWith("@gmail.com")
          ?username.value.length >=3
          ?username.value.length<=20
          ?/[A-Z]/.test(username.value)&& /[a-z]/.test(username.value)&&/[_-]/.test(username.value)
          ?password.value.length >= 8
          ?/[A-Z]/.test(password.value)&& /[a-z]/.test(password.value)&&/[@#$%&]/.test(password.value)
          ?(
          users.push(newUser),
          localStorage.setItem("users",JSON.stringify(users)),
          toast("giris qeyde alindi"),
          setTimeout(()=>{
              window.location.href="login.html"
          },2000)
        ) :toast("passworda boyuk herf , kicik herf ve xususi simvol olmaidi")
         :toast("password min 8 simvol olmalidir")
         :toast("usernamede yalniz elifba, reqem, alt xett və tire istifade oluna biler")
         :toast("username maxsimum 20 simvol ola biler")
         :toast("username minimum 3 simvol olmalidi")
            :toast("email @gmail.com ile bitmelidir.")
          :toast("password ve confirmpassword eyni deyil")
        }else{
            toast("qeydiyyatdan daha  once kecmisiniz")
        }
    }
    password.addEventListener("input", ()=>{
        let passwordCheck=document.querySelector(".password_check");
        let passwordIcon=document.querySelector("i")
        if (!passwordIcon) return;
        if (password.value.length<7 &&password.value.length>=0) {
            passwordIcon.style.color="red"
            passwordCheck.classList.remove("d-none")
        }else{
            passwordIcon.style.color="green"
            passwordCheck.classList.remove("d-none")
        }
    })
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