// Map method in array is 
const nums = [10,20,30];
const sqrNum = nums.map( (el) =>{
    return el*el;
} );
console.log(sqrNum);

// FAH to Cel conversion
const fah =[32,68,90];
console.log(fah);
const cel = fah.map( (value) =>{
    return ((value-32)*5/9);
})

console.log(cel);