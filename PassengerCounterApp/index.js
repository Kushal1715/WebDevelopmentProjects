
let count = 0;

let incrementBtn = document.querySelector("#increment-btn");
let saveBtn = document.querySelector("#save-btn");

// incrementBtn.onclick = () => {
//     count += 1;
//     document.querySelector("#count").innerHTML = count;
// }

incrementBtn.addEventListener("click", increase);
saveBtn.addEventListener("click", save);

function increase(){
    count += 1;
    document.querySelector("#count").innerHTML = count;
}


function save(){
    document.querySelector("#save").innerHTML += count + "-";
    document.querySelector("#count").innerHTML = 0;
    count = 0;
}