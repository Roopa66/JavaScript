// function logger(){
//     console.log("hi buddy");
// }
// logger();
// logger();

function fruitProcessor(num1, num2){
    console.log(num1,num2);
    const juice =`juice with ${num1} apples
        and ${num2} mangoes`;
        return juice;
    }
    const output =fruitProcessor(2,2)
    console.log(output);
//function declaration
function year (birthYear){
    return 2040-birthYear;
 }   
const age =year(1997);
console.log(age);
//function expression
const year1=function (birthYear){
    return 2040-birthYear;
 }   
const age1 =year(1997);
console.log(age1);
