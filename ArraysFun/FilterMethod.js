// filter method 
const nums = [1,2,3,4,5,6];
console.log(nums);
const even = nums.filter((el) =>{
    if(el%2 === 0){
        return el;
    }
});
console.log(even);
console.log(even.length);

// MAP
console.log(nums);
const even1 = nums.map((el) =>{
    if(el%2 === 0){
        return el;
    }
});
console.log(even1);
console.log(even1.length);
