// If  else Condition
const num = 10;
if(num %2 === 0){
    console.log(`the number ${num} is even number
                    hellow JS`);
}else{
    console.log("num is odd");
}

// For Loop
console.log("For Loop");
for(let i=0;i<=5;i++){
//console.log(i);
}

// For Of Loop
// used for Arrays
console.log("For Of Loop");
const nums = [10,20,30,40];
for(const num of nums){
    console.log(num);
}
console.log("For In Loops");
for(const el in nums){
    console.log(nums[el]);
}

const user ={
    name:'Ramya',
    age:25,
    gender:"female"
}
for(const key in user){
    console.log(key +":"+user[key]);
}

// Switch
const bName="firefox";
switch(bName){
    case "chrome":
        console.log("chrome");
        break;
    case 'edge':
        console.log("edge");
        break;
    default:
        console.log("chrome");
        break;
}
