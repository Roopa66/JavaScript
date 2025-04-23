// three data types we have, var, let, const

// var can be re declared and re initialized
var a=10; // intialization,declaration
console.log(a);
var a = 20; // re declaration
console.log(a);
 a = 30; // re intialization
 console.log(a);

 // Let  --> cant be re declared and can be re initialized
 let b = 10;
 console.log(b);
 //let b = 20; // compile error --> cant be re delcared
 b =30;  // can be re initialized.
 console.log(b);

 // const -->  cant be re delcared, cant be re intialized
 const c = 10;
 //const c= 20; // compile error for re delcaration;
 c= 30; // No error but will throw Run time error.
