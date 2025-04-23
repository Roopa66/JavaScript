// Arrays
let languages = ['java','ruby','python'];

//1. length of array
console.log("length of array "+languages.length);

//2 adding element in the end
const newlength = languages.push("Go");
console.log(newlength);
console.log(languages);

//3 removing element in the end
const removedElement = languages.pop();
console.log("removed element "+removedElement);
console.log(languages);

//4 adding element in the beginning
const l = languages.unshift("C");
console.log(l);
console.log(languages);

//5 removing elememt from the beginning
const el =languages.shift();
console.log(el);
console.log(languages);

languages.push("Cobol","Javascript");
console.log(languages);

//6. splice
languages.splice(2,2,"C","C++"); // startpoint, delete count,replaceable values
console.log(languages);

//7. slice ---> return subarray [ start, end-1]
const subLanguages = languages.slice(1,3);
console.log(subLanguages);

// 8. concat
const a =[1,3,5,6];
const b= ['AB','CB'];
console.log(a.concat(b));
console.log(b.concat(a));

//9. index of
console.log(languages);
console.log("Index of C "+languages.indexOf('CD'));

//10. includes
// 11. for each
console.log(languages);
console.log("For Each MEthod");
const num =[10,2,4,16];
console.log(num);

const sqrNum =[];
num.forEach( (n) =>{
     sqrNum.push(n*n);
});
console.log("Squared Elements ",sqrNum);





