//Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

console.log("\n");
//Function Expression
let add1 = function(a, b) {
    return a + b;
};
console.log(add1(2, 3));

console.log("\n");
//Arrow Function
let add2 = (a, b) => a + b;
console.log(add2(2, 3));

// //Anonymous Function
// setTimeout(function() {
//     console.log("Hello");
// }, 1000);

console.log("\n");
//Default Parameter
function getEmployee(eName='USER', empID=0){
    console.log(`Employee ${eName}'s ID is ${empID}`)
}

getEmployee("Golu", 101);
getEmployee(undefined, 101);
getEmployee("Golu", undefined);
getEmployee(undefined, undefined);
getEmployee()

console.log("\n");
//Call Back Function
function add3(a,b){
    return a+b;
}

function add4(a,b){
    return a+b;
}

let callbackk=add3(add4(2,4),5);
console.log(callbackk);

console.log("\n");
//Self Invoke Function
(function print(){
    console.log("Printing");
})();

console.log("\n");
//Closure Function
function outerfunc(){
    let x="This is Outer Function"
    function innerfunc(){
        return x;
    }
    return innerfunc;
}

let inner=outerfunc();
console.log(inner());

console.log("\n");
//Generator Function
function* Generatorfn(){
    yield "Hii";
    yield "Hemloo";
    yield 20;
    yield null;
}

let gen=Generatorfn();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log("\n");

gen=Generatorfn();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log("\n");