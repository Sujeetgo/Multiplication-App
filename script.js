const num1 = Math.ceil(Math.random()*50);
const num2 = Math.ceil(Math.random()*50);

const questionEl = document.getElementById("question");
questionEl.innerText = `what is ${num1} multiply by ${num2}?`;

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");
const correctAns = num1*num2;

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns==correctAns){
        score++
        updatelocatStorage()
    }
    else{
        score--
        updatelocatStorage()
    }
});

function updatelocatStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
