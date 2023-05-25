const quesAns = [
    {
        'que':'What is the full form of CSS?',
        'a':'Cascading Sheets for Styling',
        'b':'Computer Style Software',
        'c':'Cascading Style Sheet',
        'd':'Cascading Sheet Style',
        'correct':'c'
    },
    {
        'que':'Who is the father of Computer?',
        'a':'Charles Babbage',
        'b':'John Abraham',
        'c':'Jude Bellingham',
        'd':'Peter Hamster',
        'correct':'a'
    },

]

let index = 0;
let right = 0;
let wrong = 0;
let total = quesAns.length;
let question = document.querySelector("#question");
let options = document.querySelectorAll(".options");
let button = document.querySelector("#button");
let correctAns = document.querySelector("#correctAns");

button.addEventListener("click",function(){
    let answer = quesAns[index].correct;
    let checkedAns = checkAns();

    if(answer == checkedAns){
        right ++;
    }

    index++;
    display();
})

display();

function display(){
    if(quesAns.length == index){
        end();
    }
    else{
    reset();

    }
    question.innerHTML = `${index + 1}. ${quesAns[index].que}`
    options[0].nextElementSibling.innerText = quesAns[index].a;
    options[1].nextElementSibling.innerText = quesAns[index].b;
    options[2].nextElementSibling.innerText = quesAns[index].c;
    options[3].nextElementSibling.innerText = quesAns[index].d;
}

function reset(){
    options.forEach((input) => {
        input.checked = false;
    })
}

function checkAns(){
    let ans;
    options.forEach((input) => {
        if(input.checked){
            ans = input.value;
        }
    })
    return ans;
}

function end(){
    let box = document.getElementById("box");
    box.innerHTML = 
    `<div style="text-align:center">
    <h3>Thank you for completing the Quiz</h3>
    <h2> Result: ${right} / ${total}</h2>`
}


