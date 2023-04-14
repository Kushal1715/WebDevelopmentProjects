var input = document.getElementById("input");
var saveBtn = document.getElementById("saveBtn");
var ul = document.getElementById("ul");
var deleteBtn = document.getElementById("deleteBtn");
var tabBtn = document.getElementById("tabBtn");
var links = [];

var linksFromLocalStorage = JSON.parse(localStorage.getItem("links"));

if(linksFromLocalStorage){
    links = linksFromLocalStorage;
    render(links);
}


saveBtn.addEventListener("click", function(){
    links.push(input.value);
    input.value = "";
    localStorage.setItem("links",JSON.stringify(links));
    render(links);
    // console.log(localStorage.getItem("links"));
})

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        links.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(links) )
        render(links)
    })

})

deleteBtn.addEventListener("click", function(){
    localStorage.clear();
    links = [];
    render(links);
})

function render(links){
    let strLinks = "";
    
    for(let i=0; i<links.length; i++){
        strLinks += `<li>
                        <a target='_blank' href='${links[i]}'>
                        ${links[i]}
                        </a>
                    </li>`;
    }
    ul.innerHTML = strLinks;
}