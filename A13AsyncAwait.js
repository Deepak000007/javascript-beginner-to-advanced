async function adp() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P1 resolved")
        }, 2000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P2 resolved")
        }, 3000)
    })

    // p1.then(console.log("HIIIIIII"))
    // p2.then(console.log("HELLLLOOOO"))

    console.log("This function is running............")
    let a = await p1
    console.log("The value of a is", a)
    console.log("This function more now is running............")
    let b = await p2
    console.log("The value of b is", b)
    return [a,b]

}

const main = async () => {
    console.log("I am here ")
    let x = await adp()
    console.log(x)
}

main()