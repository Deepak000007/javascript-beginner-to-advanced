// window.console.log(window) // console.log(window)
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// document.body.style.background="orange"
// location.href="https://www.google.com"

// document.getElementsByClassName("hey")[0].style.color = "orange"

/*
DOM Tree refers to the HTML page where all the nodes are objects
3 main types:
1. text nodes
2. element nodes 
3. comment nodes
*/

// console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.title)

// Accessing children of an Element
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[1].childNodes)



// Accessing children of DOM
// console.log(document.body.childNodes)
// let arr = Array.from(document.body.childNodes)
// console.log(arr)
// console.log(document.body.childNodes)
// console.log(document.body.hasChildNodes())


// Accessing parents and siblings
let a = document.body.firstChild
// console.log(a)
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild)
// console.log(a.nextSibling)

// console.log(document)
// console.log(document.documentElement)
// console.log(document.documentElement.parentNode)
// console.log(document.documentElement.parentElement)


// Element only navigation

// console.log(document.body.previousSibling)
// console.log(document.body.previousElementSibling)
// console.log(document.body.nextElementSibling) //null

// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)


let c1 = document.getElementsByClassName("hey")
// console.log(c1)
// console.log(Array.from(c1))
// c1[0].style.color="red"
// let c2 = document.getElementById("first")
// console.log(c2)
// c2.style.color="blue"

let c3 = document.querySelector("#first")
let c4 = document.querySelector(".hey")
// console.log(c3)
// console.log(c4)
// c3.style.color="blue"
// let c89 = document.querySelectorAll('.hey')
// console.log(c89)

// console.log(Array.from(document.getElementsByTagName("div")))

// console.log(document.querySelectorAll(".hey")[1].getElementsByTagName("div"))
// console.log(document.getElementsByName("firstname"))


// matches, closest and contains

/*
1. elem.matches(css) - To check if element matches the given css selection
2. elem.closest(css) - To checks for the nearest ancestor that matches the Css selector
3. elem.contains(elem2) = Return true if elem2 is inside elem
*/

let id1 = document.getElementById("second")
let s1 = document.getElementById("s1")
// console.log(id1)
// console.log(s1)
// console.log(id1.matches(".hello"))
// console.log(id1.matches(".hey"))
// console.log(id1.closest(".hey"))
// console.log(id1.closest("#s1"))
// console.log(s1.closest("#s1"))
// console.log(id1.contains(s1))




let t = document.getElementsByClassName("table1")
// let t = document.body.lastElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.caption)
// console.log(t.tHead.firstElementChild)
// console.log(t.tFoot)
// console.log(t.tBoodies)
// console.log(trows[0].rowIndex)
// console.log(t)



let first = document.getElementById("first")
// console.log(first.innerHTML)
// first.innerHTML = "<h2>Hey this is h2</h2>"

// console.log(first.outerHTML)
// first.outerHTML = "<h2>Hey this is h2</h2>"
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[2].data)
// console.log(document.body.textContent)
first.hidden = false


let a2 = first.getAttribute("class")
// console.log(a2)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden", true)
// first.setAttribute("class", "one more yes")
// console.log(first.getAttribute("class"))

// first.removeAttribute("class")
// console.log(first.attributes)


// Insertion in DOM
let a3 = document.getElementsByTagName('div')[0]
// a3.innerHTML = a3.innerHTML + '<h1>This also works</h1'
let div = document.createElement('div')
div.innerHTML = '<h1>This also works fine</h1>'
// a3.appendChild(div)
// a3.append(div)
// a3.prepend(div)
// a3.before(div)
// a3.after(div)
// a3.replaceWith(div)


// insert in adjacent

// first.insertAdjacentHTML('beforebegin', '<div class="test">Beforebegin</div>')
// first.insertAdjacentHTML('beforeend', '<div class="test">Beforeend</div>')
// first.insertAdjacentHTML('afterbegin', '<div class="test">Afterbegin</div>')
// first.insertAdjacentHTML('afterend', '<div class="test">Afterend</div>')

// first.remove()

// classname_classlist

// first.className = "text-black orang"
first.classList.add("blue")
// first.classList.remove("blue")
// console.log(first.classList.contains("hey"))
// first.classList.toggle("blue")








// setInterval and setTimeout

document.write("Helloooooooooooooooooooooooooooo")
// const sum = (a,b,c) => {
//     console.log("This sum is " + (a+b+c))
//     a + b
// }

// setTimeout(sum, 5000, 1,2,7)

// setInterval(function() {
//     alert("setinterval")
// }, 3000)

// let a4 = setTimeout(function() {
//     alert("i am set time out")
// }, 5000)

// a4()




// browser events
let a5 = document.getElementsByClassName("container")[0]
a5.onclick = () => {
    let b5 = document.getElementsByClassName("container")[0]
    b5.innerHTML = "Hellooooooooo this is hiIIIIIIIIIIIII"
}

let x = function(event) {
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
}
let btn = document.getElementById("btn")
// btn.addEventListener('click', x)

// let y = function(e) {
//     console.log(e)
//     alert("helloooo")
// }

// btn.addEventListener('click', y);

// let a9 = prompt("Enter a number")
// if(a9=="8") {
//     btn.removeEventListener('click', x)
//     btn.removeEventListener('click', y)
// }










// cookies

document.cookie = "name=prasad"
document.cookie = "add=prasad"
document.cookie = "add2=prasad"
console.log(document.cookie)

// let key = 123
// let value = "33443kdkkdk"
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`


// local storage 
let key = "133"
let value = "dkdkdkk"
localStorage.setItem(key, value)
localStorage.setItem("key", "value")
console.log(key, localStorage.getItem(key))

// localStorage.removeItem(key)
console.log(key, localStorage.getItem(key))
// console.log(key, localStorage.getItem(key))

console.log(localStorage.length)
console.log(localStorage.key(1))

localStorage.one = 1
console.log(localStorage.one)
delete localStorage.one     


/* Important 
 Both key and value must be strings
*/

// Session storage 
let key2 = "name"
let value2 = "dkdkdkk"
sessionStorage.setItem(key2, value2)
console.log(sessionStorage.getItem("name"))
sessionStorage.clear()
sessionStorage.removeItem("name")


let fetchData = fetch("https://jsonplaceholder.typicode.com/todos")
fetchData.then((response) => {
    console.log(response)
    console.log(response.text())
    return response.json()
    

}).then((value) => {
    console.log(value)
})

















