let card=document.createElement("div")
card.classList.add("card")
card.style.width="500px"
card.style.height="750px"
card.style.margin="200px"
card.style.border="1px solid bisque"
card.style.borderTopRightRadius="10px"
card.style.borderTopLeftRadius="10px"
card.style.position="relative"
let image=document.createElement("img")
image.setAttribute("src","assets/image/AdobeStock_209124760.jpg")
image.setAttribute("width","500px")
image.setAttribute("height","300px")
image.style.borderTopRightRadius="10px"
image.style.borderTopLeftRadius="10px"
image.style.position="relative"
let imageicon=document.createElement("i")
imageicon.setAttribute("class","fa-regular fa-heart")
imageicon.style.position="absolute"
imageicon.style.left="450px"
imageicon.style.top="20px"
imageicon.style.color="#fff"
let cardContent=document.createElement("div")
cardContent.classList.add("cardcontent")
cardContent.style.margin="20px"
let container=document.createElement("div")
container.style.width="220px"
let cardHead=document.createElement("div")
cardHead.classList.add("cardhead")
let span=document.createElement("span")
span.textContent="Detached house .5y old"
span.style.fontSize="18px"
span.style.textTransform="uppercase"
span.style.fontWeight="bold"
span.style.color="#686868"
let price=document.createElement("h1")
price.classList.add("cardprice")
price.textContent="$750,000"
price.style.fontSize="30px"
let terrace=document.createElement("p")
terrace.classList.add("terrase")
terrace.textContent="742 evergreen terrace"
terrace.style.textTransform="capitalize"
terrace.style.color="#a0a0a0"
terrace.style.fontSize="18px"






let icons=document.createElement("div")
icons.classList.add("icons")
icons.style.borderBottom="1px solid black"
icons.style.borderTop="1px solid black"
icons.style.display="flex"
icons.style.alignItems="center"
icons.style.gap="150px"
icons.style.height="100px"


let icon1=document.createElement("div")
icon1.style.display="flex"
icon1.style.gap="10px"
icon1.style.margin="20px"
let bedroomsicon=document.createElement("i")
bedroomsicon.setAttribute("class","fa-solid fa-bed")
bedroomsicon.style.color="#a0a0a0"
let spanWord=document.createElement("span")
spanWord.classList.add("spanword")
spanWord.textContent="3"
spanWord.style.fontWeight="bold"
spanWord.style.fontSize="18px"
let bed=document.createElement("span")
bed.textContent="Bedrooms"
bed.style.fontSize="18px"
bed.style.color="#a0a0a0"


let icon2=document.createElement("div")
icon2.style.display="flex"
icon2.style.gap="10px"
let bathroomsIcon=document.createElement("i")
bathroomsIcon.setAttribute("class","fa-solid fa-bath")
bathroomsIcon.style.color="#a0a0a0"
let spanWord1=document.createElement("span")
spanWord1.classList.add("spanword")
spanWord1.textContent="2"
spanWord1.style.fontSize="18px"
spanWord1.style.fontWeight="bold"
let bath=document.createElement("span")
bath.textContent="Bathrooms"
bath.style.fontSize="18px"
bath.style.color="#a0a0a0"








let realtor=document.createElement("div")
realtor.style.display="flex"
realtor.style.flexDirection="column"
realtor.style.backgroundColor="#cdcdcd"
realtor.style.height="170px"
let h3=document.createElement("h3")
h3.textContent="relator"
h3.style.textTransform="uppercase"
h3.style.color="#a0a0a0"
h3.style.margin="20px"


let foot =document.createElement("div")
foot.style.display="flex"
foot.style.gap="20px"
let headimg=document.createElement("div")
headimg.style.width="100px"
headimg.style.height="90px"
headimg.style.marginLeft="20px"
let footimg=document.createElement("img")
footimg.setAttribute("src","assets/image/highly-sensitive-person-signs.jpeg")
footimg.setAttribute("width","100%")
footimg.setAttribute("height","100%")
footimg.style.borderRadius ="50%"
let username=document.createElement("div")
let name=document.createElement("p")
name.textContent="Tiffany Henffner"
let phone=document.createElement("p")
phone.textContent="(555) 555-4321"


username.append(name,phone);
foot.append(headimg,username);
headimg.append(footimg)
realtor.append(h3,foot);


icon1.append(bedroomsicon,spanWord,bed);
icon2.append(bathroomsIcon,spanWord1,bath);
icons.append(icon1,icon2);

cardHead.append(span,price ,terrace);
container.append(cardHead);
cardContent.append(container);

card.append(image,imageicon,cardContent,icons,realtor);
let body=document.querySelector("body")
body.append(card);
console.log(card);
