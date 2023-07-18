// setTimeout(()=> {
//     console.log("This is 1st setTimeout")
// }, 1000)

// try {
//     setTimeout(()=> {
//         console.log("Hiii")
//     }, 500)
// }
// catch(err) {
//     console.log("Hello")
// }

// custom errors
// try {
//     let num = 30
//     console.log(num)
//     if(num > 50) {
//         throw new ReferenceError("Error")
//     }
// } catch(error) {
//     console.log(error.name)
// }



/// finally block
try {
    let num = 60
    console.log(num)
    if(num > 50) {
        throw new ReferenceError("Error")
    }
} catch(error) {
    console.log(error.name)
} finally {
    console.log("It will definitely execute")
}



// cookie
// console.log(document.cookie)
