// let a = {
//     name1: "Parash",
//     lab: "External lab",

// }

// console.log(a)

// let p1 = {
//     ask: () => {
//         alert("This is prototype")
//     }
// }

// p1.__proto__ = {
//     name: "This is name"
// }

// a.__proto__ = p1
// console.log(p1.name)
// console.log(p1)



// Class and objects
class MyClass {
    constructor(name, address, phone) {
        // console.log("Constructor is called .... ", name, address, phone)
        this.name = name
        this.address = address
        this.phone = phone
    }
    hello() {
        console.log("This is hello method")
    }
    
    hi() {
        console.log("This is hi method")
    }

    giveParams(a,b){
        this.a = a
        this.b = b
    }

    show() {
        console.log("My name is", this.name, "I live in " + this.address, "My phone is", this.phone)
    }

}

let obj1 = new MyClass("Prakash", "New Delhi", 32234343)
// obj1.giveParams("Prakash", 43)
// obj1.hello()
// obj1.hi()
// obj1.show()



// class Animal {
//     constructor(name, breed){
//         this.name = name
//         this.breed = breed
//     }
//     walk() {
//         console.log(this.name + " is walking.")
//     }
//     talk() {
//         console.log(this.name, "is talking")
//     }
// }

// class Cat extends Animal {
//     bite() {
//         console.log(this.name, "bites")
//     }
// }

// let animal = new Animal("Sheru", "Dog")
// let c1 = new Cat("Catty", "Cat")

// animal.walk()
// animal.talk()
// animal.bite()
// c1.walk()
// c1.talk()
// c1.bite()


// method overriding

class Animal {
    constructor(name, breed){
        console.log("This Animal constructor is called")
        this.name = name
        this.breed = breed
    }
    walk() {
        console.log(this.name + " is walking.")
    }
    talk() {
        console.log(this.name, "is talking")
    }
    numberOfLegs(legs) {
        console.log(`Animal has ${legs} legs and 2 hands`)
    } 
}

class Cat extends Animal {
    // constructor(name, breed) {
    //     super(name, breed)
    // }
    // constructor(...args) {
    //     super(...args)
    // }
    constructor(name, breed) {
        super(name, breed)
        console.log("Cat class constructor is called")
        
    }
    bite() {
        console.log(this.name, "bites")
    }
    numberOfLegs(legs) {
        super.numberOfLegs(4)
        // console.log(`Cat has ${legs} legs`)
    }
}

let c =new Cat("Catty", "Cat")
c.numberOfLegs(4);



// static methods
class Animal2 {
    constructor(name) {
        this.name = name
    }
    walk() {
        console.log("Animal " + this.name + " is walking")
    }

    static toUpperCase(name) {
        return name.toUpperCase()
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

let a2 = new Animal2("Sheru")
a2.walk()
a2.name="Jonny"
console.log(a2.name)


console.log(c instanceof Animal)



