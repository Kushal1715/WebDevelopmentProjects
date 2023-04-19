
let thumb1 = document.querySelector(".thumb1");
let thumb2 = document.querySelector(".thumb2");
let thumb3 = document.querySelector(".thumb3");
let starbucks = document.querySelector(".starbucks");
let circle = document.querySelector(".circle");

changeColor(thumb1,"img1","#017143");
changeColor(thumb2,"img2","#eb7495");
changeColor(thumb3,"img3","#d752b1");

function changeColor(thumb,image,colorTag){
    thumb.addEventListener("click",()=>{
    starbucks.src = `images/${image}.png`;
    circle.style.background = colorTag;
    })
}




