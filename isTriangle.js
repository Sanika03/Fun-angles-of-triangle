var angleInputs = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle-btn");
var outputDiv = document.querySelector("#output-div");

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function checkIsTriangle(){
    if(angleInputs[0].value=="" || angleInputs[1].value=="" || angleInputs[2].value=="")
    {
        outputDiv.innerText = "Please enter all fields (in numbers)";
    }
    else{
        var sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
        if(sumOfAngles == 180){
            outputDiv.innerText = "Yay! The angles form a triangle 🎉"
        }
        else {
            outputDiv.innerText = "Oh no! The angles don't form a triangle ☹️";
        }
    }
}

isTriangleBtn.addEventListener("click", checkIsTriangle);