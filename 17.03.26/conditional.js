const prompt = require("prompt-sync")();
let gender=prompt("Enter gender: ");
let age=prompt("Enter ur age: ");

if((gender=="boy") && (age>18)){
    console.log("its a boy & he is above 18");
}
else if((gender=="girl")&&(age>18)){
    console.log("its a girl & she is above 18");
}
else{
    console.log("enter correct gender");
}

let day=prompt("Enter day: ");

switch(day){
    case "monday" : 
        console.log("monday"); 
        break;
    case "tuesday" : 
        console.log("tuesday"); 
        break;
    case "wednesday" : 
        console.log("wednesday"); 
        break;
    case "thursday" : 
        console.log("thrusday"); 
        break;
    case "friday" : 
        console.log("friday"); 
        break;
    case "saturday" : 
        console.log("saturday"); 
        break;
    case "sunday" : 
        console.log("sunday"); 
        break;
}

var Employee="EMPID001";

console.log(Employee || "EMPID0X")

console.log(10==="10");
console.log(10=="10");