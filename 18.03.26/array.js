let arr=[1,2,3,4]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//push
arr.push(5)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//pop
arr.pop()
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//unshift
arr.unshift(5)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//shift 
arr.shift()
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//question (2-loop)
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[i] + arr1[j] == 5 && i < j) {
            console.log("(" + arr1[i] + " " + arr1[j] + ")");
        }
    }
}
console.log("\n")

//question (1-loop)
let arr2 = [1, 2, 3, 4, 5];
j=arr2.length-2
for(let i=0;i<arr2.length;i++){
    if(arr2[i]+arr2[j]==5 && i<j){
        console.log(arr2[i]+","+arr2[j])
    }
    j--
}

