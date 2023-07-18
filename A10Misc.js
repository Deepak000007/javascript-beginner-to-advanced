// let arr = [3,5,6,7,8,9,10,22,333,333]
// let [a,b,c,d, ...remaining] = arr
// console.log(a,b,c,d, remaining)

// let [a1, , , ...remainingValue] = arr
// console.log(a1, remainingValue)
// console.log(a1, remainingValue[0])

// let {a2, b2} = {a2: 122, b2: 445}
// console.log(a2, b2)



// spread operator
let arr3 = [3,7,9]
let obj1 = {...arr3}
// console.log(obj1)

function average(a1,a2,a3) {
    return (a1+a2+a3)/3
}
// console.log(average(...arr3))


let obj2 = {
    name: "Dkg",
    address: "xyz",
    phone: 2323344
}

// console.log({...obj2, name: "Mukesh chopra"})
// console.log({name: "Mukesh chopra", ...obj2}) // not work


// local vs global scope
let l = 9
function h() {
    let a = 8;
    console.log(l)
    console.log(a)
}
h()

console.log(l)
// console.log(a)


// hoisting in js
// console.log(a)
// hello()
// var hello = function() {
//     console.log("Hello")
// }

// var a=9


// arrow function
const arrw = age => {
    console.log("My age is", age)

}

const arrw3 = (name, age, address) => {
    console.log(name, age, address)
}

const myarrw = {
    name: "Myname",
    age: 26,
    address: "Delhi",
    hi: function() {
        console.log("HI")
    }
}

arrw(26)
arrw3("Prakash", 27, "New Delhi")




