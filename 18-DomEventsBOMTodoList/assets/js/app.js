let form =document.querySelector("form");
let input=document.querySelector("#input");
let list =document.querySelector(".list");
let deleteAll=document.querySelector(".delete_all")
deleteAll.addEventListener("click",(e)=>{
    let parent=list.querySelectorAll(".list_item")
    parent.forEach(item=>{
        item.remove();
    });
})

let todoNum =0;
form.addEventListener("submit",createTodo);

function createTodo(e){
    e.preventDefault();

    todoNum++

    let li =document.createElement("li");
    li.classList.add("list_item");
    li.style.backgroundColor="red"

    let span=document.createElement("span");
    span.classList.add("task");
    span.textContent= input.value;

    let setting=document.createElement("div");
    setting.classList. add("setting");

    let deleteIcon =document.createElement("i");
    deleteIcon.classList.add("fa-solid","fa-trash")
    deleteIcon.addEventListener("click" ,(e)=>{
        let parent=e.target.closest(".list_item");
        parent.remove();
    })
    deleteIcon.style.display="none"

    let editIcon =document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pencil");
    editIcon.addEventListener("click",(e)=>{
        let parent=e.target.closest(".list_item");
        let currentText=parent.querySelector(".task")
        let newText=prompt("edit text",currentText.textContent);
        currentText.textContent=newText
    })

    let tamamIcon=document.createElement("i");
    tamamIcon.classList.add("fa-solid","fa-check");
    tamamIcon.addEventListener("click",()=>{
        if(li.classList.contains("complated")){
            li.classList.remove("completed");
            span.style.textDecoration="none"
            li.style.backgroundColor="red"
        }else{
            li.classList.add("completed");
            span.style.textDecoration="line-through"
            li.style.backgroundColor="green"
            deleteIcon.style.display="inline-block"
        }
    })

    let SpanNum = document.createElement("span");
    SpanNum.classList.add("num");
    SpanNum.textContent = `${todoNum}`;

    setting.append(deleteIcon,editIcon,tamamIcon);
    li.append(SpanNum,span,setting)
    list.appendChild(li)

    input.value=""
}