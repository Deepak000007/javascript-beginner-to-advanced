// Arrays
let marks = [91, 87, 61, 89, false, "Absent"]
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[6])
// console.log(marks.length)
// marks[1] = 99;
// marks[5] = 14;
// console.log(marks)
// console.log(typeof marks)

let n = [1,2,34,53,21]
// console.log(n)
let b = n.toString()
// console.log(b)
// console.log("Type of b is", typeof(b))

// let c = n.join(" and ")
// console.log(c, typeof(c))
// let r = n.pop() // return the popped element
// console.log(n, r)

// let s = n.push(56)
// console.log(n, s) // returns the new array length

// let u = n.shift()
// console.log(n, u)

// let w = n.unshift(78)
// console.log(n, w)
// console.log(w)


let num1 = [1,2,3,4,5,6,7,8]
let num2 = [34,45,66,66,64,32]
let num3 = [33445,2333,34355,3566,356644]

// console.log(num1.length)
// delete num1[0]
// console.log(num1)
// console.log(num1.length)

// let newNum = num1.concat(num2,num3)
// console.log(newNum)
// console.log(num1, num2, num3)

// sort method
let compare = (a,b) => {
    return a-b
}
// let num = [57,32234,35,355,2,3,6,292]
// num.sort() // modify our origional arrays
// num.sort(compare)
// console.log(num)


// let deletedVal = num.splice(2,4,1334,533,3553,3225) // modify origional array
// console.log(num)
// console.log(deletedVal)


// let newNum2 = num.slice(3) // modify new array 
// console.log(newNum2)

// let newNum3 = num.slice(3,6)
// console.log(newNum3)
// console.log(num)



let num = [3,7,1,2,9]

for(let i=0; i<num.length; i++){
    // console.log(num[i])
}

// forEach loop
num.forEach((element) => {
    // console.log(element*element)
})

// Array.from - used to create array from any other object
let name4 = "Pramod"
let arr = Array.from(name4)
// console.log(arr)


// for.. of
for (let item of num) {
    // console.log(item)
}

// for.. in
for(let i in num){
    // console.log(num[i])
}



// map
// let map1 = [45, 23,28, 32,35] // it will make new array
// let sol1 = map1.map((value, index, array) => {
//     console.log(value, index, array)
//     return value + index
// })
// console.log(sol1)


// Array filter method --> it will make new array
// let filter1 = [45, 27, 98, 0, 3, 9]
// let sol2 = filter1.filter((a) => {
//     return a < 10
// })
// console.log(filter1, sol2)
// console.log(sol2)



// Array reduce method
let reduce1 = [1,2,3,4,5,6,7] // will return new value
let sol3 = reduce1.reduce((h1,h2) => {
    return h1 + h2
})
console.log(sol3)
console.log(reduce1)
