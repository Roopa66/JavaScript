//Reduce method
const num =[10,20,30,4];

// to find sum
const Value = num.reduce( (sum,n)=>sum+n,0);
console.log(Value);

// to find Min value
const minValue=num.reduce( (min,n) =>{
   if(n < min){
    return n;
   }else{
    return min;
   }
}, num[0] );
console.log("Min value is "+minValue);

// swapping two values
let a =10;
let b='RB'
console.log(`a = ${a} b= ${b}`);
[a,b] = [b,a];
console.log(`a = ${a} b= ${b}`);
