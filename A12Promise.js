// console.log("Start of program")
// setTimeout(function() {
//     console.log("This will be executed")
// }, 2000)
// console.log("End of the program")

// Promise -> It is a promise of code execution, basically it is a solution to callback hell, the subscribers will be notified if code executes or fails

// let promise = new Promise(function(resolve, reject) {
//     console.log("Hello")
//     resolve(78)
// })


// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is running")
//     setTimeout(() => {
//         resolve(222)
//     }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is running")
//     setTimeout(() => {
//         // resolve(222)
//         reject(new Error("Error rejected"))
//     }, 5000)
// })

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((error) => {
//     console.log("Some errorss")
// })

// p2.then((value) => {
//     console.log(value)
// }, (error) => {
//     console.log(error)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("RESolved promise")
//         resolve(89)
//     }, 2000)
// })


// p3.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("Promise 2 resolved")}, 2000)
//     })
// }).then((value) => {
//     console.log(value)
//     console.log("3rd .then value")
//     return 2
// }).then((value) => {
//     console.log(value)
//     console.log("done promising")
// })



// Multiple Handlers

// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4);
//     }, 2000)
// })

// p4.then(() => {
//     console.log("HIIII")
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve(5)
//         }, 8000)
//     })
// }).then((value) => {console.log(value)})

// p4.then(() => {
//     console.log("Promise resolved finally................")
// })




// Promise API
let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Values of one")
    }, 8000)
});

let p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value of two")
        // reject(new Error)
    }, 2000)
})

let p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value of three")
        // reject(new Error)
    }, 3000)
})

// p6.then((value) => {
//     console.log(value)
// })
// p7.then((value) => {
//     console.log(value)
// })
// p8.then((value) => {
//     console.log(value)
// })



// let promise_all = Promise.all([p6,p7,p8])
// let promise_all = Promise.allSettled([p6,p7,p8])
// let promise_all = Promise.race([p6,p7,p8])
// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("error"))


promise_all.then((value) => {
    console.log(value)
})



