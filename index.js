// const person={
//     firstName: 'yoshi',
//     age: 30,
//     favColor: 'green'
// }


// const {favColor,age,firstName} = person

// Will throw undifined for variable age2
// // const {favColor,age2,firstName} = person
// // console.log(firstName,favColor,age2)


// console.log(firstName,favColor,age)


// Array Destructuring
// const nums = [1,2,3,4]

// const [a,b,...rest] = nums
// console.log(a,b,rest)

// destructuring an object from a function return
// const getCalculations = (a,b) => {
//     // return {
//     //     sum : a+b,
//     //     diff: Math.abs(a-b),
//     //     product: a*b
//     // }
//     return [
//         a+b,
//         Math.abs(a-b),
//         a*b
//     ]
// }

// const [sum,diff,product] = getCalculations(5,5)

// console.log(sum,diff,product)

// Destructuring a arguments in function in its function parameter

const printName= ({name}) => {
    return `Name: ${name.toUpperCase()}`
}
const user={
    name:"vicky",
    age:25
}
console.log(printName(user))