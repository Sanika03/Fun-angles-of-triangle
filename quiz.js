var quizForm = document.querySelector(".quiz-form");
var submitAnsBtn = document.querySelector("#submit-ans-btn");
var outputDiv = document.querySelector("#output-div");

var correctAnswers = ["90°","acute", "right-angled", "isosceles", "acute-angled", "isosceles", "65°", "false", "45°", "scalene"];

function checkAnswers(){
    let score = 0;
    let index = 0;
    var formAnswers = new FormData(quizForm);
    for(let value of formAnswers.values()){
        if(value == correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputDiv.innerText = "Your score is " + score;
}

submitAnsBtn.addEventListener("click", checkAnswers);