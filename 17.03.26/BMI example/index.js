function CalculateBMI(){
    var weight = parseFloat(document.getElementById("weight").value)
    var height = parseFloat(document.getElementById("height").value)

    if(!height || !weight){
        alert("No Values Provided");
    }

    const bmi=weight / ((height/100)**2);
    let result="";
    if(bmi<18.5) result="UnderWeight";
    else if(bmi>=18.5 && bmi<24.5) result="Normal";
    else if(bmi>=24.5 && bmi<30) result="OverWeight";
    else if(bmi>=30) result="Obese";

    document.getElementById("output").innerText =
        `Your BMI is ${bmi.toFixed(2)} (${result})`;
}