var inputs = document.querySelectorAll(".input-length");
var calculateAreaBtn = document.querySelector("#calculate-area-btn");
var outputDiv = document.querySelector("#output-div");

function calculateArea(base, height){
    var area = 0.5 * base * height;
    return area;
}

function displayArea(){
    if(inputs[0].value=="" || inputs[1].value==""){
        outputDiv.innerText = "Please enter both fields (in numbers)";
    }
    else{
        var area = calculateArea(Number(inputs[0].value), Number(inputs[1].value));
    outputDiv.innerText = "The area of triangle is " + area + "cm²";
    }
}

calculateAreaBtn.addEventListener("click", displayArea);