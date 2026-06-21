// let a="5";
// let b=5;

// //comparison only by values

// console.log("5(string) == 5 ",a==b);//true
// console.log("5(string) != 5 ",a!=b);//false

// //Comparison by data types and values
// console.log("5(string) === 5 ",a===b);//false
// console.log("5(string) !== 5 ",a!==b);//true

//Conditional-Statement 

// let mode="dark";
// if(mode==="dark"){
//     console.log("color is black");
// }
// else{
// console.log("color is white");
// }

//Practice Question-->1 

let num=prompt("Enter a number");
if(num%5===0){
    console.log(num," It is a multiple of 5");
}
else{
    console.log(num," It is NOT a multiple of 5");
}

//Practice Question--> 2
let marks=prompt("Enter your marks");
let grade;

if(marks>=90 && marks<=100){
    grade='A';
}
else if(marks>=70){
    grade='B';
}
else if(marks>=60){
    grade='C';
}
else if(marks>=50){
    grade='D';
}
else{
    grade='E';
}
console.log("Your grade is ",grade);

