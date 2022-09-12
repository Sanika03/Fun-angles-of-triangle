var inputs = document.querySelectorAll(".input-length");
var calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
var outputDiv = document.querySelector("#output-div");

function calculatesumOfSquares(a, b){
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    if(inputs[0].value=="" || inputs[1].value==""){
        outputDiv.innerText = "Please enter both fields (in numbers)";
    }
    else{
        var sumOfSquares = calculatesumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
        var hypotenuse = Math.sqrt(sumOfSquares);
        outputDiv.innerText = "The length of Hypotenuse is " + hypotenuse;
    }
}

calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);