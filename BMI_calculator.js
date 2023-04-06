const btnEl = document.getElementById("btn");
const resEl = document.getElementById("result");
const conditionEl = document.getElementById("condition");

function calculateBMI(){
    const heightValue = document.getElementById
    ("height").value/100;
    const weightValue = document.getElementById
    ("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);
    console.log(bmiValue)
   
    resEl.value = bmiValue;

    if(bmiValue < 18.5){
        conditionEl.innerText = "Under weight"
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        conditionEl.innerText = "Normal weight"
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9){
        conditionEl.innerText = "Overweight"
    }
    else if (bmiValue >= 30){
        conditionEl.innerText = "Obesity"
    }
}


btnEl.addEventListener("click", calculateBMI)