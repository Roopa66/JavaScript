//Arrow Functions
const year = birthYear =>2040-birthYear;
const age = year(2000);
console.log(age);

const yearsUntiRetirement = birthYear =>{
    const age = 2040-birthYear;
    const retirement = 65-age;
    return `yearsUntiRetirement is ${retirement}`;
}
console.log(yearsUntiRetirement(2000));
//
const yearsUntiRetirementByNames = (birthYear,firstName) =>{
    const age1 = 2040-birthYear;
    const retirement = 65-age1;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntiRetirementByNames(1999,'Rajolla'));
console.log(yearsUntiRetirementByNames(2003,'Tarun'));
console.log(yearsUntiRetirementByNames(1998,'Sathvik'));